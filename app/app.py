from flask import Flask, jsonify, request, render_template, send_from_directory
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})
API_KEY = "059247747ec9cc8ddaed14eecee80d58"
API_BASE_URL = "http://api.openweathermap.org/data/2.5"

# Endpoint para obtener los datos de ubicación de la ciudad actual según ip-api.
@app.route("/api/v1/")
def get_current_location():
    try:
        public_ip_response = requests.get("https://api.ipify.org?format=json")
        public_ip_data = public_ip_response.json()
        public_ip = public_ip_data["ip"]

        location_response = requests.get(f"http://ip-api.com/json/{public_ip}")
        location_data = location_response.json()

        lat = location_data["lat"]
        lon = location_data["lon"]

        weather_response = requests.get(f"{API_BASE_URL}/weather?lat={lat}&lon={lon}&appid={API_KEY}")
        weather_data = weather_response.json()

        forecast_response = requests.get(f"{API_BASE_URL}/forecast?lat={lat}&lon={lon}&appid={API_KEY}")
        forecast_data = forecast_response.json()

        # Filtrar los datos del pronóstico para obtener solo los 5 días
        forecast_list = forecast_data["list"]
        forecast_filtered = [forecast_list[i] for i in range(0, len(forecast_list), 8)][:5]

        location_data["weather"] = weather_data
        location_data["forecast"] = forecast_filtered

        return jsonify(location_data)
    except Exception as e:
        return jsonify({"error": "Error al obtener la ubicación actual", "details": str(e)})

# Endpoint para obtener los datos de ubicación y estado del tiempo actual para una ciudad
@app.route("/api/v1/<city>")
@app.route("/api/v1/<city>/<country>")
def get_weather(city, country=None):
    try:
        if country:
            query = f"{city},{country}"
        else:
            query = city

        weather_response = requests.get(f"{API_BASE_URL}/weather?q={query}&appid={API_KEY}")
        weather_data = weather_response.json()

        return jsonify(weather_data)
    except Exception as e:
        return jsonify({"error": "Error al obtener los datos del clima actual", "details": str(e)})

@app.route("/api/v1/forecast/<city>")
@app.route("/api/v1/forecast/<city>/<country>")
def get_weather_forecast(city, country=None):
    try:
        if country:
            query = f"{city},{country}"
        else:
            query = city

        weather_response = requests.get(f"{API_BASE_URL}/forecast?q={query}&appid={API_KEY}")
        weather_data = weather_response.json()

        if "list" in weather_data:
            forecast_list = weather_data["list"]
            dates = set()
            forecast_filtered = []

            for forecast in forecast_list:
                date = forecast["dt_txt"].split(" ")[0]
                if date not in dates:
                    dates.add(date)
                    forecast_filtered.append(forecast)
                
                if len(forecast_filtered) == 5:
                    break
            
            return jsonify(forecast_filtered)
        else:
            return jsonify({"error": "No se pudo obtener el pronóstico del tiempo"})
    except Exception as e:
        return jsonify({"error": "Error al obtener los datos del pronóstico del tiempo", "details": str(e)})

# Ruta para renderizar la página principal de la aplicación
@app.route("/")
def render_home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)

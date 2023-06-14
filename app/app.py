from flask import Flask, jsonify, request, render_template, send_from_directory
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})
API_KEY = "059247747ec9cc8ddaed14eecee80d58"
API_BASE_URL = "http://api.openweathermap.org/data/2.5"

# Rutas para servir los archivos estáticos de Vite
@app.route("/dist/<path:filename>")
def serve_static(filename):
    root_dir = os.path.dirname(os.path.abspath(__file__))
    dist_dir = os.path.join(root_dir, "frontend", "dist")
    return send_from_directory(dist_dir, filename)

@app.route("/dist/assets/<path:filename>")
def serve_assets(filename):
    root_dir = os.path.dirname(os.path.abspath(__file__))
    dist_dir = os.path.join(root_dir, "frontend", "dist", "assets")
    return send_from_directory(dist_dir, filename)

# Endpoint para obtener los datos de ubicación de la ciudad actual según ip-api
@app.route("/api/v1/")
def get_current_location():
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





# Endpoint para obtener los datos de ubicación y estado del tiempo actual para una ciudad
@app.route("/api/v1/<city>")
@app.route("/api/v1/<city>/<country>")
def get_weather(city, country=None):
    if country:
        query = f"{city},{country}"
    else:
        query = city

    weather_response = requests.get(f"{API_BASE_URL}/weather?q={query}&appid={API_KEY}")
    weather_data = weather_response.json()
    return jsonify(weather_data)


@app.route("/api/v1/forecast/<city>")
@app.route("/api/v1/forecast/<city>/<country>")
def get_weather_forecast(city, country=None):
    if country:
        query = f"{city},{country}"
    else:
        query = city

    weather_response = requests.get(f"{API_BASE_URL}/forecast?q={query}&appid={API_KEY}")
    weather_data = weather_response.json()

    if "list" in weather_data:
        forecast_data = weather_data["list"]
        return jsonify(forecast_data)
    else:
        return jsonify({"error": "No se pudo obtener el pronóstico del tiempo"})




# Ruta para renderizar la página principal de la aplicación
@app.route("/")
def render_home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)

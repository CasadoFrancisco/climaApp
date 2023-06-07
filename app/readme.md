from flask import Flask, jsonify, request
import requests

app = Flask(__name__)
API_KEY = "059247747ec9cc8ddaed14eecee80d58"
API_BASE_URL = "http://api.openweathermap.org/data/2.5"

# Endpoint para obtener los datos de ubicación de la ciudad actual según ip-api
@app.route("/api/v1/")
def get_current_location():
    public_ip_response = requests.get("https://api.ipify.org?format=json")
    public_ip_data = public_ip_response.json()
    public_ip = public_ip_data["ip"]

    location_response = requests.get(f"http://ip-api.com/json/{public_ip}")
    location_data = location_response.json()
    
    return jsonify(location_data)

# Endpoint para obtener los datos de ubicación y estado del tiempo actual para una ciudad
@app.route("/api/v1/<city>")

def get_weather(city=None):
    if city:
        weather_response = requests.get(f"{API_BASE_URL}/weather?q={city}&appid={API_KEY}")
        weather_data = weather_response.json()
        main_weather_data = {
            "city": weather_data["name"],
            "description": weather_data["weather"][0]["description"],
            "temperature": weather_data["main"]["temp"],
            "humidity": weather_data["main"]["humidity"],
            "pressure": weather_data["main"]["pressure"],
            "wind_speed": weather_data["wind"]["speed"],
            "wind_direction": weather_data["wind"]["deg"]
        }
        return jsonify(main_weather_data)
    else:
        ip_address = request.remote_addr
        location_response = requests.get(f"http://ip-api.com/json/{ip_address}")
        location_data = location_response.json()
        lat = location_data["lat"]
        lon = location_data["lon"]
        weather_response = requests.get(f"{API_BASE_URL}/weather?lat={lat}&lon={lon}&appid={API_KEY}")
        weather_data = weather_response.json()
        main_weather_data = {
            "city": weather_data["name"],
            "description": weather_data["weather"][0]["description"],
            "temperature": weather_data["main"]["temp"],
            "humidity": weather_data["main"]["humidity"],
            "pressure": weather_data["main"]["pressure"],
            "wind_speed": weather_data["wind"]["speed"],
            "wind_direction": weather_data["wind"]["deg"]
        }
        return jsonify(main_weather_data)


# Endpoint para obtener los datos de ubicación y estado del tiempo para los próximos 5 días
@app.route("/api/v1/forecast/<city>")
def get_weather_forecast(city=None):
    if city:
        # Si se proporciona una ciudad, obtener directamente el pronóstico del tiempo
        weather_response = requests.get(f"{API_BASE_URL}/forecast?q={city}&appid={API_KEY}")
    else:
        # Si no se proporciona una ciudad, mostrar un mensaje de error
        return jsonify({"error": "No se proporcionó una ciudad"})

    weather_data = weather_response.json()

    if "list" in weather_data:
        # Si se encontraron datos de pronóstico para la ciudad, devolver el pronóstico del tiempo
        forecast_data = weather_data["list"]
        return jsonify(forecast_data)
    else:
        return jsonify({"error": "No se pudo obtener el pronóstico del tiempo"})





if __name__ == "__main__":
    app.run(debug=True)
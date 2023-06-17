import { useState, useEffect } from "react";

interface WeatherData {
  
  temperature: number;
  humidity: number;
  icon: string;
  termicSens: number;
  tempMax: number;
  tempMin: number;
  windSpeed: number;
  windDireccion: string;
  statusSky:string;
  
  
  // Agrega la propiedad "icon" de tipo string
  // otras propiedades y tipos
}

export function useFetch(url: string): { data: WeatherData | null } {
  const [data, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weatherData: WeatherData = {
    
          temperature: Math.round(data.main.temp - 273.15),
          termicSens: Math.round(data.main.feels_like - 273.15),
          tempMax: Math.round(data.main.temp_max - 273.15),
          tempMin: Math.round(data.main.temp_min - 273.15),
          humidity: data.main.humidity,
          windSpeed: Math.round(data.wind.speed * 3.6),
          windDireccion: getWindDirection(data.wind.deg),
          statusSky:data.weather[0].description,
          icon: data.weather[0].icon,
          // Asigna el valor del icono
          // asigna otras propiedades según sea necesario
        };
        setData(weatherData);
      });
  }, [url]);

  // Función auxiliar para obtener la dirección del viento
  function getWindDirection(degrees: number): string {
    const directions = [
      "norte",
      "noreste",
      "este",
      "sudeste",
      "sur",
      "suroeste",
      "oeste",
      "noroeste",
    ];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  }

  return { data };
  console.log(data)
}

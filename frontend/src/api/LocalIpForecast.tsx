import { useState, useEffect } from "react";

interface ForecastData {
  dt_txt: string;
  main: {
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  weather: {
    icon: string;
  }[];
}


interface PropsData {
  dateFore: string;
  tempMaxFore: number;
  tempMinFore: number;
  humidityFore: number;
  icon: string;

}

export function useFetch(url: string): { data: PropsData[] | null } {
  const [data, setData] = useState<PropsData[] | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        const parsedData: PropsData[] = responseData.forecast.map(
          (item: ForecastData) => ({
            dateFore: item.dt_txt,
            tempMaxFore:  Math.round(item.main.temp_max- 273.15),
            tempMinFore:  Math.round(item.main.temp_min- 273.15),
            humidityFore: item.main.humidity,
            icon: item.weather[0]?.icon || "",
            
          })
        );
        setData(parsedData);
        
      });
  }, [url]);

  return { data };
}

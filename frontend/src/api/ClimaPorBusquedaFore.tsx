import { useState, useEffect } from "react";


interface ForecastData{
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
    iconFore: string;
  
  }


  export const useFetch = (url: string): { dataFore: PropsData[] | null } => {
    const [dataFore, setDataFore] = useState<PropsData[] | null>(null);
  
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((responseData) => {
          const parsedData: PropsData[] = responseData.map((item: ForecastData) => ({
            dateFore: item.dt_txt,
            tempMaxFore: Math.round(item.main.temp_max - 273.15),
            tempMinFore: Math.round(item.main.temp_min - 273.15),
            humidityFore: item.main.humidity,
            iconFore: item.weather[0].icon || "",
          }));
          
          setDataFore(parsedData);
        });
    }, [url]);
  
    return { dataFore };
  };
  
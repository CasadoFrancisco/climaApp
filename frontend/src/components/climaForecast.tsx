import React from "react";
import { useFetch } from "../api/LocalIpForecast";




export const ClimaForecastComponent: React.FC = () => {
    const { data } = useFetch("http://localhost:5000/api/v1/");
  
    if (!data) {
      return <div>Cargando...</div>;
    }
    const fecha =data.fecha
   
    return (
      <>
        <p>{fecha}</p>
      </>
    );
  };
  

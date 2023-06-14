import React from "react";

interface ForecastData {
  dt_txt: string;
  // Otras propiedades del pronóstico
}

interface ClimaForecastProps {
  forecastData: ForecastData[];
}

export const ClimaForecastComponent: React.FC<ClimaForecastProps> = ({
  forecastData,
}) => {
  return (
    <>
      <h2>Pronóstico del clima</h2>
      {forecastData.map((forecast) => (
        <div key={forecast.dt_txt}>
          {/* Renderizar los detalles del pronóstico para cada día */}
          <p>Fecha: {forecast.dt_txt}</p>
          {/* Otras propiedades del pronóstico */}
        </div>
      ))}
    </>
  );
};

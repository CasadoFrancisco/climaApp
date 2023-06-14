import React from "react";
import { useFetch } from "../api/LocalIp";
import Clock from "./time";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ClimaForecastComponent } from "./climaForecast";

export const ClimaActualComponent: React.FC = () => {
  const { data } = useFetch("http://localhost:5000/api/v1/");

  if (!data) {
    return <div>Cargando...</div>;
  }
  const city = data.city;
  const region = data.region;
  const country = data.country;
  const temperature = data.temperature;
  const termpSens = data.termicSens;
  const tempMax = data.tempMax;
  const tempMin = data.tempMin;
  const humidity = data.humidity;
  const wind = data.windSpeed;
  const windDireccion = data.windDireccion;
  const statusSky = data.statusSky;

  return (
    <>
      <Container>
        <ContainerOne>
          <InfoGeo>Tiempo en:</InfoGeo>
          <Geo>{city}</Geo>
          <Geo>{region}</Geo>
          <Geo>{country}</Geo>
        </ContainerOne>

        <ContainerTwo>
          <ContainerClimaActual
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Clock />
            <StatusSky>{statusSky}</StatusSky>
            <ContainerCustom>
              <ContainerTemp>
                <Temp>{temperature}°</Temp>
                <ContainerTempMM>
                  <TempMin>{tempMin}°</TempMin>
                  <Slash>/</Slash>
                  <TempMax>{tempMax}°</TempMax>
                </ContainerTempMM>
              </ContainerTemp>

              <ContainerIcon>
                <Img
                  src={`https://openweathermap.org/img/wn/${data.icon}.png`}
                  alt="Weather Icon"
                />
              </ContainerIcon>
            </ContainerCustom>

            <SensTerm>Sensacion termica: {termpSens}°</SensTerm>
            <Humidity>Humedad: {humidity}%</Humidity>
            <Wind>velocidad viento: {wind} km/h</Wind>
            <WindDir>Direccion viento: {windDireccion}</WindDir>
          </ContainerClimaActual>
          <ContainerClimapost>
          {/* <ClimaForecastComponent /> */}
          </ContainerClimapost>
        </ContainerTwo>
      </Container>
    </>
  );
};
const Container = styled.div`
  font-family: "Quicksand", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ContainerOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 40%;
  gap: 12px;
  border-bottom: 1px solid white;
  color: #6a040f;
`;
const Geo = styled.h2``;
const InfoGeo = styled.p`
  font-weight: 700;
`;
const ContainerTwo = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 600px;
  width: 70%;
  gap: 100px;
`;
const ContainerClimaActual = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.2); /* Color y opacidad de la sombra */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Efecto de sombra */
  background-color: rgba(239, 196, 196, 0.19); /* Opacidad del fondo */
  border-radius: 20px;
  padding: 30px 30px;
  color: #03071e;
  height: 100%;
`;
const StatusSky = styled.p`
  font-size: 40px;
  font-weight: 400;
  &::first-letter {
    font-size: 55px;
  }
`;
const ContainerCustom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 70%;
`;
const ContainerTemp = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  height: 200px;
`;
const Temp = styled.p`
  font-size: 40px;
`;
const ContainerTempMM = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;
const Slash = styled.p`
  font-size: 25px;
  padding-right: 10px;
`;
const TempMax = styled.p`
  color: #DC2F02;
  font-size: 25px;
  padding-right: 10px;
`;
const TempMin = styled.p`
  color: #0077b6;
  font-size: 25px;
  padding-right: 10px;
`;
const ContainerIcon = styled.div``;
const Img = styled.img`
  height: 150px;
  width: 150px;
`;
const SensTerm = styled.p`
  padding-bottom: 10px;
  font-size: 20px;
`;
const Humidity = styled.p`
  padding-bottom: 10px;
  font-size: 20px;
`;
const Wind = styled.p`
  padding-bottom: 10px;
  font-size: 20px;
`;
const WindDir = styled.p`
  padding-bottom: 10px;
  font-size: 20px;
`;
const ContainerClimapost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
  height: 100%;
  padding: 30px 30px;
  background-color: red;
`;
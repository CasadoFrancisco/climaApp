import React from "react";
import styled from "styled-components";
import { useFetch } from "../api/climaPorBusqueda";
import Clock from "./time";
import { motion } from "framer-motion";
import { ClimaSearchForeComponent } from "./ClimaSearchFrore";
import { useLocation } from "react-router-dom";
import InitialLoader from "./initialLoader";
import { Toaster } from "react-hot-toast";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const ClimaSearchComponent: React.FC = () => {
  const query = useQuery();
  const search = query.get("search");
  const additionalSearch = query.get("region");
  console.log(additionalSearch)

  const { data } = useFetch(`http://localhost:2996/api/v1/${search}/${additionalSearch}`);

  if (!data) {
    return <InitialLoader />;
  }
  const name = data.name;
  const region = data.region;
  const temp = data.temperature;
  const tempMax = data.tempMax;
  const tempMin = data.tempMin;
  const humidity = data.humidity;
  const termicSens = data.termicSens;
  const windSpeed = data.windSpeed;
  const windDireccion = data.windDireccion;
  const statusSky = data.statusSky;
  const icon = data.icon;
  return (
    <>
      <Container>
        <ContainerOne>
          <InfoGeo>Tiempo en:</InfoGeo>
          <Geo>{name}</Geo>
          <Geo>{region}</Geo>
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
                <Temp>{temp}°</Temp>
                <ContainerTempMM>
                  <TempMin>{tempMin}°</TempMin>
                  <Slash>/</Slash>
                  <TempMax>{tempMax}°</TempMax>
                </ContainerTempMM>
              </ContainerTemp>

              <ContainerIcon>
                <Img
                  src={`https://openweathermap.org/img/wn/${icon}.png`}
                  alt="Weather Icon"
                />
              </ContainerIcon>
            </ContainerCustom>

            <SensTerm>Sensacion termica: {termicSens}°</SensTerm>
            <Humidity>Humedad: {humidity}%</Humidity>
            <Wind>velocidad viento: {windSpeed} km/h</Wind>
            <WindDir>Direccion viento: {windDireccion}</WindDir>
          </ContainerClimaActual>
          <ContainerClimapost
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <ClimaSearchForeComponent />
          </ContainerClimapost>
        </ContainerTwo>
        <Toaster />
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
  @media (max-width: 600px) {
    width: 100%;
  }
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
  color:${({theme})=>theme.text};
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const Geo = styled.h2`
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
const InfoGeo = styled.p`
  font-weight: 700;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
const ContainerTwo = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 600px;
  width: 75%;
  gap: 100px;
  @media (max-width: 600px) {
    flex-direction: column;
    max-width: 600px;
    width: 100%;
    height: 100%;
  }
`;
const ContainerClimaActual = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  border: 1px solid ${({theme})=>theme.border};/* Color y opacidad de la sombra */
  box-shadow: 0 2px 4px ${({theme})=>theme.border}; /* Efecto de sombra */
  background-color: ${({theme})=>theme.boxshadow}; /* Opacidad del fondo */
  border-radius: 20px;
  padding: 30px 30px;
  height: 100%;
`;
const StatusSky = styled.p`
  font-size: 40px;
  font-weight: 400;
  color: ${({theme})=>theme.text};
  &::first-letter {
    font-size: 55px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
    &::first-letter {
      font-size: 30px;
    }
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
  color: ${({theme})=>theme.text};
  @media (max-width: 600px) {
    font-size: 30px;
  }
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
  color: #dc2f02;
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
  color: ${({theme})=>theme.text};
`;
const Humidity = styled.p`
  padding-bottom: 10px;
  font-size: 20px;
  color: ${({theme})=>theme.text};
`;
const Wind = styled.p`
  padding-bottom: 10px;
  font-size: 20px;
  color: ${({theme})=>theme.text};
`;
const WindDir = styled.p`
  padding-bottom: 10px;
  font-size: 20px;
  color: ${({theme})=>theme.text};
`;
const ContainerClimapost = styled(motion.div)`
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  flex: 2;
  height: 100%;
  padding: 30px 30px;
  background-color: red;
  border: 1px solid ${({theme})=>theme.border}; /* Color y opacidad de la sombra */
  box-shadow: 0 2px 4px ${({theme})=>theme.border}; /* Efecto de sombra */
  background-color: ${({theme})=>theme.boxshadow}; /* Opacidad del fondo */
  gap: 30px;
  @media (max-width: 600px) {
    max-width: 600px;
    width: 85%;
    height: 100%;
    margin-bottom: 50px;
  }
`;

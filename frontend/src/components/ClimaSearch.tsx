import React from "react";
import styled from "styled-components";
import { useFetch } from "../api/climaPorBusqueda";
import Clock from "./time";
import { motion } from "framer-motion";
import { ClimaSearchForeComponent } from "./ClimaSearchFrore";


interface ClimaSearchComponentProps {
  location: string;
}

export const ClimaSearchComponent: React.FC<ClimaSearchComponentProps>= ({location}) =>{
    const {data} = useFetch(`http://localhost:5000/api/v1/${location}`)
    if (!data) {
        return <div>Cargando...</div>;
      }
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
              <Geo>{location}</Geo>
              <Geo>{}</Geo>
              <Geo>{}</Geo>
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
                <ClimaSearchForeComponent location={location}/>
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
      width: 75%;
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
      color: #6a040f;
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
      color: #6a040f;
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
      color: #6a040f;
    `;
    const Humidity = styled.p`
      padding-bottom: 10px;
      font-size: 20px;
      color: #6a040f;
    `;
    const Wind = styled.p`
      padding-bottom: 10px;
      font-size: 20px;
      color: #6a040f;
    `;
    const WindDir = styled.p`
      padding-bottom: 10px;
      font-size: 20px;
      color: #6a040f;
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
      border: 1px solid rgba(0, 0, 0, 0.2); /* Color y opacidad de la sombra */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Efecto de sombra */
      background-color: rgba(239, 196, 196, 0.19); /* Opacidad del fondo */
      gap: 30px;
    `;
    
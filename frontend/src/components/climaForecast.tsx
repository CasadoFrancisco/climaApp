import React from "react";
import { useFetch } from "../api/LocalIpForecast";
import Loader from "./loader";
import styled from "styled-components";
import { motion } from "framer-motion";


export const ClimaForecastComponent: React.FC = () => {
  const { data } = useFetch("http://localhost:5000/api/v1/");
  console.log(data)

  if (!data) {
    return <Loader />;
  }
  const getDayName = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", options);
  };

  return (
    <>
      <ContainerGrand>
        <ContainerOne
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Title>Proximos 5 dias de la semana</Title>
        </ContainerOne>

        <ContainerTwo
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {data.map((item, index) => (
            <Container
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Day>{getDayName(item.dateFore)}</Day>
              <ContainerTemp>
                <TempMax> {item.tempMaxFore}°</TempMax>
                <Slash>/</Slash>
                <TempMin> {item.tempMinFore}°</TempMin>
              </ContainerTemp>

              <P>Humedad: {item.humidityFore}%</P>
              <img
                src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                alt="Weather Icon"
              />
            </Container>
          ))}
        </ContainerTwo>
      </ContainerGrand>
    </>
  );
};
const Day = styled.h3`
  color: white;
  text-transform: capitalize;
`;
const P = styled.p`
  color:${({theme})=>theme.text};
`;

const ContainerGrand = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 80%;
  @media (max-width: 600px){
    max-width: 600px;
    width: 100%;
    height: 100%;
   
  }
`;
const Title = styled.h3`
  color:${({theme})=>theme.text};
`;
const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid black;
  padding: 20px;
  border: 1px solid ${({theme})=>theme.border}; /* Color y opacidad de la sombra */
  box-shadow: 0 2px 4px ${({theme})=>theme.border}; /* Efecto de sombra */
  background-color:${({theme})=>theme.boxshadow}; /* Opacidad del fondo */
  gap: 10px;
  height: auto;
`;
const ContainerOne = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  
`;
const ContainerTwo = styled(motion.div)`
  display: flex;
  flex: 4;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 600px) {
    max-width: 600px;
    width: 100%;
    flex-direction: column;
  }
`;
const ContainerTemp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Slash = styled.p``;
const TempMax = styled.p`
  color: ${({theme})=>theme.tempMax};
`;
const TempMin = styled.p`
  color:${({theme})=>theme.tempMin};
`;

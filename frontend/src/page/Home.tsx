import React from "react";
import { NavbarComponent } from "../components/navbar";
import { ClimaActualComponent } from "../components/ClimaActual";
import styled from "styled-components";


export const HomeComponent: React.FC = () => {
  return (
    <>
      <Container>
        <NavbarComponent />
        <ClimaActualComponent/>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(to right, #ffba08, #f48c06, #dc2f02);
`;

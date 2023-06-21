import React from "react";
import { ClimaActualComponent } from "../components/ClimaActual";
import styled from "styled-components";

export const HomeComponent: React.FC = () => {
  return (
    <>
      <Container>
        <ClimaActualComponent />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #ffba08, #f48c06, #dc2f02);
  min-height: 100vh;
  @media (min-width: 600px) {
  }
`;

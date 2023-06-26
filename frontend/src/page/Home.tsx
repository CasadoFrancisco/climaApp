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
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
  @media (min-width: 600px) {
  }
`;

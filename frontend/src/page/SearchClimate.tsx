import React from "react";
import styled from "styled-components";
import { ClimaSearchComponent } from "../components/ClimaSearch";

export const SearchClimateComponent: React.FC = () => {
  return (
    <Container>
      <ClimaSearchComponent />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({theme})=>theme.background};
`;

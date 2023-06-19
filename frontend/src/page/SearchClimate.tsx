import React, { useState } from "react";
import styled from "styled-components";
import { NavbarComponent } from "../components/navbar";
import { ClimaSearchComponent } from "../components/ClimaSearch";

export const SearchClimateComponent: React.FC = () => {
  const [location, setLocation] = useState<string>("");

  const handleSearch = (location: string) => {
    setLocation(location);
  };

  return (
    <Container>
      <NavbarComponent onSearch={handleSearch} />
      <ClimaSearchComponent location={location} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(to right, #ffba08, #f48c06, #dc2f02);
`;

import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { NavbarComponent } from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import { HomeComponent } from "./page/Home";
import { SearchClimateComponent } from "./page/SearchClimate";
import Themes from "./components/theme/theme";
import styled, { ThemeProvider } from "styled-components";
import SlideBarComponent from "./components/slidebar/slideBar";



export const App: React.FC = () => {
  const [theme, setTheme] = useState("light");
  console.log(theme);
  return (
    <ThemeProvider theme={Themes[theme]}>
      <BrowserRouter>
        <Container>
          <SlideBarComponent theme={theme} setTheme={setTheme} />
        </Container>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/SearchLocation" element={<SearchClimateComponent />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 0px;
`;

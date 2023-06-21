import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NavbarComponent } from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import { HomeComponent } from "./page/Home";
import { SearchClimateComponent } from "./page/SearchClimate";

export const App: React.FC = () => {
  
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/SearchLocation" element={<SearchClimateComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

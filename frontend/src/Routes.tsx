import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeComponent } from "./page/Home";
import { SearchClimateComponent } from "./page/SearchClimate";

export const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/SearchLocation/:location" element={<SearchClimateComponent />} />
    </Routes>
  );
};
import React from "react";
import { BrowserRouter } from "react-router-dom"
import { RoutesComponent } from "./Routes";


export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <RoutesComponent/>
      </BrowserRouter>
    </>
  );
};


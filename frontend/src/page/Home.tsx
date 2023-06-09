import React from "react";
import { NavbarComponent } from "../components/navbar";
import styled from "styled-components";

export const HomeComponent: React.FC = () => {
  return (
    <>
    <Container>
         <NavbarComponent />
         
    </Container>
     
    </>
  );
};

const Container = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background: linear-gradient(to right, #FFBA08, #F48C06, #DC2F02);

`;

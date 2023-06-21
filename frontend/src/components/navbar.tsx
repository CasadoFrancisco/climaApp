import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import styled from "styled-components";

import ico from "../assets/icono.png";
import sendWhite from "../assets/search-white.png";

export const NavbarComponent: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/SearchLocation?search=" + searchText);
  };

  return (
    <Conitaner onSubmit={handleSubmit}>
      <Link to="/">
        <ContainerIco>
          <Ico src={ico} />
        </ContainerIco>
      </Link>
      <ContainerInput>
        <Input
          type="text"
          placeholder="Clima Paises"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <ConntainerSend>
          <StyledButton type="submit">
            <Send src={sendWhite} />
          </StyledButton>
        </ConntainerSend>
      </ContainerInput>
      <Toaster />
    </Conitaner>
  );
};

const Conitaner = styled.form`
  font-family: "Roboto", sans-serif;
  background: linear-gradient(to right, #ffba08, #f48c06, #dc2f02);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: transparent;
`;
const ContainerIco = styled.div`
  display: flex;
  margin-right: 100px;
  @media (max-width: 600px) {
    margin-right: 0px;
  }
`;
const Ico = styled.img`
  height: 100px;
  @media (max-width: 600px) {
    height: 40px;
  }
`;
const ContainerInput = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 100px;
  align-items: center;
  justify-content: flex-start;
  font-family: "Quicksand", sans-serif;

  @media (max-width: 600px) {
    margin-left: 40px;
  }
`;
const Input = styled.input`
  border-style: none;
  height: 40px;
  width: 200px;
  background-color: transparent;
  padding-left: 10px;
  border-bottom: 1px solid white;
  color: white;
  font-family: "Quicksand", sans-serif;
  &::placeholder {
    color: white;
  }

  @media (max-width: 600px) {
    width: 150px;
  }
`;

const ConntainerSend = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  transition: 1.5s;

  cursor: pointer;
  &:hover {
    background-color: #f48c06;
  }
`;
const StyledButton = styled.button`
  border-style: none;
  background-color: transparent;
`;
const Send = styled.img`
  height: 35px;
  @media (max-width: 600px) {
    height: 30px;
  }
`;

import React, { ChangeEvent, useState } from "react";
import ico from "../assets/icono.png";
import sendWhite from "../assets/search-white.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

interface NavbarComponentProps {
  onSearch: (location: string) => void;
}

export const NavbarComponent: React.FC<NavbarComponentProps> = ({
  onSearch,
}) => {
  const [inputValue, setInputValue] = useState("");
  

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <Conitaner>
      <Link to="/">
        <ContainerIco>
          <Ico src={ico} />
        </ContainerIco>
      </Link>

      <ContainerInput>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Clima Paises"
        />
        <Link to={`/SearchLocation/${inputValue}`}>
          <ConntainerSend>
            <Send onClick={handleSearch} src={sendWhite} />
          </ConntainerSend>
        </Link>
      </ContainerInput>
      
      <Toaster/>
    </Conitaner>
  );
};

const Conitaner = styled.div`
  font-family: "Roboto", sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: transparent;
  @media (max-width: 600px) {
  }
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

const Send = styled.img`
  height: 35px;
`;

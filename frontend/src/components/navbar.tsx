import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import toast,{ Toaster } from "react-hot-toast";
import styled from "styled-components";
import countriesJson  from "../data/data.json"
import ico from "../assets/icono.png";
import sendWhite from "../assets/search-white.png";

console.log(countriesJson)
export const NavbarComponent: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [region, setRegion] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchValue = encodeURIComponent(searchText);
    const regionValue = encodeURIComponent(getRegionValue(region));
    navigate(`/SearchLocation?search=${searchValue}&region=${regionValue}`);
    setSearchText("");
    setRegion("");
  };
  const getRegionValue = (regionName:string) => {
    const matchingCountry = Object.entries(countriesJson).find(([countryName]) =>
      countryName.toLowerCase() === regionName.toLowerCase()
    );

    if (matchingCountry) {
      return matchingCountry[1];
    } else {
      toast.error("Region no encontrada, por favor intente de nuevo",
      {
        icon:'👏',
        style:{
          borderRadius:'10px',
          background:"#D00000",
          color:"white"
        }
      }
      )
      return regionName;
    }
  };

  return (
    <Conitaner onSubmit={handleSubmit}>
     
        <ContainerIco>
           <Link to="/">
          <Ico src={ico} />
           </Link>
        </ContainerIco>
     
      <ContainerInput>
        <Input
          placeholder="Region"
          required
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Clima Paises"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          required
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.background};
  
`;
const ContainerIco = styled.div`
  display: flex;
  margin-right: 100px;
  @media (max-width: 600px) {
    align-items: flex-start;
    justify-content: flex-start;
    margin-right: 0px;
    height: 100px; 
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
  align-items: center;
  justify-content: center;
  font-family: "Quicksand", sans-serif;

  @media (max-width: 600px) {
    margin-left: 40px;
    flex-direction: column;
  }
`;
const Input = styled.input`
  border-style: none;
  height: 40px;
  width: 200px;
  background-color: transparent;
  padding-left: 10px;
  border-bottom: 1px solid white;
  color: ${({ theme }) => theme.input};
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
    background-color: ${({ theme }) => theme.hover};
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

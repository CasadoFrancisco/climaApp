import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "./loader";

const InitialLoader: React.FC = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 8000);
  }, []);

  return (
    <Container>
      {showLoader && (
        <>
          <ContainerUno>
            <Loader />
          </ContainerUno>
          <ContainerDos>
            <Text href="https://git.io/typing-svg">
              <img
                src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=1500&pause=500&color=6A040F&background=FFFFFF00&center=true&width=435&lines=pera+un+cachito+que+arranca..."
                alt="Typing SVG"
              />
            </Text>
          </ContainerDos>
        </>
      )}
    </Container>
  );
};

export default InitialLoader;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ContainerUno = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContainerDos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.a`
  align-content: center;
  @media (max-width: 600px) {
    display: none;
  }
  
`;

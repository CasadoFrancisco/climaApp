import styled, { keyframes } from "styled-components";

const sunshinesAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.6;
  }

  100% {
    transform: scale(1.4);
    opacity: 0;
  }
`;

const cloudsAnimation = keyframes`
  0% {
    transform: translateX(15px);
  }

  50% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(15px);
  }
`;

const Container = styled.div`
  width: 250px;
  height: 250px;
  margin: 100px auto;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloudFront = styled.div`
  width: 250px;
  padding-top: 45px;
  margin-left: 25px;
  display: inline;
  position: absolute;
  z-index: 11;
  animation: ${cloudsAnimation} 8s infinite;
  animation-timing-function: ease-in-out;
`;

const LeftFront = styled.span`
  width: 65px;
  height: 65px;
  border-radius: 50% 50% 0% 50%;
  background-color: #4c9beb;
  display: inline-block;
  z-index: 5;
`;

const RightFront = styled.span`
  width: 45px;
  height: 45px;
  border-radius: 50% 50% 50% 0%;
  background-color: #4c9beb;
  display: inline-block;
  margin-left: -25px;
  z-index: 5;
`;

const SunSunshine = styled.span`
  animation: ${sunshinesAnimation} 2s infinite;
`;

const Sun = styled.span`
  width: 120px;
  height: 120px;
  background: linear-gradient(to right, #fcbb04, #fffc00);
  border-radius: 60px;
  display: inline;
  position: absolute;
`;

const CloudBack = styled.div`
  width: 250px;
  margin-top: -30px;
  margin-left: 150px;
  z-index: 12;
  animation: ${cloudsAnimation} 12s infinite;
  animation-timing-function: ease-in-out;
`;

const LeftBack = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 0% 50%;
  background-color: #4c9beb;
  display: inline-block;
  z-index: 5;
`;

const RightBack = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 50% 50% 50% 0%;
  background-color: #4c9beb;
  display: inline-block;
  margin-left: -20px;
  z-index: 5;
`;

const Loader = () => {
  return (
    <Container>
      <CloudFront>
        <LeftFront />
        <RightFront />
      </CloudFront>
      <SunSunshine />
      <Sun />
      <CloudBack>
        <LeftBack />
        <RightBack />
      </CloudBack>
    </Container>
  );
};

export default Loader;

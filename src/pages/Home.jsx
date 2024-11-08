import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import background from "../assets/contact_img.jpeg"

function Home() {
  return(
    <HomeContainer>
      <Background src={background} alt="Background Photo"/>
      <Banner>
        <Header>
          Welcome!
        </Header>
        <Subheader>
        Hello, I'm Becky Chen! I graduated from RPI with a dual major in Computer Science/Information Technology & Web Science with a minor in Graphic Design Minor.
        </Subheader>
        <Subheader> I am currently based in NYC. </Subheader>
        <Subheader> Feel free to take a look around! </Subheader>
        <Subheader> Updated: December 2024 </Subheader>
      </Banner>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  height: 90vh;
`

const Background = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  display: block;
`

const bannerEaseIn = keyframes`
  0% { opacity: 0; }
  100% {opacity: 1; }
`

const Banner = styled.div`
  background-color: #FDBA7450;
  color: black;
  text-align: center;
  position: absolute;
  top: 25%;
  bottom: 0;
  left: 0;
  right: 0;
  height: fit-content;
  margin: auto;
  animation-name: ${bannerEaseIn};
  animation-duration: 3s;
  padding: 30px 0 30px 0;
  font-family: 'Work Sans', sans-serif;
`

const Header = styled.h1`
  font-size: 40px;
  margin: auto;
`

const Subheader = styled.h2`
  font-size: 15px;
  width: 60%;
  margin: auto;
  font-weight: normal;
`

export default Home
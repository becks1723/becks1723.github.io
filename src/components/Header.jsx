import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoPic from "../assets/Logo-border.png";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaInstagram} from "react-icons/fa";


function Header() {
  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <HeaderLeft>
          <Logo src={LogoPic} />
        </HeaderLeft>
        <HeaderCenter>
          <HeaderNavigationContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/Resume">Resume</StyledLink>
            <StyledLink to="/Projects">Projects</StyledLink>
            <StyledLink to="/Contact">Contact</StyledLink>
          </HeaderNavigationContainer>
        </HeaderCenter>
        <HeaderRight>
          <StyledIcon to="https://www.facebook.com/becks1723"> <FaFacebookSquare /> </StyledIcon>
          <StyledIcon to="https://www.instagram.com/becks1723/"> <FaInstagram /> </StyledIcon>
          <StyledIcon to="https://github.com/becks1723"> <FaGithubSquare /> </StyledIcon>
          <StyledIcon to="https://www.linkedin.com/in/becky-chen2332/"> <FaLinkedin /> </StyledIcon>
        </HeaderRight>
      </HeaderInnerContainer>
    </HeaderContainer>
  );
}


const HeaderContainer = styled.nav`
  width: 100%;
  background-color: #FDBA74;
  display: flex;
  flex-direction: column;
`;

const HeaderLeft = styled.div`
  flex: 30%;
  display: flex;
  justify-content: center;
  
`;

const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 50px;
`

const HeaderInnerContainer = styled.div`
  width: auto;
  height: 80px;
  display: flex;
`;

const HeaderNavigationContainer = styled.div`
  display: flex;
`; 

const StyledLink = styled(Link)`
  text-decoration: none;
  border-bottom: black solid 3px;
  font-weight: bolder;
  color: black;
  font-size: large;
  margin: 20px;
  font-family: 'Work Sans', sans-serif;
`;

const StyledIcon = styled(Link)`
  margin: 20px;
  color: black;
`;

const Logo = styled.img`
  margin: 10px;
  height: auto;
  max-width: 180px;
`;

export default Header;
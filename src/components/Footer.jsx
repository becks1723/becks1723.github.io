import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoPic from "../assets/Logo.png";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaInstagram} from "react-icons/fa";

function Footer() {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <FooterLeft>
          <Logo src={LogoPic} />
          <FooterText>Feel free to drop a 'hello' at beckychen.323@gmail.com</FooterText>
        </FooterLeft>
        <FooterRight>
          <StyledLinkContainer>
            <StyledIcon to="https://www.facebook.com/becks1723"> <FaFacebookSquare /> </StyledIcon> 
            <StyledIcon to="https://www.instagram.com/becks1723/"> <FaInstagram /> </StyledIcon> 
            <StyledIcon to="https://github.com/becks1723"> <FaGithubSquare /> </StyledIcon> 
            <StyledIcon to="https://www.linkedin.com/in/becky-chen2332/"> <FaLinkedin /> </StyledIcon>
          </StyledLinkContainer>
        </FooterRight>
      </FooterInnerContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #FDBA74;
  display: flex;
  flex-direction: column;
  color: black;
  font-family: 'Work Sans', sans-serif;
`;

const FooterInnerContainer = styled.div`
  width: auto;
  height: 80px;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  } ;
`;

const FooterLeft = styled.div`
  display: flex;
  flex: 50%;
  padding-left: 5%;
`;

const FooterRight = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3vw;
  position: relative;
`;

const Logo = styled.img`
  margin: 10px;
  padding: 10px;
`;

const FooterText = styled.p`
  margin: auto;
  opacity: 0.7;
`

const StyledLinkContainer = styled.div`
  position: absolute;
  margin: auto;
`;


const StyledIcon = styled(Link)`
  text-decoration: none;
  margin: 20px;
  color: black;
  opacity: 0.7;
`;

export default Footer;
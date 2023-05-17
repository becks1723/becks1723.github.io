import React from "react";
import styled from "styled-components";
import LogoPic from "../assets/Logo.png";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaInstagram} from "react-icons/fa";
import { ButtonGroup,  IconButton } from '@chakra-ui/react'

function Footer() {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <FooterLeft>
          <Logo src={LogoPic} />
          <FooterText>Feel free to drop a 'hello' at beckychen.323@gmail.com</FooterText>
        </FooterLeft>
        <FooterRight>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://www.facebook.com/becks1723"
              aria-label="Facebook"
              icon={<FaFacebookSquare fontSize="1.25rem" />}
            />
            <IconButton as="a" href="https://www.instagram.com/becks1723/" aria-label="Instagram" icon={<FaInstagram fontSize="1.25rem" />} />
            <IconButton as="a" href="https://github.com/becks1723" aria-label="Github" icon={<FaGithubSquare fontSize="1.25rem" />} />
            <IconButton as="a" href="https://www.linkedin.com/in/becky-chen2332/" aria-label="LinkedIn" icon={<FaLinkedin fontSize="1.25rem" />} />
          </ButtonGroup>
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
  flex-direction: row;
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

export default Footer;
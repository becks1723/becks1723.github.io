import React from 'react';
import styled from 'styled-components';


function Footer() {
  return (
    <Box>
      <FooterContainer>
          
      </FooterContainer>
    </Box>
  );
}

const Box = styled.div`
  padding: 20px 10px;
  background: #fbb4c4;
  position: absolute;
  width: 100%;
  justify-content: center;
`

const FooterContainer = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
`

const FooterLink = styled.div`
  color: #fff;
  margin: 10px;
  font-size: 12px;
  text-decoration: none;
   
  &:hover {
      color: #000000;
      transition: 200ms ease-in;
  }
`

const Heading = styled.p`
  font-size: 20px;
  color: #fff;
  margin: 10px 0px 10px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`
export default Footer;

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

export default Footer;

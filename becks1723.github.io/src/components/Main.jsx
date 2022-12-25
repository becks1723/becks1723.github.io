import styled from 'styled-components';
import React from 'react';
import Footer from './core/Footer';
import Header from './core/Header';
import Home from './core/pages/Home';

function Main() {
  return (
    <MainContainer>
      <Header />
      <Home />
      <Footer />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  height: 100%;
`
export default Main;

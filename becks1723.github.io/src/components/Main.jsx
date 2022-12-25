<<<<<<< HEAD
import styled from 'styled-components'
import React from 'react'

import { Route, Routes } from 'react-router-dom'

function Main() {
    return (
        <div></div>
    )
}

const MainContainer = styled.div``
export default Main
=======
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
>>>>>>> 3ecb6295c7f24257c6a7edde24ff8b6308c2ba88

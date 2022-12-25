import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import Footer from './components/core/Footer'
import Header from './components/core/Header'
import Home from './components/core/pages/Home'

function App() {
  return (
      <HashRouter>
          <ChakraProvider>
              <MainContainer>
                  <Header />
                  <Routes>
                      <Route path='/' element={<Home/>}/>
                  </Routes>
                  <Footer />
              </MainContainer>
          </ChakraProvider>
      </HashRouter>
  )
}

const MainContainer = styled.div`
  
`

export default App;


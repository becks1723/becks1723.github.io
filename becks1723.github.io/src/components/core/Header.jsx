import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Download } from 'react-feather'
import SearchBox from '../atom/SearchBox'

function Header() {
  const fppSearchBox = useRef()
    const [fppQuery, fppSetQuery] = useState('')
  return (
    <HeaderContainer className='HeaderContainer'>
      <LogoContainer className='LogoContainer'>
        <LogoText>Fifth Encore</LogoText>
      </LogoContainer>

      <LinkContainer className='LinkContainer'>
        <Link>Updates</Link>
        <Link>Docs</Link>
        <Link>FAQ</Link>
        <Link>Team</Link>
      </LinkContainer>

      <ActionContainer className='ActionContainer'>
        <SearchBox 
          textRef={fppSearchBox} 
          query={fppQuery}
          setQuery={fppSetQuery}
          placeholder='Search Docs'
        />
        <DownloadButton>
          <Download 
            size={18}
            strokeWidth={1}
            style={{marginRight: '5px'}}
          />
          Download
        </DownloadButton>
      </ActionContainer>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  height: 50px;
  background-color: #323232;
  display: flex;
  justify-content: center;
`

const LinkContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
`

const Link = styled.button`
  all: unset;
  color: #a5a5a5;
  font-size: 13px;
  font-weight: 600;
  margin: 0 12px;

  transition: 200ms;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  height: 100%;
  margin: 0 20px;
  padding-bottom: 3px;

  &:hover {
    cursor: pointer;
  }
`
const LogoText = styled.button`
  all: unset;
  font-size: 17px;
  font-weight: 550;
  color: #fff;
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

`

const DownloadButton = styled.button`
  all: unset;

  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  background-color: #ce3232;
  font-size: 13px;
  padding: 0 10px;
  color: #000;

  transition: 200ms;
  :hover {
    background-color: #b82b2b;
    cursor: not-allowed;
  }
`

export default Header;

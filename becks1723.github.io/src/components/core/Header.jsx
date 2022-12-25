import logo from '../atom/Logo-color.png';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer className='HeaderContainer'>
      <LogoContainer className='LogoContainer'>
        <img src={logo} alt="Becky's Logo"></img>
      </LogoContainer>
      <LinkContainer className='LinkContainer'>
        <Link>Updates</Link>
        <Link>Docs</Link>
        <Link>FAQ</Link>
        <Link>Team</Link>
      </LinkContainer>
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

export default Header;

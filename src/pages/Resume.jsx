import React from "react";
import styled from "styled-components";
import pdf from './Apr2023.pdf';
import SinglePagePDFViewer from "../components/pdf/all-pages"
import { Link } from "react-router-dom";


function Resume() {
  return(
    <ResumeContainer>
      <Title>Resume</Title>
      <Text>Last Updated: April 2023</Text>
      <Download>
        <Link to="/files/Apr2023.pdf" target="_blank" download>download</Link>
      </Download>
      <SinglePagePDFViewer pdf={pdf} />
    </ResumeContainer>
  );
}

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: 'Work Sans', sans-serif;
  width: 100%;
  position: relative;
`

const Download = styled.div`
  background: linear-gradient(to bottom right, #f85f7b, #FDBA74);
  border: 0;
  border-radius: 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  margin: 5px;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  &:hover{
    box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
  }
`

const Title = styled.h1`
  font-size: 50px;
  margin: auto;
  width: 100%;
  text-align: center;
`

const Text = styled.h2`
  font-weight: 500;
  width: 100%;
  margin: auto;
  text-align: center;
`
  

export default Resume
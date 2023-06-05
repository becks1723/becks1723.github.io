import React from "react";
import styled from "styled-components";
import pdf from './June2023.pdf';
import SinglePagePDFViewer from "../components/pdf/all-pages"

function Resume() {
  return(
    <ResumeContainer>
      <Title>Resume</Title>
      <Text>Last Updated: June 2023</Text>
      <Download>
        <Link to="/files/June2023.pdf" target="_blank" download>download</Link>
      </Download>
      <SinglePagePDFViewer pdf={pdf} />
    </ResumeContainer>
  );
}

const ResumeContainer = styled.div`
  
`
export default Resume
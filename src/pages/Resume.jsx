import React from "react";
import styled from "styled-components";
import pdf from './Apr2023.pdf';
import SinglePagePDFViewer from "../components/pdf/all-pages"

function Resume() {
  return(
    <ResumeContainer>
      <SinglePagePDFViewer pdf={pdf} />
    </ResumeContainer>
  );
}

const ResumeContainer = styled.div`
  
`
export default Resume
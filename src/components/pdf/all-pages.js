import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import styled from 'styled-components';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <ResumeContainer>
      <PDFContainer>
        <Document
          file={pdf}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page renderTextLayer={false} key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </PDFContainer>
    </ResumeContainer>

  );
}

const ResumeContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 60%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
const PDFContainer = styled.div`
  object-fit: contain;
  margin: auto;
  canvas{
    width: 100% !important;
    height: auto !important;
  }
`
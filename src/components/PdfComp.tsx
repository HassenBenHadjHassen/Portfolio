import { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

interface PdfCompProps {
  pdfFile: string;
  isMobile: boolean;
}

function PdfComp({ pdfFile, isMobile }: PdfCompProps) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-file">
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        <Page
          pageNumber={pageNumber}
          scale={isMobile ? 0.6 : 1}
          className="pdf-page"
        />
      </Document>
      <p className="page-indicator">
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default PdfComp;

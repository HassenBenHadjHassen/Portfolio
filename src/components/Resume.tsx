import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "./Particle";
import PdfComp from "./PdfComp";
import { useEffect, useState } from "react";


import pdf from "../assets/Resume.pdf"


const workerUrl = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`

function Resume() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="resume-page">
      <Container fluid className="resume-section">
        <Particle />
        <Row className="download-button-row">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="download-cv-btn"
          >
            <AiOutlineDownload />
            <span className="ms-2">Download CV</span>
          </Button>
        </Row>

        <Row style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{ width: '100%', maxWidth: '1000px' }}>
            <PdfComp pdfFile={pdf} isMobile={isMobile} workerUrl={workerUrl}/>
          </div>
        </Row>

        <Row className="download-button-row mt-4">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="download-cv-btn"
          >
            <AiOutlineDownload />
            <span className="ms-2">Download CV</span>
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;

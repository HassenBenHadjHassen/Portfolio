import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "./Particle";
import { pdfjs } from "react-pdf";
import PdfComp from "./PdfComp";
import { useEffect, useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "/pdf.worker.min.mjs",
  import.meta.url
).toString();

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

        <Row className="pdf-viewer-row">
          <div className="pdf-container">
            <PdfComp pdfFile={pdf} isMobile={isMobile} />
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

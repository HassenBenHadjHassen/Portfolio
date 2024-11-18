import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "./Particle";
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

function Resume() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <div className="d-flex justify-content-center">
            <EmbedPDF
              mode="inline"
              style={{ width: 900, height: 800 }}
              documentURL={
                "https://drive.google.com/uc?export=download&id=1YOkdHAPR3PAPf9KRcvYfcicN9xLJkkPe"
              }
            />
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;

import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Particle from "./Particle";
import PdfComp from "./PdfComp";
import { useEffect, useState } from "react";
import SEO from "./SEO/SEO";

import pdf from "../assets/Hassen_Ben_Hadj_Hassen_Resume.pdf";

const workerUrl = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

function Resume() {
	const { t } = useTranslation();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const resumeStructuredData = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "Hassen Ben Hadj Hassen - Resume & CV",
		description:
			"Download the resume and CV of Hassen Ben Hadj Hassen, Full Stack Developer specializing in React, Node.js, TypeScript, and modern web development technologies.",
		url: "https://hassenbenhadjhassen.com/resume",
		mainEntity: {
			"@type": "Person",
			name: "Hassen Ben Hadj Hassen",
			jobTitle: "Full Stack Developer",
			description:
				"Experienced Full Stack Developer with expertise in React.js, Node.js, TypeScript, and modern web development technologies.",
		},
	};

	return (
		<div className="resume-page">
			<SEO
				title="Resume & CV - Hassen Ben Hadj Hassen | Full Stack Developer"
				description="Download the resume and CV of Hassen Ben Hadj Hassen, Full Stack Developer specializing in React, Node.js, TypeScript, and modern web development technologies. View my professional experience and skills."
				keywords="hassen ben hadj hassen resume, full stack developer cv, react developer resume, node.js developer cv, web developer resume, software engineer cv, typescript developer resume, javascript developer cv"
				canonical="https://hassenbenhadjhassen.com/resume"
				structuredData={resumeStructuredData}
			/>
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
						<span className="ms-2">{t("resume.download")}</span>
					</Button>
				</Row>

				<Row
					style={{ display: "flex", justifyContent: "center", width: "100%" }}
				>
					<div style={{ width: "100%", maxWidth: "1000px" }}>
						<PdfComp pdfFile={pdf} isMobile={isMobile} workerUrl={workerUrl} />
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
						<span className="ms-2">{t("resume.download")}</span>
					</Button>
				</Row>
			</Container>
		</div>
	);
}

export default Resume;

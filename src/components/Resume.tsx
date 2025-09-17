import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
	AiOutlineDownload,
	AiOutlineCode,
	AiOutlineProject,
	AiOutlineTrophy,
} from "react-icons/ai";
import { FaReact, FaNodeJs, FaJs, FaDatabase } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Particle from "./Particle";
import PdfComp from "./PdfComp";
import { useEffect, useState } from "react";
import SEO from "./SEO/SEO";

import pdf from "../assets/Hassen_Ben_Hadj_Hassen_Resume.pdf";

const workerUrl = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

function Resume() {
	const { t } = useTranslation();
	const navigate = useNavigate();
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

	const navigateToContact = () => {
		navigate("/");
		// Wait for navigation to complete, then scroll
		setTimeout(() => {
			const contactSection = document.getElementById("contact");
			if (contactSection) {
				contactSection.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			} else {
				// Fallback: try again after a longer delay
				setTimeout(() => {
					const contactSection = document.getElementById("contact");
					if (contactSection) {
						contactSection.scrollIntoView({
							behavior: "smooth",
							block: "start",
						});
					}
				}, 500);
			}
		}, 200);
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

				{/* Resume Header Section */}
				<motion.div
					className="resume-header-section"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.1 }}
				>
					<Container>
						<Row className="justify-content-center text-center mb-5">
							<Col md={8}>
								<motion.h1
									className="resume-main-title"
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.3 }}
								>
									{t("resume.title")}
								</motion.h1>
								<motion.p
									className="resume-subtitle"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.5 }}
								>
									{t("resume.subtitle")}
								</motion.p>
							</Col>
						</Row>

						{/* Key Stats Row */}
						<Row className="justify-content-center mb-5">
							<Col md={10}>
								<Row className="g-4">
									<Col md={3} sm={6}>
										<motion.div
											className="resume-stat-card"
											initial={{ opacity: 0, y: 30 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.7 }}
											whileHover={{ scale: 1.05, y: -5 }}
										>
											<AiOutlineCode className="stat-icon" />
											<h3>3+</h3>
											<p>{t("resume.stats.yearsExperience")}</p>
										</motion.div>
									</Col>
									<Col md={3} sm={6}>
										<motion.div
											className="resume-stat-card"
											initial={{ opacity: 0, y: 30 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.8 }}
											whileHover={{ scale: 1.05, y: -5 }}
										>
											<AiOutlineProject className="stat-icon" />
											<h3>20+</h3>
											<p>{t("resume.stats.projectsCompleted")}</p>
										</motion.div>
									</Col>
									<Col md={3} sm={6}>
										<motion.div
											className="resume-stat-card"
											initial={{ opacity: 0, y: 30 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.9 }}
											whileHover={{ scale: 1.05, y: -5 }}
										>
											<AiOutlineTrophy className="stat-icon" />
											<h3>10+</h3>
											<p>{t("resume.stats.clientWebsites")}</p>
										</motion.div>
									</Col>
									<Col md={3} sm={6}>
										<motion.div
											className="resume-stat-card"
											initial={{ opacity: 0, y: 30 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 1.0 }}
											whileHover={{ scale: 1.05, y: -5 }}
										>
											<FaReact className="stat-icon" />
											<h3>100%</h3>
											<p>{t("resume.stats.modernStack")}</p>
										</motion.div>
									</Col>
								</Row>
							</Col>
						</Row>

						{/* Tech Stack Highlights */}
						<Row className="justify-content-center mb-5">
							<Col md={10}>
								<motion.div
									className="tech-highlights"
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 1.1 }}
								>
									<h3 className="tech-highlights-title">
										{t("resume.techStack.title")}
									</h3>
									<div className="tech-stack-grid">
										<motion.div
											className="tech-item"
											whileHover={{ scale: 1.1, rotate: 5 }}
											transition={{ duration: 0.2 }}
										>
											<FaReact className="tech-icon" />
											<span>{t("resume.techStack.react")}</span>
										</motion.div>
										<motion.div
											className="tech-item"
											whileHover={{ scale: 1.1, rotate: -5 }}
											transition={{ duration: 0.2 }}
										>
											<FaNodeJs className="tech-icon" />
											<span>{t("resume.techStack.nodejs")}</span>
										</motion.div>
										<motion.div
											className="tech-item"
											whileHover={{ scale: 1.1, rotate: 5 }}
											transition={{ duration: 0.2 }}
										>
											<FaJs className="tech-icon" />
											<span>{t("resume.techStack.typescript")}</span>
										</motion.div>
										<motion.div
											className="tech-item"
											whileHover={{ scale: 1.1, rotate: -5 }}
											transition={{ duration: 0.2 }}
										>
											<FaDatabase className="tech-icon" />
											<span>{t("resume.techStack.mongodb")}</span>
										</motion.div>
									</div>
								</motion.div>
							</Col>
						</Row>
					</Container>
				</motion.div>

				{/* PDF Viewer Section */}
				<Row className="justify-content-center">
					<motion.div
						className="pdf-container"
						initial={{ opacity: 0, y: 50, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{ duration: 0.8, delay: 1.2 }}
						whileHover={{
							scale: 1.02,
							transition: { duration: 0.3 },
						}}
					>
						<PdfComp pdfFile={pdf} isMobile={isMobile} workerUrl={workerUrl} />
					</motion.div>
				</Row>

				{/* Enhanced Download Section */}
				<Row className="download-section mt-5">
					<Col md={12} className="text-center">
						<motion.div
							className="download-container"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 1.4 }}
						>
							<h3 className="download-title">
								{t("resume.downloadSection.title")}
							</h3>
							<p className="download-subtitle">
								{t("resume.downloadSection.subtitle")}
							</p>
							<motion.div
								className="download-buttons"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									variant="primary"
									href={pdf}
									target="_blank"
									className="download-cv-btn primary"
								>
									<AiOutlineDownload />
									<span className="ms-2">{t("resume.download")}</span>
								</Button>
								<Button
									variant="outline-light"
									onClick={navigateToContact}
									className="download-cv-btn secondary ms-3"
								>
									{t("resume.downloadSection.getInTouch")}
								</Button>
							</motion.div>
						</motion.div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Resume;

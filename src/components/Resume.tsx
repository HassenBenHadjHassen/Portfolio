import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
	AiOutlineDownload,
	AiOutlineCode,
	AiOutlineProject,
	AiOutlineTrophy,
} from "react-icons/ai";
import { FaReact, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Particle from "./Particle";
import { useState, useEffect } from "react";
import SEO from "./SEO/SEO";
import ExperienceTimeline from "./Resume/ExperienceTimeline";

import pdfEn from "../assets/Hassen_Ben_Hadj_Hassen_Resume.pdf";
import pdfFr from "../assets/Hassen_Ben_Hadj_Hassen_Resume_FR.pdf";

function Resume() {
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();
	const [selectedLang, setSelectedLang] = useState(
		i18n.language && i18n.language.startsWith("fr") ? "fr" : "en"
	);

	useEffect(() => {
		if (i18n.language) {
			setSelectedLang(i18n.language.startsWith("fr") ? "fr" : "en");
		}
	}, [i18n.language]);

	const resumeStructuredData = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "Hassen Ben Hadj Hassen - Resume & CV",
		description:
			"Download and view the resume of Hassen Ben Hadj Hassen, Full Stack Developer specializing in React, Node.js, TypeScript, and modern web development technologies.",
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
		navigate("/#contact");
	};

	return (
		<div className="resume-page">
			<SEO
				title="Resume & CV - Hassen Ben Hadj Hassen | Full Stack Developer"
				description="View and download the resume of Hassen Ben Hadj Hassen, Full Stack Developer specializing in React, Node.js, TypeScript, and modern web development technologies. View my professional experience and skills."
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
											transition={{ duration: 0.6, delay: 1 }}
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
					</Container>
				</motion.div>

				{/* Tab Selection for CV Language */}
				<Row className="justify-content-center mb-4">
					<Col md={12} className="text-center">
						<Tabs
							id="resume-tabs"
							activeKey={selectedLang}
							onSelect={(k) => setSelectedLang(k || "en")}
							className="justify-content-center resume-tabs mb-4"
							style={{ borderBottom: "none" }}
						>
							<Tab eventKey="en" title="English Resume" />
							<Tab eventKey="fr" title="CV en Français" />
						</Tabs>
					</Col>
				</Row>

				{/* Experience & Education Timeline */}
				<motion.div
					key={`timeline-${selectedLang}`}
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					style={{ marginBottom: "50px" }}
				>
					<ExperienceTimeline selectedLang={selectedLang} />
				</motion.div>

				{/* Supplementary CV Details */}
				<Row className="justify-content-center mt-5">
					<Col md={10}>
						<Row className="g-4">
							{/* Profile / Summary Card */}
							<Col md={6}>
								<motion.div
									className="pdf-container"
									style={{
										padding: "25px 30px",
										backgroundColor: "rgba(255, 255, 255, 0.03)",
										border: "1px solid rgba(199, 112, 240, 0.15)",
										borderRadius: "12px",
										height: "100%",
										color: "#f3f4f6",
										textAlign: "left"
									}}
									whileHover={{ y: -5, transition: { duration: 0.2 } }}
								>
									<h3 className="purple" style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "15px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "5px" }}>
										{selectedLang === "en" ? "PROFESSIONAL SUMMARY" : "PROFIL"}
									</h3>
									<p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "rgba(255,255,255,0.8)" }}>
										{selectedLang === "en" ? 
											"Full-Stack Software Engineer with 3+ years of experience building and scaling production SaaS platforms serving 500+ daily active users. Specialized in React/Node.js ecosystems with proven cost optimization (€180+/user) and reliability improvements (90% → 99% uptime). Based in Saint-Étienne with expertise in modern DevOps practices and self-hosted solutions." :
											"Développeur Full-Stack avec 3+ ans d’expérience dans la conception, le développement et la mise en production d’applications SaaS, e-commerce et santé. Spécialisé en React, Node.js, TypeScript et DevOps, avec un fort focus sur la performance, l’automatisation et la réduction des coûts."
										}
									</p>

									<h3 className="purple" style={{ fontSize: "1.2rem", fontWeight: "600", marginTop: "25px", marginBottom: "15px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "5px" }}>
										{selectedLang === "en" ? "KEY ACHIEVEMENTS" : "RÉALISATIONS CLÉS"}
									</h3>
									<ul style={{ fontSize: "0.9rem", paddingLeft: "20px", color: "rgba(255,255,255,0.8)", lineHeight: "1.6" }}>
										<li className="mb-2">{selectedLang === "en" ? "Reduced infrastructure costs by €180+ per user per year by migrating enterprise email systems to a self-hosted iRedMail solution." : "Mis en place une solution mail iRedMail auto-hébergée, générant 180 $ d’économies / utilisateur / an."}</li>
										<li className="mb-2">{selectedLang === "en" ? "Improved platform reliability from ~90% to 99% uptime, preventing revenue loss during peak traffic." : "Stabilisé l’hébergement et le DNS, atteignant 99 % de disponibilité (vs ~90 %)."}</li>
										<li className="mb-2">{selectedLang === "en" ? "Published an open-source library 'smooth-scroll-react' (1,500+ weekly downloads)." : "Publié la librairie open-source React Smooth Scroll (1 500+ téléchargements hebdomadaires)."}</li>
									</ul>
								</motion.div>
							</Col>

							{/* Languages & Open Source Card */}
							<Col md={6}>
								<motion.div
									className="pdf-container"
									style={{
										padding: "25px 30px",
										backgroundColor: "rgba(255, 255, 255, 0.03)",
										border: "1px solid rgba(199, 112, 240, 0.15)",
										borderRadius: "12px",
										height: "100%",
										color: "#f3f4f6",
										textAlign: "left"
									}}
									whileHover={{ y: -5, transition: { duration: 0.2 } }}
								>
									<h3 className="purple" style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "15px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "5px" }}>
										{selectedLang === "en" ? "LANGUAGES" : "LANGUES"}
									</h3>
									<ul style={{ listStyle: "none", padding: 0, fontSize: "0.95rem", color: "rgba(255,255,255,0.8)" }}>
										<li className="mb-2">
											<strong>{selectedLang === "en" ? "Arabic:" : "Arabe :"}</strong> {selectedLang === "en" ? "Native" : "Langue maternelle"}
										</li>
										<li className="mb-2">
											<strong>{selectedLang === "en" ? "English:" : "Anglais :"}</strong> {selectedLang === "en" ? "Advanced / Professional" : "Courant / Avancé"}
										</li>
										<li className="mb-2">
											<strong>{selectedLang === "en" ? "French:" : "Français :"}</strong> {selectedLang === "en" ? "Intermediate / Conversational" : "Intermédiaire"}
										</li>
									</ul>

									<h3 className="purple" style={{ fontSize: "1.2rem", fontWeight: "600", marginTop: "25px", marginBottom: "15px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "5px" }}>
										{selectedLang === "en" ? "OPEN SOURCE CONTRIBUTIONS" : "PROJETS OPEN SOURCE"}
									</h3>
									<p style={{ fontSize: "0.95rem", margin: 0, color: "rgba(255,255,255,0.8)" }}>
										<strong>React Smooth Scroll</strong> &ndash; {selectedLang === "en" ? "NPM Package" : "Librairie React"}
									</p>
									<p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", margin: "4px 0 10px" }}>
										{selectedLang === "en" ? "A lightweight utility to implement smooth section scrolling in React." : "Utilitaire léger pour implémenter des animations de défilement fluide."}
									</p>
									<a href="https://www.npmjs.com/package/smooth-scroll-react" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-accent)", textDecoration: "none", fontSize: "0.9rem" }}>
										NPM Link <FaExternalLinkAlt size={12} />
									</a>
								</motion.div>
							</Col>
						</Row>
					</Col>
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
									href={selectedLang === "en" ? pdfEn : pdfFr}
									target="_blank"
									className="download-cv-btn primary"
								>
									<AiOutlineDownload />
									<span className="ms-2">
										{t("resume.download")} (
										{selectedLang === "en" ? "EN" : "FR"})
									</span>
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

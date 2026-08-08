import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import Type from "./Type";
import Particle from "../Particle";
import HomeImage from "../../assets/home-main.svg";
import FallBack from "../FallBack";
import SEO from "../SEO/SEO";

const Home2 = React.lazy(() => import("./Home2"));

function Home() {
	const { t } = useTranslation();
	const homeStructuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "ProfilePage",
				"@id": "https://hassenbenhadjhassen.com/#profilepage",
				"url": "https://hassenbenhadjhassen.com",
				"name": "Hassen Ben Hadj Hassen - Portfolio",
				"description": "Professional portfolio of Hassen Ben Hadj Hassen, Full Stack Web Developer specializing in React, TypeScript, and Node.js.",
				"mainEntity": {
					"@id": "https://hassenbenhadjhassen.com/#person"
				}
			},
			{
				"@type": "Person",
				"@id": "https://hassenbenhadjhassen.com/#person",
				"name": "Hassen Ben Hadj Hassen",
				"jobTitle": "Full Stack Web Developer",
				"url": "https://hassenbenhadjhassen.com",
				"image": "https://hassenbenhadjhassen.com/portfolio.png",
				"sameAs": [
					"https://github.com/HassenBenHadjHassen",
					"https://www.linkedin.com/in/hassenbenhadjhassen/",
					"https://www.npmjs.com/package/smooth-scroll-react"
				],
				"knowsAbout": [
					"React",
					"Node.js",
					"TypeScript",
					"MongoDB",
					"Express.js",
					"Web Development",
					"SEO",
					"Tailwind CSS",
					"JavaScript"
				],
				"worksFor": {
					"@type": "Organization",
					"name": "Freelance"
				}
			}
		]
	};

	const scrollToContact = (e: React.MouseEvent) => {
		e.preventDefault();
		const el = document.getElementById("contact");
		if (el) {
			const yOffset = -80; // Fixed navbar height offset
			const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
		window.history.pushState(null, "", "/#contact");
	};

	return (
		<section aria-label="Home page introduction">
			<SEO
				title="Full Stack Developer | React & Node.js Expert – Hassen Ben Hadj Hassen"
				description="Full Stack Developer specializing in React and Node.js. View real-world projects, skills, and experience by Hassen Ben Hadj Hassen."
				canonical="https://hassenbenhadjhassen.com"
				structuredData={homeStructuredData}
			/>
			<Container fluid className="home-section" id="home">
				<Particle />
				<Container className="home-content">
					<Row>
						<Col md={7} className="home-header">
							{/* Live Status Indicator */}
							<motion.div
								className="status-line-container"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 }}
							>
								<div className="status-line">
									<span className="status-dot-pulse" aria-hidden="true" />
									<span className="status-text">{t("home.status")}</span>
								</div>
							</motion.div>

							<motion.h1
								style={{ paddingBottom: 15 }}
								className="heading"
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
							>
								{t("home.greeting")}{" "}
								<span
									className="wave"
									role="img"
									aria-label="Waving hand"
								>
									👋🏻
								</span>
							</motion.h1>

							<motion.h2
								className="heading-name"
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.4 }}
							>
								{t("home.name")}
								<strong className="main-name"> {t("home.fullName")}</strong>
							</motion.h2>

							<motion.div
								className="typewriter-container"
								style={{ textAlign: "left" }}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.6 }}
							>
								<Type />
							</motion.div>

							{/* Above-the-fold CTAs */}
							<motion.div
								style={{ paddingLeft: "45px", display: "flex", flexWrap: "wrap" }}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.8 }}
							>
								<Link to="/projects" className="hero-cta-btn" aria-label={t("home.cta.viewWork")}>
									<AiOutlineFundProjectionScreen aria-hidden="true" />
									{t("home.cta.viewWork")}
								</Link>
								<a href="#contact" onClick={scrollToContact} className="hero-cta-secondary" aria-label={t("home.cta.getInTouch")}>
									<CiMail aria-hidden="true" />
									{t("home.cta.getInTouch")}
								</a>
							</motion.div>
						</Col>

						<Col md={5} style={{ paddingBottom: 20 }}>
							<motion.img
								src={HomeImage}
								alt="Hassen Ben Hadj Hassen – Full Stack Developer illustration"
								className="img-fluid"
								style={{ maxHeight: "450px" }}
								initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
								animate={{ opacity: 1, scale: 1, rotate: 0 }}
								transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
								whileHover={{
									scale: 1.05,
									rotate: 2,
									transition: { duration: 0.3 },
								}}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
			<Suspense fallback={<FallBack />}>
				<Home2 />
			</Suspense>
		</section>
	);
}

export default Home;

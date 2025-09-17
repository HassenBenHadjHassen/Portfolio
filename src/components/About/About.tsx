import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Particle from "../Particle";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import AboutImage from "../../assets/about.png";
import FallBack from "../FallBack";
import SEO from "../SEO/SEO";

const GitHub = React.lazy(() => import("./Github"));

function About() {
	const { t } = useTranslation();
	const aboutStructuredData = {
		"@context": "https://schema.org",
		"@type": "AboutPage",
		name: "About Hassen Ben Hadj Hassen - Full Stack Developer",
		description:
			"Learn about Hassen Ben Hadj Hassen, a Full Stack Developer specializing in React, Node.js, TypeScript, and modern web development technologies.",
		url: "https://hassenbenhadjhassen.com/about",
		mainEntity: {
			"@type": "Person",
			name: "Hassen Ben Hadj Hassen",
			jobTitle: "Full Stack Developer",
			description:
				"Experienced Full Stack Developer with expertise in React.js, Node.js, TypeScript, and modern web development technologies.",
			knowsAbout: [
				"React.js",
				"Node.js",
				"JavaScript",
				"TypeScript",
				"Web Development",
				"Frontend Development",
				"Backend Development",
				"Full Stack Development",
			],
		},
	};

	return (
		<Container fluid className="about-section">
			<SEO
				title="About Hassen Ben Hadj Hassen - Full Stack Developer | Skills & Experience"
				description="Learn about Hassen Ben Hadj Hassen, a Full Stack Developer specializing in React, Node.js, TypeScript, and modern web development technologies. View my skills, experience, and professional background."
				keywords="about hassen ben hadj hassen, full stack developer about, react developer skills, node.js developer experience, web developer background, software engineer profile, typescript developer, javascript expert"
				canonical="https://hassenbenhadjhassen.com/about"
				structuredData={aboutStructuredData}
			/>
			<Particle />
			<Container>
				<Row className="justify-content-center mb-5">
					<Col
						xs={12}
						md={7}
						className="d-flex flex-column justify-content-center order-2 order-md-1"
						style={{
							paddingTop: "30px",
							paddingBottom: "30px",
						}}
					>
						<motion.h1
							style={{
								fontSize: "2.2em",
								paddingBottom: "20px",
								textAlign: "center",
								marginBottom: "30px",
							}}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							{t("about.title")
								.split(" ")
								.map((word, index) =>
									word === "About" || word === "À" ? (
										<span key={`title-${word}-${index}`} className="purple">
											{" "}
											{word}{" "}
										</span>
									) : (
										`${word} `
									)
								)}
						</motion.h1>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							<AboutCard />
						</motion.div>
					</Col>
					<Col
						xs={12}
						md={5}
						className="d-flex justify-content-center align-items-center order-1 order-md-2"
						style={{
							paddingTop: "20px",
							paddingBottom: "20px",
						}}
					>
						<motion.img
							src={AboutImage}
							alt="about"
							className="img-fluid"
							style={{
								maxWidth: "300px",
								height: "auto",
								width: "100%",
							}}
							initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
							animate={{ opacity: 1, scale: 1, rotate: 0 }}
							transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
							whileHover={{
								scale: 1.05,
								rotate: -2,
								transition: { duration: 0.3 },
							}}
						/>
					</Col>
				</Row>
				<motion.div
					className="text-center mb-4"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					<h1
						className="project-heading"
						style={{
							fontSize: "1.8em",
							marginBottom: "30px",
							paddingTop: "20px",
						}}
					>
						{t("about.skillset")
							.split(" ")
							.map((word, index) => {
								const keyWords = [
									"Professional",
									"Skillset",
									"Compétences",
									"Professionnelles",
								];
								const isKeyWord = keyWords.some((key) => word.includes(key));
								return isKeyWord ? (
									<span key={`skillset-${word}-${index}`} className="purple">
										{" "}
										{word}{" "}
									</span>
								) : (
									`${word} `
								);
							})}
					</h1>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					<Techstack />
				</motion.div>

				<motion.div
					className="mt-5 pt-4"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.0 }}
				>
					<Suspense fallback={<FallBack />}>
						<GitHub />
					</Suspense>
				</motion.div>
			</Container>
		</Container>
	);
}

export default About;

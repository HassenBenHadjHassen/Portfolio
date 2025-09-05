import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
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
				<Row style={{ justifyContent: "center", padding: "10px" }}>
					<Col
						md={7}
						style={{
							justifyContent: "center",
							paddingTop: "30px",
							paddingBottom: "50px",
						}}
					>
						<h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
							{t("about.title")
								.split(" ")
								.map((word, index) =>
									word === "About" || word === "À" ? (
										<span key={`title-${index}`} className="purple">
											{" "}
											{word}{" "}
										</span>
									) : (
										`${word} `
									)
								)}
						</h1>
						<AboutCard />
					</Col>
					<Col
						md={5}
						style={{ paddingTop: "120px", paddingBottom: "50px" }}
						className="about-img"
					>
						<img src={AboutImage} alt="about" className="img-fluid" />
					</Col>
				</Row>
				<h1 className="project-heading">
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

				<Techstack />

				<Suspense fallback={<FallBack />}>
					<GitHub />
				</Suspense>
			</Container>
		</Container>
	);
}

export default About;

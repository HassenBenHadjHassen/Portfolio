import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
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
		"@type": "WebPage",
		name: "Hassen Ben Hadj Hassen - Full Stack Developer",
		description:
			"Full Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio of client projects and personal applications.",
		url: "https://hassenbenhadjhassen.com",
		mainEntity: {
			"@type": "Person",
			name: "Hassen Ben Hadj Hassen",
			jobTitle: "Full Stack Developer",
			description:
				"Experienced Full Stack Developer with expertise in React.js, Node.js, TypeScript, and modern web development technologies.",
		},
	};

	return (
		<section>
			<SEO
				title="Hassen Ben Hadj Hassen - Full Stack Developer | React & Node.js Specialist"
				description="Full Stack Developer specializing in React, Node.js, and modern web technologies. View my portfolio of client projects and personal applications. Expert in JavaScript, TypeScript, and scalable web development."
				keywords="full stack developer, react developer, node.js developer, web developer, portfolio, javascript, typescript, frontend developer, backend developer, software engineer, hassen ben hadj hassen, react specialist, node.js expert"
				canonical="https://hassenbenhadjhassen.com"
				structuredData={homeStructuredData}
			/>
			<Container fluid className="home-section" id="home">
				<Particle />
				<Container className="home-content">
					<Row>
						<Col md={7} className="home-header">
							<h1 style={{ paddingBottom: 15 }} className="heading">
								{t("home.greeting")}{" "}
								<span className="wave" aria-labelledby="wave">
									👋🏻
								</span>
							</h1>

							<h1 className="heading-name">
								{t("home.name")}
								<strong className="main-name"> {t("home.fullName")}</strong>
							</h1>

							<div style={{ textAlign: "left" }}>
								<Type />
							</div>
						</Col>

						<Col md={5} style={{ paddingBottom: 20 }}>
							<img
								src={HomeImage}
								alt="home pic"
								className="img-fluid"
								style={{ maxHeight: "450px" }}
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

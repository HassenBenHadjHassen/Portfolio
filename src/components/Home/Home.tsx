import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
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
							<motion.h1
								style={{ paddingBottom: 15 }}
								className="heading"
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
							>
								{t("home.greeting")}{" "}
								<span className="wave" aria-labelledby="wave">
									👋🏻
								</span>
							</motion.h1>

							<motion.h1
								className="heading-name"
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.4 }}
							>
								{t("home.name")}
								<strong className="main-name"> {t("home.fullName")}</strong>
							</motion.h1>

							<motion.div
								style={{ textAlign: "left" }}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.6 }}
							>
								<Type />
							</motion.div>
						</Col>

						<Col md={5} style={{ paddingBottom: 20 }}>
							<motion.img
								src={HomeImage}
								alt="home pic"
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

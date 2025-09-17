import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Particle from "../Particle";
import SEO from "../SEO/SEO";

import GPI from "../../assets/Projects/gpi.png";
import DoctorWho2048 from "../../assets/Projects/doctor-who-2048.png";
import Packease from "../../assets/Projects/packease.png";
import SecureChatApp from "../../assets/Projects/secure-chat-app.png";
import SmothScrollReact from "../../assets/Projects/smooth-scroll-react.png";

import CardioPro from "../../assets/Projects/cardiopro.png";
import PinheiroBat from "../../assets/Projects/pinheiro.png";
import OummyDiag from "../../assets/Projects/oummy.png";
import MLA from "../../assets/Projects/mla.png";
import Net23 from "../../assets/Projects/net23.png";
import MartinPaysage from "../../assets/Projects/martin.png";
import LoudiaPropreté from "../../assets/Projects/loudia.png";

import { v4 as uuidv4 } from "uuid";
import FallBack from "../FallBack";

const ProjectCard = React.lazy(() => import("./ProjectCard"));

interface ProjectType {
	title: string;
	description: string;
	link: string;
	githubLink?: string;
	image: string;
	hash: string;
}

// Client Sites (no GitHub links)
const clientSites: ProjectType[] = [
	{
		title: "GPI (Police Global Indicators)",
		description:
			"A sophisticated data visualization website built for the 2024 Police World Summit in Dubai. Contracted by the Dubai Police to showcase global indicators using advanced geospatial mapping. Developed with ReactJS, Leaflet, TypeScript, and styled using Styled Components.",
		link: "https://gpsi.hassenbenhadjhassen.com/",
		image: GPI,
		hash: "L77-TINM0U~9-y9u9I=@bwf+%0$j",
	},
	{
		title: "CardioPro",
		description:
			"CardioPro is a leading French provider of automated external defibrillators (DAE), offering sales, rentals, technical support, and educational resources on cardiac health and CPR. Known for excellence, the website ranks among the top 5 on Google in its field.",
		link: "https://cardiopro.fr/",
		image: CardioPro,
		hash: "LiO3^Uxu?b9F~Toft7oI9IRjIUt8",
	},
	{
		title: "Pinheiro Bat - Plombier Sartrouville",
		description:
			"Pinheiro Bat delivers expert plumbing and heating services in the Sartrouville area. The website features responsive design, clear service listings, and easy-to-access contact information for all local plumbing needs.",
		link: "http://pinheiro-bat-plombier-sartrouville.com/",
		image: PinheiroBat,
		hash: "LFP7b1^%={o}?GsnV[M|~URjozRk",
	},
	{
		title: "Oummy Diag",
		description:
			"Oummy Diag provides professional real estate diagnostic services with a clean, user-friendly website. Visitors can easily access detailed information on all available diagnostics and related procedures.",
		link: "https://oummy-diag.fr/",
		image: OummyDiag,
		hash: "LeKLK@4n-pIUNHWBWBfk~p%LWBoz",
	},
	{
		title: "MLA Nettoyage",
		description:
			"MLA Nettoyage offers professional cleaning services for residential and commercial properties. The modern website presents detailed service information and highlights the company's commitment to quality and reliability.",
		link: "https://mla-nettoyage.fr/",
		image: MLA,
		hash: "LEIPFnD$?b9Y=~j]kBj[~XofayoL",
	},
	{
		title: "Net23",
		description:
			"Net23 specializes in technology and networking solutions, providing IT support and comprehensive network services. The website features a professional layout and thorough information on all services offered.",
		link: "https://net23.fr/",
		image: Net23,
		hash: "LHCICG9b?G9c}$j[bIsl~UbcjYs+",
	},
	{
		title: "Martin Paysage",
		description:
			"Martin Paysage delivers expert landscaping and garden design services. The website showcases stunning imagery and detailed descriptions, highlighting the company’s creative approach to outdoor spaces.",
		link: "https://martin-paysage.fr/",
		image: MartinPaysage,
		hash: "LYCG#%buWBj[_NayWBj[_3azt7j[",
	},
	{
		title: "Loudia Propreté",
		description:
			"Loudia Propreté provides professional cleaning and hygiene services across multiple industries. The website combines modern design with clear, comprehensive information about all cleaning solutions offered.",
		link: "https://loudia-proprete.fr/",
		image: LoudiaPropreté,
		hash: "LHC8qo9c?G9c}$j?flsl~Ufln}s+",
	},
	{
		title: "Packease.shop",
		description:
			"An E-commerce website dedicated to selling travel bags, featuring a user-friendly interface and robust payment solutions. Built with ReactJS, Node.js, Stripe, and MongoDB and TypeScript. Attracted over 2000 unique visitors.",
		link: "http://packease.hassenbenhadjhassen.com/",
		image: Packease,
		hash: "LMOw,5uNayd=xwRPWBoy.TiwWVb^",
	},
];

// My Sites (with GitHub links)
const mySites: ProjectType[] = [
	{
		title: "React Smooth Scroll NPM Package",
		description:
			"An open-source NPM package that adds smooth scrolling to React projects, enabling developers to create intuitive interfaces. Implemented with ReactJS and Typescript, with over 600 downloads on NPM.",
		link: "https://www.npmjs.com/package/smooth-scroll-react",
		githubLink: "https://github.com/HassenBenHadjHassen/smooth-scroll-react",
		image: SmothScrollReact,
		hash: "L3S?ANRN_N?cm,s+ayNGrXt7IUM_",
	},
	{
		title: "Secure Chat App",
		description:
			"A privacy-focused messaging platform, inspired by Messenger, ensuring secure communication with end-to-end encryption. Built using ReactJS, NodeJS, Socket.IO.",
		link: "https://chat.hassenbenhadjhassen.com/",
		githubLink: "https://github.com/HassenBenHadjHassen/secure-chat-app",
		image: SecureChatApp,
		hash: "L4RMJ7nVpA-ED~$+OTsE.Tt8aws;",
	},
	{
		title: "Doctor Who 2048",
		description:
			"A creative spin on the classic 2048 game for Doctor Who fans, replacing numbers with the Doctor's incarnations. Built using ReactJS and TypeScript.",
		link: "https://doctor-who-2048.hassenbenhadjhassen.com/",
		githubLink: "https://github.com/HassenBenHadjHassen/doctor-who-2048",
		image: DoctorWho2048,
		hash: "LZRV:_of_NV[xaj[R*aex]ayM{j[",
	},
];

function Projects() {
	const { t } = useTranslation();
	const projectsStructuredData = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Hassen Ben Hadj Hassen - Portfolio Projects",
		description:
			"Full Stack Developer Portfolio showcasing React.js, Node.js, and TypeScript projects including client websites, e-commerce platforms, and innovative web applications.",
		url: "https://hassenbenhadjhassen.com/project",
		mainEntity: {
			"@type": "ItemList",
			name: "Portfolio Projects",
			description:
				"Collection of web development projects by Hassen Ben Hadj Hassen",
			itemListElement: [
				{
					"@type": "CreativeWork",
					name: "GPI (Police Global Indicators)",
					description:
						"A sophisticated data visualization website built for the 2024 Police World Summit in Dubai using ReactJS, Leaflet, TypeScript, and Styled Components.",
				},
				{
					"@type": "CreativeWork",
					name: "CardioPro",
					description:
						"Leading French provider of automated external defibrillators (DAE) website, ranking among top 5 on Google in its field.",
				},
				{
					"@type": "CreativeWork",
					name: "Packease.shop",
					description:
						"E-commerce website for travel bags built with ReactJS, Node.js, Stripe, MongoDB and TypeScript, attracting over 2000 unique visitors.",
				},
			],
		},
	};

	return (
		<Container fluid className="project-section">
			<SEO
				title="Portfolio Projects - Hassen Ben Hadj Hassen | React & Node.js Developer"
				description="View my Full Stack Developer portfolio featuring React.js, Node.js, and TypeScript projects. Client websites, e-commerce platforms, and innovative web applications showcasing my development expertise."
				keywords="portfolio projects, react projects, node.js projects, web development portfolio, full stack developer projects, javascript projects, typescript projects, client websites, e-commerce development, hassen ben hadj hassen portfolio"
				canonical="https://hassenbenhadjhassen.com/project"
				structuredData={projectsStructuredData}
			/>
			<Particle />
			<Container>
				<motion.h1
					className="project-heading"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					{t("projects.title")}
				</motion.h1>
				<motion.p
					style={{ color: "white" }}
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					{t("projects.description")}
				</motion.p>

				{/* Client Sites Section */}
				<motion.h2
					className="project-subheading"
					style={{ color: "white", marginTop: "40px", marginBottom: "20px" }}
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					<strong className="purple">{t("projects.clientProjects")}</strong>
				</motion.h2>
				<Row style={{ justifyContent: "center" }}>
					{clientSites.map((project, index) => (
						<Col key={uuidv4()} md={4} className="project-card">
							<motion.div
								initial={{ opacity: 0, y: 50, scale: 0.9 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								transition={{
									duration: 0.6,
									delay: 0.8 + index * 0.1,
									ease: "easeOut",
								}}
								whileHover={{
									y: -10,
									transition: { duration: 0.3 },
								}}
							>
								<Suspense fallback={<FallBack />}>
									<ProjectCard
										imgPath={project.image}
										title={project.title}
										description={project.description}
										ghLink={project.githubLink}
										demoLink={project.link}
										hash={project.hash}
									/>
								</Suspense>
							</motion.div>
						</Col>
					))}
				</Row>

				{/* Separator */}
				<motion.hr
					style={{
						borderColor: "#6c63ff",
						borderWidth: "2px",
						margin: "40px 0",
					}}
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1, delay: 1.5 }}
				/>

				{/* My Sites Section */}
				<motion.h2
					className="project-subheading"
					style={{ color: "white", marginTop: "40px" }}
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.7 }}
				>
					<strong className="purple">{t("projects.personalProjects")}</strong>
				</motion.h2>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					{mySites.map((project, index) => (
						<Col key={uuidv4()} md={4} className="project-card">
							<motion.div
								initial={{ opacity: 0, y: 50, scale: 0.9 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								transition={{
									duration: 0.6,
									delay: 1.9 + index * 0.1,
									ease: "easeOut",
								}}
								whileHover={{
									y: -10,
									transition: { duration: 0.3 },
								}}
							>
								<Suspense fallback={<FallBack />}>
									<ProjectCard
										imgPath={project.image}
										title={project.title}
										description={project.description}
										ghLink={project.githubLink}
										demoLink={project.link}
										hash={project.hash}
									/>
								</Suspense>
							</motion.div>
						</Col>
					))}
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;

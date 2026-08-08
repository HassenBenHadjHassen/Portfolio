import React, { useState, Suspense, useMemo } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Particle from "../Particle";
import SEO from "../SEO/SEO";

import GPI from "../../assets/Projects/gpi.webp";
import DoctorWho2048 from "../../assets/Projects/doctor-who-2048.webp";
import Packease from "../../assets/Projects/packease.webp";
import SecureChatApp from "../../assets/Projects/secure-chat-app.webp";
import SmothScrollReact from "../../assets/Projects/smooth-scroll-react.webp";

import CardioPro from "../../assets/Projects/cardiopro.webp";
import DuboisRestauration from "../../assets/Projects/dubois-restauration.webp";
import PinheiroBat from "../../assets/Projects/pinheiro.webp";
import OummyDiag from "../../assets/Projects/oummy.webp";
import ToumisCatering from "../../assets/Projects/toumis.webp";
import Nop from "../../assets/Projects/nop.webp";
import ServicesPlus from "../../assets/Projects/services-plus.webp";

import FallBack from "../FallBack";

const ProjectCard = React.lazy(() => import("./ProjectCard"));

interface ProjectType {
	title: string;
	description: string;
	link: string;
	githubLink?: string;
	image: string;
	hash: string;
	category: "client" | "personal" | "fun";
	tags: string[];
}

function Projects() {
	const { t } = useTranslation();
	const [activeCategory, setActiveCategory] = useState<"all" | "client" | "personal" | "fun">("all");
	const [activeTag, setActiveTag] = useState<string>("all");

	// Unified project catalog combining client, personal, and fun categories
	const projectsList: ProjectType[] = useMemo(() => [
		{
			title: "GPI (Police Global Indicators)",
			description: t("projects.items.gpi.desc"),
			link: "https://gpsi-staging.inrits.tech/",
			image: GPI,
			hash: "L77-TINM0U~9-y9u9I=@bwf+%0$j",
			category: "client",
			tags: ["React", "TypeScript", "GIS / Maps", "Styled Components"],
		},
		{
			title: "Packease.shop",
			description: t("projects.items.packease.desc"),
			link: "http://packease.hassenbenhadjhassen.com/",
			image: Packease,
			hash: "LMOw,5uNayd=xwRPWBoy.TiwWVb^",
			category: "client",
			tags: ["React", "TypeScript", "Node.js", "Stripe", "MongoDB"],
		},
		{
			title: "CardioPro",
			description: t("projects.items.cardiopro.desc"),
			link: "https://cardiopro.fr/",
			image: CardioPro,
			hash: "LiO3^Uxu?b9F~Toft7oI9IRjIUt8",
			category: "client",
			tags: ["PHP", "Laravel", "Symfony", "SEO"],
		},
		{
			title: "RESTAURATEUR EBENISTERIE BRONZES & PENDULE",
			description: t("projects.items.restaurateur.desc"),
			link: "https://restaurateur-ebenisterie-bronze-pendule.fr/",
			image: DuboisRestauration,
			hash: "LNB:phIUo#IU00WBoKay~qj[t6of",
			category: "client",
			tags: ["WordPress", "PHP", "Docker", "MySQL"],
		},
		{
			title: "React Smooth Scroll NPM Package",
			description: t("projects.items.smoothScroll.desc"),
			link: "https://www.npmjs.com/package/smooth-scroll-react",
			githubLink: "https://github.com/HassenBenHadjHassen/smooth-scroll-react",
			image: SmothScrollReact,
			hash: "L3S?ANRN_N?cm,s+ayNGrXt7IUM_",
			category: "personal",
			tags: ["React", "TypeScript", "NPM Package"],
		},
		{
			title: "Secure Chat App",
			description: t("projects.items.secureChat.desc"),
			link: "https://chat.hassenbenhadjhassen.com/",
			githubLink: "https://github.com/HassenBenHadjHassen/secure-chat-app",
			image: SecureChatApp,
			hash: "L4RMJ7nVpA-ED~$+OTsE.Tt8aws;",
			category: "personal",
			tags: ["React", "Node.js", "Socket.IO", "Cryptography"],
		},
		{
			title: "Nop Services",
			description: t("projects.items.nop.desc"),
			link: "www.group-nop-services-nettoyage.fr",
			image: Nop,
			hash: "L6DJL.4T01E200a%kDxr?woK%Nx]",
			category: "client",
			tags: ["SEO", "HTML / CSS"],
		},
		{
			title: "Oummy Diag",
			description: t("projects.items.oummy.desc"),
			link: "https://oummy-diag.fr/",
			image: OummyDiag,
			hash: "LeKLK@4n-pIUNHWBWBfk~p%LWBoz",
			category: "client",
			tags: ["JavaScript", "HTML / CSS"],
		},
		{
			title: "Toumis Catering",
			description: t("projects.items.toumis.desc"),
			link: "https://toumis-catering.vercel.app",
			image: ToumisCatering,
			hash: "L26Hr.-:0201}[NcbDxBIVRjxut7",
			category: "client",
			tags: ["SEO", "HTML / CSS", "TailwindCSS", "Local SEO"],
		},
		{
			title: "Services Plus",
			description: t("projects.items.servicesPlus.desc"),
			link: "https://services-plus.vercel.app/",
			image: ServicesPlus,
			hash: "L57LQS9K4T_3~GIUD%-;9UxtxuMy",
			category: "client",
			tags: ["SEO", "HTML / CSS", "JavaScript", "TailwindCSS"],
		},
		{
			title: "Pinheiro Bat - Plombier Sartrouville",
			description: t("projects.items.pinheiro.desc"),
			link: "http://pinheiro-bat-plombier-sartrouville.com/",
			image: PinheiroBat,
			hash: "LFP7b1^%={o}?GsnV[M|~URjozRk",
			category: "client",
			tags: ["Local SEO", "HTML / CSS"],
		},
		{
			title: "Doctor Who 2048",
			description: t("projects.items.doctorWho2048.desc"),
			link: "https://doctor-who-2048.hassenbenhadjhassen.com/",
			githubLink: "https://github.com/HassenBenHadjHassen/doctor-who-2048",
			image: DoctorWho2048,
			hash: "LZRV:_of_NV[xaj[R*aex]ayM{j[",
			category: "fun",
			tags: ["React", "TypeScript", "Games"],
		},
	], [t]);

	// Extract unique tags from the projects list for filtering options
	const uniqueTags = useMemo(() => {
		const tags = new Set<string>();
		projectsList.forEach((proj) => {
			proj.tags.forEach((tag) => tags.add(tag));
		});
		return ["all", ...Array.from(tags)];
	}, [projectsList]);

	// Filter projects based on active selections
	const filteredProjects = useMemo(() => {
		return projectsList.filter((proj) => {
			const matchesCategory = activeCategory === "all" || proj.category === activeCategory;
			const matchesTag = activeTag === "all" || proj.tags.includes(activeTag);
			return matchesCategory && matchesTag;
		});
	}, [projectsList, activeCategory, activeTag]);

	const projectsStructuredData = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Hassen Ben Hadj Hassen - Portfolio Projects",
		description:
			"Full Stack Developer Portfolio showcasing React.js, Node.js, and TypeScript projects including client websites, e-commerce platforms, and innovative web applications.",
		url: "https://hassenbenhadjhassen.com/projects",
		mainEntity: {
			"@type": "ItemList",
			name: "Portfolio Projects",
			description:
				"Collection of web development projects by Hassen Ben Hadj Hassen",
			itemListElement: projectsList.map((p, idx) => ({
				"@type": "CreativeWork",
				position: idx + 1,
				name: p.title,
				description: p.description.substring(0, 150) + "...",
				url: p.link,
			})),
		},
	};

	return (
		<Container fluid className="project-section">
			<SEO
				title="Portfolio Projects - Hassen Ben Hadj Hassen | React & Node.js Developer"
				description="View my Full Stack Developer portfolio featuring React.js, Node.js, and TypeScript projects. Client websites, e-commerce platforms, and innovative web applications showcasing my development expertise."
				keywords="portfolio projects, react projects, node.js projects, web development portfolio, full stack developer projects, javascript projects, typescript projects, client websites, e-commerce development, hassen ben hadj hassen portfolio"
				canonical="https://hassenbenhadjhassen.com/projects"
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
					style={{ color: "white", marginBottom: "40px" }}
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					{t("projects.description")}
				</motion.p>

				{/* Category & Tag Filter Toolbar */}
				<motion.div
					className="filter-toolbar mb-4 text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					style={{ background: "rgba(255, 255, 255, 0.02)", padding: "15px", borderRadius: "12px", border: "1px solid rgba(199, 112, 240, 0.15)" }}
				>
					<div className="category-filters mb-3">
						<span style={{ color: "#beace0", marginRight: "10px", fontWeight: "600" }}>{t("projects.category")}</span>
						<ButtonGroup className="flex-wrap">
							<Button
								className={`filter-btn ${activeCategory === "all" ? "active" : ""}`}
								onClick={() => { setActiveCategory("all"); setActiveTag("all"); }}
								aria-label="Show all categories"
							>
								{t("projects.all")}
							</Button>
							<Button
								className={`filter-btn ${activeCategory === "client" ? "active" : ""}`}
								onClick={() => { setActiveCategory("client"); setActiveTag("all"); }}
								aria-label="Show client projects"
							>
								{t("projects.client")}
							</Button>
							<Button
								className={`filter-btn ${activeCategory === "personal" ? "active" : ""}`}
								onClick={() => { setActiveCategory("personal"); setActiveTag("all"); }}
								aria-label="Show personal projects"
							>
								{t("projects.personal")}
							</Button>
							<Button
								className={`filter-btn ${activeCategory === "fun" ? "active" : ""}`}
								onClick={() => { setActiveCategory("fun"); setActiveTag("all"); }}
								aria-label="Show fun or game projects"
							>
								{t("projects.fun")}
							</Button>
						</ButtonGroup>
					</div>

					<div className="tag-filters">
						<span style={{ color: "#beace0", marginRight: "10px", fontWeight: "600" }}>{t("projects.techStack")}</span>
						<div className="d-inline-flex flex-wrap justify-content-center">
							{uniqueTags.map((tag) => {
								// Limit tags by category compatibility
								const isAll = tag === "all";
								const tagHasMatch = isAll || projectsList.some(
									(p) => p.tags.includes(tag) && (activeCategory === "all" || p.category === activeCategory)
								);

								if (!tagHasMatch) return null;

								return (
									<Button
										key={tag}
										size="sm"
										className={`filter-btn ${activeTag === tag ? "active" : ""}`}
										style={{ padding: "4px 12px", fontSize: "0.85rem" }}
										onClick={() => setActiveTag(tag)}
										aria-label={`Filter by ${tag}`}
									>
										{isAll ? t("projects.allTech") : tag}
									</Button>
								);
							})}
						</div>
					</div>
				</motion.div>

				{/* Filtered Projects Grid */}
				<Row style={{ justifyContent: "center", minHeight: "350px" }}>
					<AnimatePresence mode="popLayout">
						{filteredProjects.map((project) => (
							<Col
								key={project.title}
								md={4}
								className="project-card"
							>
								<motion.div
									layout
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.9 }}
									transition={{
										opacity: { duration: 0.3 },
										layout: { type: "spring", stiffness: 250, damping: 25 },
									}}
									whileHover={{
										y: -10,
										transition: { duration: 0.3 },
									}}
									style={{ height: "100%" }}
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
						{filteredProjects.length === 0 && (
							<Col xs={12} className="text-center my-5">
								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									style={{ color: "#beace0", fontSize: "1.2rem" }}
								>
									{t("projects.noMatches")}
								</motion.p>
							</Col>
						)}
					</AnimatePresence>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;

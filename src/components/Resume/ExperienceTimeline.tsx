import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import {
	FaBriefcase,
	FaGraduationCap,
} from "react-icons/fa";

interface ExperienceItem {
	type: "work" | "education";
	title: string;
	organization: string;
	period: string;
	location: string;
	bullets: string[];
	tech?: string[];
}

const experiencesEn: ExperienceItem[] = [
	{
		type: "work",
		title: "Full-Stack Software Engineer",
		organization: "Trinibuy LTD",
		period: "Dec 2023 – Present",
		location: "Remote",
		bullets: [
			"Architected secure, data-driven SaaS features, including dashboards with optimized rendering, role-based access control, and user isolation for 500+ daily active users.",
			"Designed and optimized REST APIs with AI-assisted features (automated logging, data analysis), reducing response times and manual support overhead by 30%.",
			"Improved mobile responsiveness and frontend performance, increasing mobile engagement by 40%.",
			"Implemented self-hosted iRedMail infrastructure, saving €180+ per user annually.",
			"Architected and maintained cloud infrastructure (Docker, AWS, Nginx) with CI/CD automation, monitoring systems, and SSL compliance across 10+ client portals, reducing deployment effort by 30%.",
			"Designed and maintained PostgreSQL databases using Prisma ORM, improving developer productivity."
		],
		tech: ["React", "Node.js", "TypeScript", "Docker", "AWS", "Nginx", "PostgreSQL", "Prisma"]
	},
	{
		type: "work",
		title: "Full-Stack Developer",
		organization: "Inrits",
		period: "Jan 2023 – May 2024",
		location: "M'saken, Sousse",
		bullets: [
			"Led development of the Global Police Indicators (GPI) platform, showcased at the Dubai World Police Summit.",
			"Built and maintained scalable backend infrastructure supporting analytics dashboards that visualized large-scale public-sector datasets, enabling non-technical stakeholders to extract insights.",
			"Optimized frontend performance and responsiveness, improving usability for decision-makers.",
			"Automated deployments using Docker and AWS, reducing deployment effort by 30+%.",
			"Refactored database schemas and queries, improving response times and system maintainability."
		],
		tech: ["React", "Node.js", "TypeScript", "Docker", "AWS", "PostgreSQL", "Leaflet"]
	},
	{
		type: "work",
		title: "Web Developer",
		organization: "Safari",
		period: "Oct 2022 – Jan 2023",
		location: "M'saken, Sousse",
		bullets: [
			"Delivered responsive React interfaces, improving user flow across key pages.",
			"Integrated Google Maps APIs for location-based services.",
			"Reconfigured hosting and DNS infrastructure, achieving 99% uptime.",
			"Improved SEO performance and user trust through SSL and infrastructure upgrades."
		],
		tech: ["React", "TypeScript", "DNS", "Hosting", "Google Maps API", "SEO"]
	}
];

const educationEn: ExperienceItem[] = [
	{
		type: "education",
		title: "The Complete Full-Stack Web Development Bootcamp",
		organization: "Udemy (by Angela Yu)",
		period: "Completed 2022",
		location: "Online",
		bullets: [
			"React, Node.js, REST APIs, WordPress, Database Design, System Deployments."
		]
	}
];

const experiencesFr: ExperienceItem[] = [
	{
		type: "work",
		title: "Développeur Full-Stack",
		organization: "Trinibuy LTD",
		period: "12/2023 – Présent",
		location: "À distance",
		bullets: [
			"Conçu et développé des fonctionnalités SaaS sécurisées avec isolation des données pour 500+ utilisateurs actifs par jour.",
			"Optimisé les APIs REST (journalisation automatisée, analyse de données), réduisant le temps de réponse et le support de 30 %.",
			"Amélioré la réactivité mobile et les performances du frontend, augmentant l'engagement sur mobile de 40 %.",
			"Déployé une solution d'emailing iRedMail auto-hébergée, économisant 180 € par utilisateur par an.",
			"Géré et automatisé l'infrastructure cloud (Docker, AWS, Nginx, CI/CD, SSL) de 10+ portails clients (déploiements 30 % plus rapides).",
			"Modélisé et optimisé les bases de données PostgreSQL avec l'ORM Prisma."
		],
		tech: ["React", "Node.js", "TypeScript", "Docker", "AWS", "Nginx", "PostgreSQL", "Prisma"]
	},
	{
		type: "work",
		title: "Développeur Full-Stack",
		organization: "Inrits",
		period: "01/2023 – 05/2024",
		location: "M'saken, Sousse",
		bullets: [
			"Dirigé le développement de la plateforme Global Police Indicators (GPI), présentée au World Police Summit de Dubaï.",
			"Conçu et maintenu une infrastructure backend scalable prenant en charge des tableaux de bord analytiques pour de larges ensembles de données.",
			"Optimisé les performances et la réactivité du frontend pour les décideurs.",
			"Automatisé les déploiements (Docker, AWS), réduisant l'effort de déploiement de 30 %.",
			"Refactorisé les schémas et requêtes de base de données, améliorant le temps de réponse API de 35 %."
		],
		tech: ["React", "Node.js", "TypeScript", "Docker", "AWS", "PostgreSQL", "Leaflet"]
	},
	{
		type: "work",
		title: "Développeur Frontend",
		organization: "Safari",
		period: "10/2022 – 01/2023",
		location: "M'saken, Sousse",
		bullets: [
			"Développé des interfaces React fluides, optimisant le parcours utilisateur sur les pages clés.",
			"Intégré des APIs Google Maps pour les services de géolocalisation.",
			"Configuré et stabilisé l'infrastructure d'hébergement et DNS, atteignant 99 % de disponibilité.",
			"Amélioré le référencement naturel (SEO) et la sécurité via l'installation de certificats SSL."
		],
		tech: ["React", "TypeScript", "DNS", "Hébergement", "Google Maps API", "SEO"]
	}
];

const educationFr: ExperienceItem[] = [
	{
		type: "education",
		title: "Bootcamp Développement Web Full-Stack",
		organization: "Udemy (par Angela Yu)",
		period: "Complété en 2022",
		location: "En ligne",
		bullets: [
			"Développement web full-stack moderne (React, Node.js, DevOps, auth, REST APIs, bases de données)."
		]
	}
];

function ExperienceTimeline({ selectedLang }: { selectedLang: string }) {
	const { t } = useTranslation();

	const activeWork = selectedLang === "en" ? experiencesEn : experiencesFr;
	const activeEducation = selectedLang === "en" ? educationEn : educationFr;
	const allItems = [...activeWork, ...activeEducation];

	return (
		<section aria-labelledby="experience-heading">
			<Container>
				<Row className="justify-content-center">
					<Col md={10}>
						<motion.h2
							id="experience-heading"
							className="project-heading text-center"
							style={{ fontSize: "1.8em", marginBottom: "40px", paddingTop: "20px" }}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							{t("resume.experienceHeading", "Professional Experience")}
						</motion.h2>

						<div className="experience-timeline">
							{allItems.map((item, index) => (
								<motion.div
									key={`${item.organization}-${index}`}
									className="experience-item"
									initial={{ opacity: 0, x: -40 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
								>
									<div className="experience-icon-col">
										<div
											className="experience-icon"
											aria-hidden="true"
										>
											{item.type === "work" ? (
												<FaBriefcase />
											) : (
												<FaGraduationCap />
											)}
										</div>
										{index < allItems.length - 1 && (
											<div className="experience-connector" aria-hidden="true" />
										)}
									</div>

									<div className="experience-content">
										<div className="experience-header">
											<div>
												<h3 className="experience-title">{item.title}</h3>
												<p className="experience-org">
													{item.organization}
													{item.location && (
														<span 
															className="experience-location"
															dangerouslySetInnerHTML={{ __html: ` &middot; ${item.location}` }}
														/>
													)}
												</p>
											</div>
											<span className="experience-period">{item.period}</span>
										</div>

										<ul className="experience-bullets">
											{item.bullets.map((bullet, bi) => (
												<li key={bi}>{bullet}</li>
											))}
										</ul>

										{item.tech && item.tech.length > 0 && (
											<div className="experience-tech" aria-label="Technologies used">
												{item.tech.map((t) => (
													<span key={t} className="experience-tech-tag">
														{t}
													</span>
												))}
											</div>
										)}
									</div>
								</motion.div>
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default ExperienceTimeline;

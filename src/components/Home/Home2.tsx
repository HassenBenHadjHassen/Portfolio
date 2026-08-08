import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Avatar from "../../assets/avatar.svg";
import Contact from "./Contact";
import HighlightText from "../HighlightText";

function Home2() {
	const { t } = useTranslation();

	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h2 style={{ fontSize: "2.6em" }}>
							<HighlightText
								text={t("home.introduction.title")}
								highlights={[
									{ words: ["INTRODUCE", "PRÉSENTER"], className: "purple" }
								]}
							/>
						</h2>
						<div className="home-about-body">
							<p>
								<HighlightText
									text={t("home.introduction.description.intro")}
									highlights={[
										{ words: ["React", "Node.js", "TypeScript", "Full Stack Developer"], className: "blue" }
									]}
								/>
							</p>
							<p>
								<HighlightText
									text={t("home.introduction.description.specialization")}
									highlights={[
										{ words: ["scalable", "user-friendly", "modern", "technologies", "client", "personal"], className: "green" }
									]}
								/>
							</p>
							<p>
								<HighlightText
									text={t("home.introduction.description.projects")}
									highlights={[
										{ words: ["GPI", "CardioPro", "Packease.shop"], className: "orange" },
										{ words: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript"], className: "cyan" }
									]}
								/>
							</p>
							<p>
								<HighlightText
									text={t("home.introduction.description.mission")}
									highlights={[
										{ words: ["React", "Node.js", "frontend", "backend", "end-to-end", "solutions", "value"], className: "purple" }
									]}
								/>
							</p>
						</div>
					</Col>
					<Col md={4} className="myAvtar d-flex justify-content-center">
						<Tilt>
							<img src={Avatar} className="img-fluid" alt="Hassen Ben Hadj Hassen avatar" />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h2>{t("home.introduction.findMe")}</h2>
						<p>
							<HighlightText
								text={t("home.introduction.connect")}
								highlights={[
									{ words: ["connect", "contacter"], className: "purple" }
								]}
							/>
						</p>
						<nav aria-label="Social media links">
							<ul className="home-about-social-links">
								<li className="social-icons">
									<a
										href="https://github.com/HassenBenHadjHassen/"
										target="_blank"
										rel="noopener noreferrer"
										className="icon-colour  home-social-icons"
										aria-label="GitHub profile – Hassen Ben Hadj Hassen"
									>
										<AiFillGithub aria-hidden="true" />
									</a>
								</li>
								<li className="social-icons">
									<a
										href="https://www.linkedin.com/in/hassenbenhadjhassen/"
										target="_blank"
										rel="noopener noreferrer"
										className="icon-colour  home-social-icons"
										aria-label="LinkedIn profile – Hassen Ben Hadj Hassen"
									>
										<FaLinkedinIn aria-hidden="true" />
									</a>
								</li>
								<li className="social-icons">
									<a
										href="mailto:hassenbenhadjhassen@gmail.com?subject=Hello%20Hassen"
										target="_blank"
										rel="noopener noreferrer"
										className="icon-colour  home-social-icons"
										aria-label="Send email to Hassen Ben Hadj Hassen"
									>
										<CiMail aria-hidden="true" />
									</a>
								</li>
							</ul>
						</nav>
					</Col>
				</Row>

				{/* Client Testimonials Section (L3) */}
				<Row className="justify-content-center" style={{ marginTop: "80px", marginBottom: "60px" }}>
					<Col md={12} className="text-center">
						<motion.h2 
							style={{ fontSize: "2.2em", marginBottom: "15px" }}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							{t("testimonials.title").split(" ").slice(0, -1).join(" ")}{" "}
							<span className="purple">{t("testimonials.title").split(" ").slice(-1)}</span>
						</motion.h2>
						<motion.p 
							style={{ color: "rgba(255, 255, 255, 0.75)", marginBottom: "40px" }}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							{t("testimonials.subtitle")}
						</motion.p>
					</Col>
					<Row className="justify-content-center gap-4">
						<Col md={5} className="testimonial-card">
							<motion.div
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
							>
								<div className="testimonial-quote">
									{t("testimonials.cardiopro.quote")}
								</div>
								<div className="testimonial-author">
									<strong>Anthony Monaldi</strong>
									<span>{t("testimonials.cardiopro.role")}</span>
								</div>
							</motion.div>
						</Col>
						<Col md={5} className="testimonial-card">
							<motion.div
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
							>
								<div className="testimonial-quote">
									{t("testimonials.gpi.quote")}
								</div>
								<div className="testimonial-author">
									<strong>A. Al-Mansoori</strong>
									<span>{t("testimonials.gpi.role")}</span>
								</div>
							</motion.div>
						</Col>
					</Row>
				</Row>

				<Contact />
			</Container>
		</Container>
	);
}
export default Home2;

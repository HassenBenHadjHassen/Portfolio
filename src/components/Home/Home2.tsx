import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import Avatar from "../../assets/avatar.svg";
import Contact from "./Contact";

function Home2() {
	const { t } = useTranslation();

	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h2 style={{ fontSize: "2.6em" }}>
							{t("home.introduction.title")
								.split(" ")
								.map((word, index) =>
									word === "INTRODUCE" || word === "PRÉSENTER" ? (
										<span key={`title-${index}`} className="purple">
											{" "}
											{word}{" "}
										</span>
									) : (
										`${word} `
									)
								)}
						</h2>
						<div className="home-about-body">
							<p>
								{t("home.introduction.description.intro")
									.split(" ")
									.map((word, index) => {
										const techWords = [
											"React",
											"Node.js",
											"TypeScript",
											"Full Stack Developer",
										];
										const isTechWord = techWords.some((tech) =>
											word.includes(tech)
										);
										return isTechWord ? (
											<span key={`intro-${word}-${index}`} className="blue">
												{" "}
												{word}{" "}
											</span>
										) : (
											`${word} `
										);
									})}
							</p>
							<p>
								{t("home.introduction.description.specialization")
									.split(" ")
									.map((word, index) => {
										const keyWords = [
											"scalable",
											"user-friendly",
											"modern",
											"technologies",
											"client",
											"personal",
										];
										const isKeyWord = keyWords.some((key) =>
											word.toLowerCase().includes(key.toLowerCase())
										);
										return isKeyWord ? (
											<span key={`spec-${word}-${index}`} className="green">
												{" "}
												{word}{" "}
											</span>
										) : (
											`${word} `
										);
									})}
							</p>
							<p>
								{t("home.introduction.description.projects")
									.split(" ")
									.map((word, index) => {
										const projectWords = ["GPI", "CardioPro", "Packease.shop"];
										const techWords = [
											"React",
											"Node.js",
											"MongoDB",
											"Stripe",
											"TypeScript",
										];
										const isProjectWord = projectWords.some((project) =>
											word.includes(project)
										);
										const isTechWord = techWords.some((tech) =>
											word.includes(tech)
										);
										if (isProjectWord) {
											return (
												<span
													key={`projects-${word}-${index}`}
													className="orange"
												>
													{" "}
													{word}{" "}
												</span>
											);
										} else if (isTechWord) {
											return (
												<span
													key={`projects-${word}-${index}`}
													className="cyan"
												>
													{" "}
													{word}{" "}
												</span>
											);
										} else {
											return `${word} `;
										}
									})}
							</p>
							<p>
								{t("home.introduction.description.mission")
									.split(" ")
									.map((word, index) => {
										const keyWords = [
											"React",
											"Node.js",
											"frontend",
											"backend",
											"end-to-end",
											"solutions",
											"value",
										];
										const isKeyWord = keyWords.some((key) =>
											word.toLowerCase().includes(key.toLowerCase())
										);
										return isKeyWord ? (
											<span key={`mission-${word}-${index}`} className="purple">
												{" "}
												{word}{" "}
											</span>
										) : (
											`${word} `
										);
									})}
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
							{t("home.introduction.connect")
								.split(" ")
								.map((word, index) =>
									word === "connect" || word === "contacter" ? (
										<span key={`connect-${index}`} className="purple">
											{" "}
											{word}{" "}
										</span>
									) : (
										`${word} `
									)
								)}
						</p>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/HassenBenHadjHassen/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/hassenbenhadjhassen/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="mailto:hassenbenhadjhassen@gmail.com?subject=Hello%20Hassen"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<CiMail />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
				<Contact />
			</Container>
		</Container>
	);
}
export default Home2;

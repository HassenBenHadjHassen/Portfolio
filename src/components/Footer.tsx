import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaBriefcase } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Logo from "../assets/logo.png";

function Footer() {
	const { t } = useTranslation();
	const year = new Date().getFullYear();

	return (
		<footer className="footer-redesign">
			<Container>
				<Row className="gy-4 py-5">
					{/* Column 1: Brand & Slogan */}
					<Col lg={5} md={6} className="footer-brand-col text-start">
						<div className="footer-logo-wrapper mb-3">
							<img src={Logo} alt="Hassen Logo" className="footer-logo img-fluid" style={{ maxHeight: "35px" }} />
						</div>
						<p className="footer-brand-desc mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.7)" }}>
							{t("footer.description")}
						</p>
						<div className="footer-socials d-flex gap-3">
							<a
								href="https://github.com/HassenBenHadjHassen/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub profile"
								className="footer-social-link"
							>
								<AiFillGithub />
							</a>
							<a
								href="https://www.linkedin.com/in/hassenbenhadjhassen/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn profile"
								className="footer-social-link"
							>
								<FaLinkedinIn />
							</a>
						</div>
					</Col>

					{/* Column 2: Navigation Links */}
					<Col lg={3} md={6} sm={6} className="footer-links-col text-start">
						<h4 className="footer-col-title" style={{ fontSize: "1.1rem", fontWeight: "600", color: "#fff", marginBottom: "20px" }}>
							{t("footer.linksTitle")}
						</h4>
						<ul className="footer-link-list list-unstyled d-flex flex-column gap-2" style={{ margin: 0, padding: 0 }}>
							<li><Link to="/">{t("navigation.home")}</Link></li>
							<li><Link to="/about">{t("navigation.about")}</Link></li>
							<li><Link to="/projects">{t("navigation.projects")}</Link></li>
							<li><Link to="/resume">{t("navigation.resume")}</Link></li>
						</ul>
					</Col>

					{/* Column 3: Contact & Status */}
					<Col lg={4} md={6} className="footer-contact-col text-start">
						<h4 className="footer-col-title" style={{ fontSize: "1.1rem", fontWeight: "600", color: "#fff", marginBottom: "20px" }}>
							{t("footer.contactTitle")}
						</h4>
						<div className="footer-status mb-3 d-inline-flex align-items-center gap-2">
							<span className="footer-status-dot"></span>
							<span className="footer-status-text">{t("footer.status")}</span>
						</div>
						<ul className="footer-contact-list list-unstyled d-flex flex-column gap-2" style={{ margin: 0, padding: 0 }}>
							<li>
								<a href="mailto:hassenbenhadjhassen@gmail.com" className="d-flex align-items-center gap-2">
									<AiOutlineMail /> hassenbenhadjhassen@gmail.com
								</a>
							</li>
							<li className="mt-2">
								<a href="/resume" className="d-flex align-items-center gap-2">
									<FaBriefcase /> {t("navigation.resume")}
								</a>
							</li>
						</ul>
					</Col>
				</Row>

				<hr className="footer-divider" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", margin: "20px 0" }} />

				<Row className="py-4">
					<Col md={12} className="text-center">
						<p className="footer-copyright-text mb-0" style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.5)" }}>
							{t("footer.rights", { year })}
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;

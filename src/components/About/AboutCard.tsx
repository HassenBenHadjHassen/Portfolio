import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";
import HighlightText from "../HighlightText";

function AboutCard() {
	const { t } = useTranslation();

	const techWords = [
		"React",
		"Node.js",
		"TypeScript",
		"Full Stack Developer",
		"cloud technologies",
		"frontend",
		"backend",
		"scalable",
		"high-performance",
		"modern",
		"technologies",
		"applications",
		"frameworks",
		"open-source",
		"communities",
		"innovative",
		"trends",
		"cutting-edge",
		"pointe",
		"développeurs",
		"communautés",
		"innovants",
		"tendances",
		"technologies",
		"applications",
		"frameworks",
		"open-source",
		"évolutives",
		"performantes",
		"modernes",
		"développement",
		"expériences",
		"utilisateur",
		"intuitives",
		"systèmes",
		"robustes",
		"propre",
		"maintenable",
		"pratiques",
		"industrie",
		"code",
		"écrire",
		"rester",
		"jour",
		"meilleures",
		"quand",
		"code",
		"pas",
		"aime",
		"explorer",
		"contribuer",
		"collaborer",
		"apprentissage",
		"continu",
		"développement",
		"professionnel",
	];

	return (
		<Card
			className="quote-card-view"
			style={{
				border: "1px solid rgba(200, 137, 230, 0.25)",
				boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
				borderRadius: "15px",
				backgroundColor: "rgba(255, 255, 255, 0.04)",
				backdropFilter: "blur(15px)",
				color: "#f3f4f6",
			}}
		>
			<Card.Body style={{ padding: "1.5rem" }}>
				<div className="mb-3">
					<p
						style={{
							textAlign: "justify",
							fontSize: "1em",
							lineHeight: "1.5",
							marginBottom: "1.5rem",
						}}
					>
						<HighlightText
							text={t("about.personalDescription")}
							highlights={[
								{ words: techWords, className: "purple" }
							]}
						/>
					</p>
					<div className="row">
						<div className="col-12 col-md-6">
							<ul className="list-unstyled" style={{ marginBottom: "1rem" }}>
								<li className="about-activity mb-2">
									<ImPointRight
										className="me-2"
										style={{ fontSize: "0.9rem" }}
									/>
									<span style={{ fontSize: "0.9rem" }}>
										<HighlightText
											text={t("about.activities.exploring")}
											highlights={[
												{ words: ["cutting-edge", "technologies", "frameworks", "pointe"], className: "blue" }
											]}
										/>
									</span>
								</li>
								<li className="about-activity mb-2">
									<ImPointRight
										className="me-2"
										style={{ fontSize: "0.9rem" }}
									/>
									<span style={{ fontSize: "0.9rem" }}>
										<HighlightText
											text={t("about.activities.contributing")}
											highlights={[
												{ words: ["open-source", "communities", "communautés"], className: "green" }
											]}
										/>
									</span>
								</li>
							</ul>
						</div>
						<div className="col-12 col-md-6">
							<ul className="list-unstyled">
								<li className="about-activity mb-2">
									<ImPointRight
										className="me-2"
										style={{ fontSize: "0.9rem" }}
									/>
									<span style={{ fontSize: "0.9rem" }}>
										<HighlightText
											text={t("about.activities.collaborating")}
											highlights={[
												{ words: ["innovative", "developers", "innovants", "développeurs"], className: "orange" }
											]}
										/>
									</span>
								</li>
								<li className="about-activity mb-2">
									<ImPointRight
										className="me-2"
										style={{ fontSize: "0.9rem" }}
									/>
									<span style={{ fontSize: "0.9rem" }}>
										<HighlightText
											text={t("about.activities.learning")}
											highlights={[
												{ words: ["learning", "trends", "apprentissage", "tendances"], className: "cyan" }
											]}
										/>
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;

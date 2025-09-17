import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

function AboutCard() {
	const { t } = useTranslation();

	return (
		<Card
			className="quote-card-view"
			style={{
				border: "none",
				boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
				borderRadius: "15px",
				backgroundColor: "rgba(255,255,255,0.95)",
			}}
		>
			<Card.Body style={{ padding: "1.5rem" }}>
				<blockquote className="blockquote mb-3">
					<p
						style={{
							textAlign: "justify",
							fontSize: "1em",
							lineHeight: "1.5",
							marginBottom: "1.5rem",
						}}
					>
						{t("about.personalDescription")
							.split(" ")
							.map((word, index) => {
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
								const isTechWord = techWords.some((tech) =>
									word.toLowerCase().includes(tech.toLowerCase())
								);
								return isTechWord ? (
									<span key={`about-${word}-${index}`} className="purple">
										{" "}
										{word}{" "}
									</span>
								) : (
									`${word} `
								);
							})}
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
										{t("about.activities.exploring")
											.split(" ")
											.map((word, index) => {
												const keyWords = [
													"cutting-edge",
													"technologies",
													"frameworks",
													"pointe",
													"technologies",
													"frameworks",
												];
												const isKeyWord = keyWords.some((key) =>
													word.toLowerCase().includes(key.toLowerCase())
												);
												return isKeyWord ? (
													<span
														key={`exploring-${word}-${index}`}
														className="blue"
													>
														{" "}
														{word}{" "}
													</span>
												) : (
													`${word} `
												);
											})}
									</span>
								</li>
								<li className="about-activity mb-2">
									<ImPointRight
										className="me-2"
										style={{ fontSize: "0.9rem" }}
									/>
									<span style={{ fontSize: "0.9rem" }}>
										{t("about.activities.contributing")
											.split(" ")
											.map((word, index) => {
												const keyWords = [
													"open-source",
													"communities",
													"open-source",
													"communautés",
												];
												const isKeyWord = keyWords.some((key) =>
													word.toLowerCase().includes(key.toLowerCase())
												);
												return isKeyWord ? (
													<span
														key={`contributing-${word}-${index}`}
														className="green"
													>
														{" "}
														{word}{" "}
													</span>
												) : (
													`${word} `
												);
											})}
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
										{t("about.activities.collaborating")
											.split(" ")
											.map((word, index) => {
												const keyWords = [
													"innovative",
													"developers",
													"innovants",
													"développeurs",
												];
												const isKeyWord = keyWords.some((key) =>
													word.toLowerCase().includes(key.toLowerCase())
												);
												return isKeyWord ? (
													<span
														key={`collaborating-${word}-${index}`}
														className="orange"
													>
														{" "}
														{word}{" "}
													</span>
												) : (
													`${word} `
												);
											})}
									</span>
								</li>
								<li className="about-activity mb-2">
									<ImPointRight
										className="me-2"
										style={{ fontSize: "0.9rem" }}
									/>
									<span style={{ fontSize: "0.9rem" }}>
										{t("about.activities.learning")
											.split(" ")
											.map((word, index) => {
												const keyWords = [
													"learning",
													"trends",
													"apprentissage",
													"tendances",
												];
												const isKeyWord = keyWords.some((key) =>
													word.toLowerCase().includes(key.toLowerCase())
												);
												return isKeyWord ? (
													<span
														key={`learning-${word}-${index}`}
														className="cyan"
													>
														{" "}
														{word}{" "}
													</span>
												) : (
													`${word} `
												);
											})}
									</span>
								</li>
							</ul>
						</div>
					</div>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;

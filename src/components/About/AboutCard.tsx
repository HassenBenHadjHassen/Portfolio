import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

function AboutCard() {
	const { t } = useTranslation();

	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
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
					<ul>
						<li className="about-activity">
							<ImPointRight />
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
										<span key={`exploring-${word}-${index}`} className="blue">
											{" "}
											{word}{" "}
										</span>
									) : (
										`${word} `
									);
								})}
						</li>
						<li className="about-activity">
							<ImPointRight />
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
						</li>
						<li className="about-activity">
							<ImPointRight />
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
						</li>
						<li className="about-activity">
							<ImPointRight />
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
										<span key={`learning-${word}-${index}`} className="cyan">
											{" "}
											{word}{" "}
										</span>
									) : (
										`${word} `
									);
								})}
						</li>
					</ul>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;

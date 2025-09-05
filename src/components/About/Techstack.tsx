import { Col, Row } from "react-bootstrap";
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
} from "react-icons/di";
import {
	SiTypescript,
	SiFirebase,
	SiRedux,
	SiPrisma,
	SiTailwindcss,
	SiVite,
	SiFramer,
	SiRadixui,
	SiShadcnui,

} from "react-icons/si";

function Techstack() {
	return (
		<div>
			<Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
				{/* Core Frontend Technologies */}
				<Col xs={4} md={2} className="tech-icons">
					<DiJavascript1 />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<SiTypescript />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<DiReact />
				</Col>
			</Row>

			{/* Separator */}
			<hr
				style={{
					border: "none",
					height: "2px",
					background:
						"linear-gradient(90deg, transparent, #8b5cf6, transparent)",
					margin: "20px auto",
					width: "60%",
				}}
			/>

			<Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
				{/* Styling & UI Libraries */}
				<Col xs={4} md={2} className="tech-icons">
					<SiTailwindcss />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<SiShadcnui />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<SiRadixui />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<SiFramer />
				</Col>
			</Row>

			{/* Separator */}
			<hr
				style={{
					border: "none",
					height: "2px",
					background:
						"linear-gradient(90deg, transparent, #8b5cf6, transparent)",
					margin: "20px auto",
					width: "60%",
				}}
			/>

			<Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
				{/* Build Tools & Development */}
				<Col xs={4} md={2} className="tech-icons">
					<SiVite />
				</Col>
			</Row>

			{/* Separator */}
			<hr
				style={{
					border: "none",
					height: "2px",
					background:
						"linear-gradient(90deg, transparent, #8b5cf6, transparent)",
					margin: "20px auto",
					width: "60%",
				}}
			/>

			<Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
				{/* Backend & Database */}
				<Col xs={4} md={2} className="tech-icons">
					<DiNodejs />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<DiMongodb />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<SiPrisma />
				</Col>
			</Row>

			{/* Separator */}
			<hr
				style={{
					border: "none",
					height: "2px",
					background:
						"linear-gradient(90deg, transparent, #8b5cf6, transparent)",
					margin: "20px auto",
					width: "60%",
				}}
			/>

			<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
				{/* State Management & Libraries */}
				<Col xs={4} md={2} className="tech-icons">
					<SiRedux />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<SiFirebase />
				</Col>
			</Row>
		</div>
	);
}

export default Techstack;

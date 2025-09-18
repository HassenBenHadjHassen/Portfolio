import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb } from "react-icons/di";
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
	const technologies = [
		// Core Frontend Technologies
		{
			icon: <DiJavascript1 />,
			name: "JavaScript",
			url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		},
		{
			icon: <SiTypescript />,
			name: "TypeScript",
			url: "https://www.typescriptlang.org/",
		},
		{ icon: <DiReact />, name: "React", url: "https://reactjs.org/" },

		// Styling & UI Libraries
		{
			icon: <SiTailwindcss />,
			name: "Tailwind CSS",
			url: "https://tailwindcss.com/",
		},
		{ icon: <SiShadcnui />, name: "Shadcn/ui", url: "https://ui.shadcn.com/" },
		{ icon: <SiRadixui />, name: "Radix UI", url: "https://www.radix-ui.com/" },
		{
			icon: <SiFramer />,
			name: "Framer Motion",
			url: "https://www.framer.com/motion/",
		},

		// Build Tools & Development
		{ icon: <SiVite />, name: "Vite", url: "https://vitejs.dev/" },

		// Backend & Database
		{ icon: <DiNodejs />, name: "Node.js", url: "https://nodejs.org/" },
		{ icon: <DiMongodb />, name: "MongoDB", url: "https://www.mongodb.com/" },
		{ icon: <SiPrisma />, name: "Prisma", url: "https://www.prisma.io/" },

		// State Management & Libraries
		{ icon: <SiRedux />, name: "Redux", url: "https://redux.js.org/" },
		{
			icon: <SiFirebase />,
			name: "Firebase",
			url: "https://firebase.google.com/",
		},
	];

	const renderTechRow = (startIndex: number, endIndex: number) => (
		<Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
			{technologies.slice(startIndex, endIndex).map((tech, index) => (
				<Col
					key={`tech-${tech.name}-${startIndex + index}`}
					xs={6}
					sm={4}
					md={2}
					className="tech-icons"
					style={{ marginBottom: "15px" }}
				>
					<a
						href={tech.url}
						target="_blank"
						rel="noopener noreferrer"
						style={{
							textDecoration: "none",
							color: "inherit",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							transition: "transform 0.3s ease, color 0.3s ease",
							padding: "10px",
							borderRadius: "8px",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.transform = "scale(1.05)";
							e.currentTarget.style.color = "#8b5cf6";
							e.currentTarget.style.backgroundColor = "rgba(139, 92, 246, 0.1)";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.transform = "scale(1)";
							e.currentTarget.style.color = "inherit";
							e.currentTarget.style.backgroundColor = "transparent";
						}}
					>
						<div style={{ fontSize: "2rem", marginBottom: "0.3rem" }}>
							{tech.icon}
						</div>
						<small
							style={{
								fontSize: "0.7rem",
								fontWeight: "500",
								textAlign: "center",
								opacity: 0.8,
								lineHeight: "1.2",
							}}
						>
							{tech.name}
						</small>
					</a>
				</Col>
			))}
		</Row>
	);

	return (
		<div>
			{/* Core Frontend Technologies */}
			{renderTechRow(0, 3)}

			{/* Separator */}
			<hr
				style={{
					border: "none",
					height: "1px",
					background:
						"linear-gradient(90deg, transparent, #8b5cf6, transparent)",
					margin: "15px auto",
					width: "50%",
				}}
			/>

			{/* Styling & UI Libraries */}
			{renderTechRow(3, 7)}

			{/* Separator */}
			<hr
				style={{
					border: "none",
					height: "1px",
					background:
						"linear-gradient(90deg, transparent, #8b5cf6, transparent)",
					margin: "15px auto",
					width: "50%",
				}}
			/>

			{/* Build Tools & Development */}
			{renderTechRow(7, 8)}

			{/* Separator */}
			<hr
				style={{
					border: "none",
					height: "1px",
					background:
						"linear-gradient(90deg, transparent, #8b5cf6, transparent)",
					margin: "15px auto",
					width: "50%",
				}}
			/>

			{/* Backend & Database */}
			{renderTechRow(8, 11)}

			{/* Separator */}
			<hr
				style={{
					border: "none",
					height: "1px",
					background:
						"linear-gradient(90deg, transparent, #8b5cf6, transparent)",
					margin: "15px auto",
					width: "50%",
				}}
			/>

			{/* State Management & Libraries */}
			{renderTechRow(11, 13)}
		</div>
	);
}

export default Techstack;

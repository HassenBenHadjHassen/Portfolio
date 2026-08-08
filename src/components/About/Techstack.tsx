import { Col, Row } from "react-bootstrap";
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiPhp,
	DiWordpress,
	DiGit,
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
	SiLaravel,
	SiDocker,
	SiGithubactions,
} from "react-icons/si";

interface Technology {
	icon: React.ReactNode;
	name: string;
	url: string;
}

interface TechCategory {
	title: string;
	items: Technology[];
}

function Techstack() {
	const categories: TechCategory[] = [
		{
			title: "Core Frontend & Languages",
			items: [
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
				{ icon: <DiPhp />, name: "PHP", url: "https://www.php.net/" },
			],
		},
		{
			title: "Styling & UI Libraries",
			items: [
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
			],
		},
		{
			title: "Backend & Databases",
			items: [
				{ icon: <DiNodejs />, name: "Node.js", url: "https://nodejs.org/" },
				{ icon: <SiLaravel />, name: "Laravel", url: "https://laravel.com/" },
				{ icon: <DiMongodb />, name: "MongoDB", url: "https://www.mongodb.com/" },
				{ icon: <SiPrisma />, name: "Prisma", url: "https://www.prisma.io/" },
			],
		},
		{
			title: "DevOps & Tools",
			items: [
				{ icon: <SiVite />, name: "Vite", url: "https://vitejs.dev/" },
				{ icon: <SiDocker />, name: "Docker", url: "https://www.docker.com/" },
				{ icon: <DiGit />, name: "Git", url: "https://git-scm.com/" },
				{ icon: <SiGithubactions />, name: "GitHub Actions", url: "https://github.com/features/actions" },
			],
		},
		{
			title: "Other Platforms & State",
			items: [
				{ icon: <DiWordpress />, name: "WordPress", url: "https://wordpress.org/" },
				{ icon: <SiRedux />, name: "Redux", url: "https://redux.js.org/" },
				{
					icon: <SiFirebase />,
					name: "Firebase",
					url: "https://firebase.google.com/",
				},
			],
		},
	];

	return (
		<div style={{ paddingBottom: "50px" }}>
			{categories.map((category, catIndex) => (
				<div key={`cat-${category.title}-${catIndex}`}>
					<Row className="justify-content-center">
						<Col xs={12} className="text-center">
							<h3
								style={{
									color: "#beace0",
									fontSize: "1.2rem",
									fontWeight: "600",
									marginTop: "30px",
									marginBottom: "20px",
									letterSpacing: "1px",
								}}
							>
								{category.title}
							</h3>
						</Col>
					</Row>
					<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
						{category.items.map((tech, techIndex) => (
							<Col
								key={`tech-${tech.name}-${techIndex}`}
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
										width: "100%",
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
					{catIndex < categories.length - 1 && (
						<hr
							style={{
								border: "none",
								height: "1px",
								background:
									"linear-gradient(90deg, transparent, #8b5cf6, transparent)",
								margin: "20px auto",
								width: "50%",
							}}
						/>
					)}
				</div>
			))}
		</div>
	);
}

export default Techstack;

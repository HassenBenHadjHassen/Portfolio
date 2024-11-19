import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCard";

import GPI from "../../assets/Projects/gpi.png";
import Bazaar from "../../assets/Projects/bazaar.png";
import DoctorWho2048 from "../../assets/Projects/doctor-who-2048.png";
import Packease from "../../assets/Projects/packease.png";
import SecureChatApp from "../../assets/Projects/secure-chat-app.png";
import SmothScrollReact from "../../assets/Projects/smooth-scroll-react.png";

import { v4 as uuidv4 } from "uuid";

interface ProjectType {
  title: string;
  description: string;
  link: string;
  githubLink?: string;
  image: string;
}

const projects: ProjectType[] = [
  {
    title: "GPI (Police Global Indicators)",
    description:
      "A sophisticated data visualization website built for the 2024 Police World Summit in Dubai. Contracted by the Dubai Police to showcase global indicators using advanced geospatial mapping. Developed with ReactJS, Leaflet, TypeScript, and styled using Styled Components.",
    link: "https://gpsi-staging.inrits.tech/",
    githubLink: undefined,
    image: GPI,
  },
  {
    title: "Secure Chat App",
    description:
      "A privacy-focused messaging platform, inspired by Messenger, ensuring secure communication with end-to-end encryption. Built using ReactJS, NodeJS, Socket.IO.",
    link: "https://chat.hassenbenhadjhassen.com/",
    githubLink: "https://github.com/HassenBenHadjHassen/secure-chat-app",
    image: SecureChatApp,
  },
  {
    title: "React Smooth Scroll NPM Package",
    description:
      "An open-source NPM package that adds smooth scrolling to React projects, enabling developers to create intuitive interfaces. Implemented with ReactJS and Typescript, with over 600 downloads on NPM.",
    link: "https://www.npmjs.com/package/smooth-scroll-react",
    githubLink: "https://github.com/HassenBenHadjHassen/smooth-scroll-react",
    image: SmothScrollReact,
  },
  {
    title: "Packease.shop",
    description:
      "An E-commerce website dedicated to selling travel bags, featuring a user-friendly interface and robust payment solutions. Built with ReactJS, Node.js, Stripe, and MongoDB and TypeScript. Attracted over 2000 unique visitors.",
    link: "https://packease.shop",
    githubLink: undefined,
    image: Packease,
  },
  {
    title: "Bazaar Insights",
    description:
      "A SAAS platform for Hypixel Skyblock players, helping users find the best bazaar flips with powerful filtering options. Developed using ReactJS, NodeJS, Prisma, and TypeScript. Currently under development.",
    link: "https://bazaar.hassenbenhadjhassen.com/",
    githubLink: "https://github.com/HassenBenHadjHassen/bazaar-insights",
    image: Bazaar,
  },
  {
    title: "Doctor Who 2048",
    description:
      "A creative spin on the classic 2048 game for Doctor Who fans, replacing numbers with the Doctor's incarnations. Built using ReactJS and TypeScript.",
    link: "https://doctor-who-2048.hassenbenhadjhassen.com/",
    githubLink: "https://github.com/HassenBenHadjHassen/doctor-who-2048",
    image: DoctorWho2048,
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col key={uuidv4()} md={4} className="project-card">
              <ProjectCard
                imgPath={project.image}
                title={project.title}
                description={project.description}
                ghLink={project.githubLink}
                demoLink={project.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

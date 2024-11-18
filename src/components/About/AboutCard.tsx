import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Hassen Ben Hadj Hassen</span>, a
            software developer with 2+ years of experience in ReactJS and
            NodeJS. I build high-performance web and mobile apps, focusing on
            clean, scalable code. My projects, like Bazaar Insights and GPI,
            reflect my passion for innovation.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching TV shows
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating with friends, whether it’s games or fun
              experiments.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

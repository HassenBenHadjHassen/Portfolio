import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              👋 Hi, I’m Hassen Ben Hadj Hassen, a software developer with 2
              years of experience building web applications using{" "}
              <b className="purple">ReactJS, NodeJS, and TypeScript</b>.
              <br />
              <br />⚡ I specialize in creating scalable, user-friendly apps
              with modern technologies.
              <br />
              <br />
              🚀 I’ve built projects like{" "}
              <b className="purple">
                GPI, Secure Chat App, and Bazaar Insights
              </b>
              , using tools like <b className="purple">GitHub, Docker</b> and{" "}
              <b className="purple">iRedMail</b>. <br />
              <br />
              💡 Whenever possible, I bring ideas to life with{" "}
              <b className="purple">React</b> for front-end and{" "}
              <b className="purple">NodeJS</b> for backend.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={"/avatar.svg"} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
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
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import {
	AiFillStar,
	AiOutlineHome,
	AiOutlineFundProjectionScreen,
	AiOutlineUser,
} from "react-icons/ai";
import Logo from "../../assets/logo.png";
import LanguageSwitcher from "../LanguageSwitcher";

function NavBar() {
	const [expand, setExpand] = useState(false);
	const [navColour, setNavColour] = useState(false);
	const { t } = useTranslation();

	// Handle scroll events to change the navbar style
	useEffect(() => {
		function scrollHandler() {
			if (window.scrollY >= 20) {
				setNavColour(true);
			} else {
				setNavColour(false);
			}
		}

		// Add the scroll listener
		window.addEventListener("scroll", scrollHandler);

		// Cleanup the listener on component unmount
		return () => {
			window.removeEventListener("scroll", scrollHandler);
		};
	}, []);

	return (
		<Navbar
			expanded={expand}
			fixed="top"
			expand="md"
			className={navColour ? "sticky" : "navbar"}
		>
			<Container>
				<Navbar.Brand href="/" className="d-flex">
					<img src={Logo} className="img-fluid logo" alt="brand" />
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					onClick={() => setExpand(!expand)}
				>
					<span></span>
					<span></span>
					<span></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto" defaultActiveKey="#home">
						<Nav.Item>
							<Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
								<AiOutlineHome style={{ marginBottom: "2px" }} />{" "}
								{t("navigation.home")}
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link as={Link} to="/about" onClick={() => setExpand(false)}>
								<AiOutlineUser style={{ marginBottom: "2px" }} />{" "}
								{t("navigation.about")}
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/project"
								onClick={() => setExpand(false)}
							>
								<AiOutlineFundProjectionScreen
									style={{ marginBottom: "2px" }}
								/>{" "}
								{t("navigation.projects")}
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link as={Link} to="/resume" onClick={() => setExpand(false)}>
								<CgFileDocument style={{ marginBottom: "2px" }} />{" "}
								{t("navigation.resume")}
							</Nav.Link>
						</Nav.Item>

						<Nav.Item className="language-switcher-item">
							<LanguageSwitcher />
						</Nav.Item>

						<Nav.Item className="fork-btn">
							<Button
								href="https://github.com/HassenBenHadjHassen/Portfolio"
								target="_blank"
								className="fork-btn-inner"
							>
								<CgGitFork style={{ fontSize: "1.2em" }} />{" "}
								<AiFillStar style={{ fontSize: "1.1em" }} />
							</Button>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;

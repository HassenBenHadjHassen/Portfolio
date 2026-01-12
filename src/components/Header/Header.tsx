import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
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
		<motion.div
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<Navbar
				expanded={expand}
				fixed="top"
				expand="md"
				className={navColour ? "sticky" : "navbar"}
			>
				<Container>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Navbar.Brand href="/" className="d-flex">
							<img src={Logo} className="img-fluid logo" alt="brand" />
						</Navbar.Brand>
					</motion.div>
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
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Nav.Link as={Link} to="/" onClick={() => setExpand(false)}>
										<AiOutlineHome style={{ marginBottom: "2px" }} />{" "}
										{t("navigation.home")}
									</Nav.Link>
								</motion.div>
							</Nav.Item>

							<Nav.Item>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Nav.Link
										as={Link}
										to="/about"
										onClick={() => setExpand(false)}
									>
										<AiOutlineUser style={{ marginBottom: "2px" }} />{" "}
										{t("navigation.about")}
									</Nav.Link>
								</motion.div>
							</Nav.Item>

							<Nav.Item>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Nav.Link
										as={Link}
										to="/projects"
										onClick={() => setExpand(false)}
									>
										<AiOutlineFundProjectionScreen
											style={{ marginBottom: "2px" }}
										/>{" "}
										{t("navigation.projects")}
									</Nav.Link>
								</motion.div>
							</Nav.Item>

							<Nav.Item>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Nav.Link
										as={Link}
										to="/resume"
										onClick={() => setExpand(false)}
									>
										<CgFileDocument style={{ marginBottom: "2px" }} />{" "}
										{t("navigation.resume")}
									</Nav.Link>
								</motion.div>
							</Nav.Item>

							<Nav.Item className="language-switcher-item">
								<LanguageSwitcher />
							</Nav.Item>

							<Nav.Item className="fork-btn">
								<motion.div
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button
										href="https://github.com/HassenBenHadjHassen/Portfolio"
										target="_blank"
										className="fork-btn-inner"
									>
										<CgGitFork style={{ fontSize: "1.2em" }} />{" "}
										<AiFillStar style={{ fontSize: "1.1em" }} />
									</Button>
								</motion.div>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</motion.div>
	);
}

export default NavBar;

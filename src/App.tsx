import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n";
import Preloader from "../src/components/Pre";
import Footer from "./components/Footer";
import Navbar from "./components/Header/Header";
import Home from "./components/Home/Home";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects/Projects";

function AppContent() {
	const location = useLocation();
	const [announcement, setAnnouncement] = useState("");

	useEffect(() => {
		const pageNames: Record<string, string> = {
			"/": "Home page",
			"/projects": "Projects portfolio page",
			"/about": "About page",
			"/resume": "Resume page",
		};
		const pageName = pageNames[location.pathname] || "page";
		setAnnouncement(`Navigated to ${pageName}`);
	}, [location.pathname]);

	return (
		<div className="App">
			{/* Visually hidden screen reader announcer for SPA route changes */}
			<div
				aria-live="assertive"
				aria-atomic="true"
				style={{
					position: "absolute",
					width: "1px",
					height: "1px",
					padding: "0",
					margin: "-1px",
					overflow: "hidden",
					clip: "rect(0, 0, 0, 0)",
					border: "0",
				}}
			>
				{announcement}
			</div>

			{/* Skip to main content — keyboard / screen reader accessibility */}
			<a href="#main-content" className="skip-to-content">
				Skip to main content
			</a>
			<Navbar />
			<ScrollToTop />
			<AnimatePresence mode="wait">
				<motion.main
					id="main-content"
					key={location.pathname}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
					tabIndex={-1}
					aria-label="Page content"
				>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/about" element={<About />} />
						<Route path="/resume" element={<Resume />} />
						<Route path="/sitemap.xml" element={null} />
						<Route path="/robots.txt" element={null} />
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</motion.main>
			</AnimatePresence>
			<Footer />
		</div>
	);
}

function App() {
	const [load, setLoad] = useState(true);

	useEffect(() => {
		// Limit preloader to 300ms max — 1500ms was penalising Lighthouse FCP/LCP
		const handleLoad = () => setLoad(false);

		if (document.readyState === "complete") {
			handleLoad();
			return;
		}

		window.addEventListener("load", handleLoad);
		const timeout = setTimeout(handleLoad, 300);

		return () => {
			window.removeEventListener("load", handleLoad);
			clearTimeout(timeout);
		};
		// Empty dep array: run once on mount only — no dependency loop
	}, []);

	return (
		<>
			<Preloader load={load} />
			<div id={load ? "no-scroll" : "scroll"}>
				<AppContent />
			</div>
		</>
	);
}

export default App;

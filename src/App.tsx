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

	return (
		<div className="App">
			<Navbar />
			<ScrollToTop />
			<AnimatePresence mode="wait">
				<motion.div
					key={location.pathname}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
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
				</motion.div>
			</AnimatePresence>
			<Footer />
		</div>
	);
}

function App() {
	const [load, setLoad] = useState(true);

	useEffect(() => {
		const handleLoad = () => setLoad(false);

		if (document.readyState === "complete") {
			handleLoad();
		} else {
			window.addEventListener("load", handleLoad);
		}

		const timeout = setTimeout(() => {
			if (load) setLoad(false);
		}, 1500);

		return () => {
			window.removeEventListener("load", handleLoad);
			clearTimeout(timeout);
		};
	}, [load]);

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

import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
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

function App() {
	const [load, setLoad] = useState(true);

	useEffect(() => {
		const handleLoad = () => {
			setLoad(false);
		};

		if (document.readyState === "complete") {
			handleLoad();
		} else {
			window.addEventListener("load", handleLoad);
		}

		// Fail-safe to set load to false after 1.5 seconds
		const timeout = setTimeout(() => {
			if (load) {
				console.log("Load timed out, setting to false");
				setLoad(false);
			}
		}, 1500);

		// Cleanup the event listener and timeout
		return () => {
			window.removeEventListener("load", handleLoad);
			clearTimeout(timeout);
		};
	}, [load]);
	return (
		<Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<Preloader load={load} />
			<div className="App" id={load ? "no-scroll" : "scroll"}>
				<Navbar />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/project" element={<Projects />} />
					<Route path="/about" element={<About />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="/sitemap.xml" element={null} />
					<Route path="/robots.txt" element={null} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

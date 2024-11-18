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
import Preloader from "../src/components/Pre";
import Footer from "./components/Footer";
import Navbar from "./components/Header/Header";
import Home from "./components/Home/Home";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects/Projects";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import "./App.css";
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";

// function App() {
//   const projects = [
//     {
//       title: "GPI (Police Global Indicators)",
//       description:
//         "A website built for the 2024 Police World Summit in Dubai, contracted by the Dubai Police. Developed using ReactJS and Leaflet.",
//       link: "https://gpsi-staging.inrits.tech/",
//     },
//     {
//       title: "Secure Chat App",
//       description:
//         "A secure chat application similar to Messenger, designed for privacy-focused communication.",
//       link: "https://chat.hassenbenhadjhassen.com/",
//     },
//     {
//       title: "React Smooth Scroll NPM Package",
//       description:
//         "An NPM package that adds smooth scroll functionality to React projects. Over 600 total downloads.",
//       link: "https://www.npmjs.com/package/smooth-scroll-react",
//     },
//     {
//       title: "Packease.shop",
//       description:
//         "An E-commerce website for selling travel bags, with over 2000 total visitors.",
//       link: "https://packease.shop",
//     },
//     {
//       title: "Bazaar Insights",
//       description:
//         "A SAAS platform for Hypixel Skyblock players, helping users find the best bazaar flips. Still under development.",
//       link: "https://bazaar.hassenbenhadjhassen.com/",
//     },
//   ];

//   return (
//     <div className="App">
//       <Header />
//       <section>
//         {projects.map((project, index) => (
//           <div className="project-card" key={index}>
//             <h2>{project.title}</h2>
//             <p>{project.description}</p>
//             <a href={project.link} target="_blank" rel="noopener noreferrer">
//               View Project
//             </a>
//           </div>
//         ))}
//       </section>
//       <Footer />
//     </div>
//   );
// }

// export default App;

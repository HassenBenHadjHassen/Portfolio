import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</Router>
	</StrictMode>
);

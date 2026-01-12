import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

export function render(url: string) {
	const helmetContext = {};

	function element() {
		return (
			<HelmetProvider context={helmetContext}>
				<StaticRouter location={url}>
					<App />
				</StaticRouter>
			</HelmetProvider>
		);
	}

	const html = ReactDOMServer.renderToString(element());

	return html;
}

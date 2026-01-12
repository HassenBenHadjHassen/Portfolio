import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const toAbsolute = (p) => path.resolve(__dirname, p);

const routesToPrerender = ["/", "/projects", "/about", "/resume"];

const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");
const render = (await import("./dist/server/prerender.js")).render;

for (const url of routesToPrerender) {
	const appHtml = render(url);

	const html = template.replace(`<!--app-html-->`, appHtml); // Assuming placeholder exists or we inject into root

	// If no placeholder, we might need to regex replace using root div
	// const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
	// But wait, the template in dist/index.html is already built.

	// Let's check index.html content first but assume standard vite app.
	// Standard vite app has <div id="root"></div>.

	const finalHtml = template.replace(
		'<div id="root"></div>',
		`<div id="root">${appHtml}</div>`
	);

	const filePath = `dist${url === "/" ? "/index.html" : `${url}/index.html`}`;
	const dirPath = path.dirname(filePath);

	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
	}

	fs.writeFileSync(toAbsolute(filePath), finalHtml);
	console.log("pre-rendered:", filePath);
}

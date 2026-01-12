import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import gzip from "rollup-plugin-gzip";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
// import { vitePrerenderPlugin } from "vite-prerender-plugin";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const currentDir = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		ViteImageOptimizer(),
		react(),
		// vitePrerenderPlugin({
		// 	prerenderScript: path.resolve(currentDir, "./src/prerender.tsx"),
		// 	additionalPrerenderRoutes: ["/", "/projects", "/about", "/resume"],
		// }),
	],

	build: {
		rollupOptions: {
			plugins: [gzip()],
			output: {
				assetFileNames: (assetInfo) => {
					// Keep PDF files with their original names
					if (
						assetInfo.names &&
						assetInfo.names[0] &&
						assetInfo.names[0].endsWith(".pdf")
					) {
						return "assets/[name][extname]";
					}
					// Default naming for other assets
					return "assets/[name]-[hash][extname]";
				},
			},
		},
	},

	ssr: {
		noExternal: true,
	},

	assetsInclude: ["**/*.pdf"],
});

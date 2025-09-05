import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import gzip from "rollup-plugin-gzip";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [ViteImageOptimizer(), react()],

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

	assetsInclude: ["**/*.pdf"],
});

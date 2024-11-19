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
    },
  },
});

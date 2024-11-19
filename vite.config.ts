import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import gzip from "rollup-plugin-gzip";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      plugins: [gzip()],
    },
  },
});

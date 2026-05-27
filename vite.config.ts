import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio/",
  build: {
    outDir: "build",
  },
  envPrefix: ["VITE_", "REACT_APP_"],
  plugins: [react()],
});

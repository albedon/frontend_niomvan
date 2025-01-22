import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".", 
  build: {
    outDir: "dist",
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "@vitejs/plugin-react"],
  },
});

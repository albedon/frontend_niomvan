import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  root: ".", 
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          // ...existing code...
        }
      },
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "@vitejs/plugin-react"],
  },
  server: {
    // Add this section to handle client-side routing
    historyApiFallback: true,
    // ...existing code...
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});

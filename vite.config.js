import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("@react-pdf-viewer") ||
            id.includes("pdfjs-dist")
          ) {
            return "resume-viewer";
          }

          if (id.includes("@mui") || id.includes("@emotion")) {
            return "mui";
          }

          if (id.includes("react-icons")) {
            return "icons";
          }

          if (id.includes("motion")) {
            return "motion";
          }
        },
      },
    },
  },
});

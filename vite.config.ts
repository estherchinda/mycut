import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
// Remove invalid import for '@tailwindcss/vite'
// TailwindCSS is configured via PostCSS or the official plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

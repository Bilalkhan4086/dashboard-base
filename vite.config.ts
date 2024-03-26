import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

const root = resolve(__dirname, "src");
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: resolve(root),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});

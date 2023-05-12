import { defineConfig } from "vite";
import { join } from "path";
import react from "@vitejs/plugin-react";
import devServer from "./devServer";

export default defineConfig({
  root: process.cwd(),
  base: "./",
  publicDir: "public",
  mode: "development",
  resolve: {
    alias: {
      "@": "../src",
      "@/assets": "../src/assets",
    },
  },
  server: devServer,
  plugins: [react()],
});

import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  
  server: {
    // port: 2000,
    // origin: "http://127.0.0.1:8080",
  },
  headers: {
    "Access-Control-Allow-Origin": "",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

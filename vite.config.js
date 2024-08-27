import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    //setupFiles: "./src/setupTests.js",
    include: ["**/*.test.js"], // Make sure this pattern matches your test files
  },
});

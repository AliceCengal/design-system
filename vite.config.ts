import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/design-system/",
  plugins: [react()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});

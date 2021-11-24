import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
  define: {
    BUILD_TIMESTAMP: new Date(),
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});

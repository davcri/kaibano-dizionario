import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import config from "./package.json";

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
    APP_VERSION: JSON.stringify(config.version),
    DICTIONARY_VERSION: JSON.stringify(config.dictionaryVersion),
    REPOSITORY: JSON.stringify(config.homepage),
  },
});

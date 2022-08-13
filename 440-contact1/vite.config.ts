import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// need to install type for it
// npm install --save-dev @types/node
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // to make it easier for src path
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

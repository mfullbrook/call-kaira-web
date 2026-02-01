import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
  resolve: {
    preserveSymlinks: true,
  },

  server: {
    fs: {
      // Allow reading your sibling package repo
      allow: [
        // app root is always allowed automatically, but being explicit is fine
        path.resolve(__dirname),
        // adjust this to the actual relative path you’re using in package.json
        path.resolve(__dirname, "../frontend-commons"),
      ],
    },
  },

  optimizeDeps: {
    // prevents Vite from prebundling/caching the linked package in a way that hides changes
    exclude: ["@mfullbrook/call-kaira-frontend-commons"],
  },

  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
});

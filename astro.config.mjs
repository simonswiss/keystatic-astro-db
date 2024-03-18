import db from "@astrojs/db";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import keystatic from "@keystatic/astro";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), react(), mdx(), keystatic()],
  vite: {
    plugins: [tailwindcss()]
  },
  output: "hybrid",
  adapter: vercel()
});
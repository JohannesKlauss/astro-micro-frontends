import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), lit()],
  output: "server",
  base: "/buy",
  adapter: node({
    mode: "standalone"
  })
});
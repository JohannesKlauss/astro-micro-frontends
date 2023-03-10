import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  base: "decide",
  integrations: [lit()],
  adapter: node({
    mode: "standalone"
  })
});

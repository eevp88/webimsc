import { defineConfig  } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    imageService: 'passthrough',
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [
    tailwind(),
    icon({
      include: {
        tabler: ['*']
      }
    }),
  ],
});
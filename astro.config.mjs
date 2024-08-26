import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import mkcert from 'vite-plugin-mkcert';
import robotsConfig from './robots-txt.config';
import robotsTxt from "astro-robots-txt"
import sitemap from "@astrojs/sitemap";
import { loadEnv } from 'vite'

const env = loadEnv('', process.cwd(), 'STORYBLOK')

export default defineConfig({
  output: env.STORYBLOK_IS_PREVIEW === 'yes' ? 'server' : 'static',
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      enableFallbackComponent: true,
      components: {
        page: 'storyblok/Page',
        grid: 'storyblok/Grid',
        feature: 'storyblok/Feature',
        teaser: 'storyblok/Teaser',
      },
    }),
    tailwind(),
    sitemap(), robotsTxt(robotsConfig)
  ],
  vite: {
    plugins: [mkcert()],
    server: {
      https: true,
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["ar", "en"]
  },

})

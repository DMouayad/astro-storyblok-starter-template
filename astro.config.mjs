import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import tailwind from '@astrojs/tailwind'
import basicSsl from '@vitejs/plugin-basic-ssl'
import mkcert from 'vite-plugin-mkcert';

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

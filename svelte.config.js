import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      '$lib': 'src/lib',
      '$components': 'src/lib/components',
      '$sections': 'src/lib/sections',
      '$constants': 'src/lib/constants',
      '$i18n': 'src/lib/i18n',
      '$models': 'src/lib/components/models'
    }
  }
};

export default config;

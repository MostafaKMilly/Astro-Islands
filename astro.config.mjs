import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import vue from "@astrojs/vue";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), solidJs(), vue(), svelte()]
});
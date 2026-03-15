// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const site = 'https://duojianghuji.github.io';
const base = '/duojiang-field-notes';

export default defineConfig({
	site,
	base,
	integrations: [mdx(), sitemap()],
});

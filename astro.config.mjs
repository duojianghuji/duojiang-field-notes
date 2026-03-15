// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const site = process.env.SITE_URL ??
	(isGitHubPages
		? 'https://duojianghuji.github.io/duojiang-field-notes/'
		: 'https://fieldnotes.example.com');
const base = process.env.BASE_PATH ?? (isGitHubPages ? '/duojiang-field-notes' : '/');

export default defineConfig({
	site,
	base,
	integrations: [mdx(), sitemap()],
});

# Duojiang Field Notes

This Astro project is configured for static deployment on Cloudflare Pages.

## Local editing

- Add or edit entries in `src/content/travel`, `src/content/micro`, `src/content/reading`, and `src/content/notes`.
- Update the page copy in `src/pages` if you want to change the site structure.
- Run `npm run dev` for local editing.
- Run `npm run build` before pushing.

## Cloudflare Pages deployment

1. Put this project in its own GitHub repository.
2. In Cloudflare Pages, create a new project from that repository.
3. Use `npm run build` as the build command.
4. Use `dist` as the build output directory.
5. Set `NODE_VERSION` to `22.17.1` in the Cloudflare Pages environment settings.
6. Optionally set `SITE_URL` to your final production URL so the sitemap and RSS feed use the correct domain.

## Before publishing publicly

- Replace the starter entries with your own travel notes, photo series, and reading notes.
- Point the production domain at the project in Cloudflare Pages.

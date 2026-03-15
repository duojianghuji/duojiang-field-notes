import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const sectionNames = ['travel', 'micro', 'reading', 'notes'];
	const collections = await Promise.all(sectionNames.map((name) => getCollection(name)));
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const items = collections
		.flat()
		.filter((entry) => !entry.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.map((entry) => ({
			title: entry.data.title,
			description: entry.data.description,
			pubDate: entry.data.pubDate,
			link: `${base}/${entry.collection}/${entry.id}/`,
		}));

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items,
	});
}

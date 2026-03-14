import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const entrySchema = () =>
	z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		draft: z.boolean().default(false),
		featured: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
	});

const travel = defineCollection({
	loader: glob({ base: './src/content/travel', pattern: '**/*.{md,mdx}' }),
	schema: entrySchema,
});

const micro = defineCollection({
	loader: glob({ base: './src/content/micro', pattern: '**/*.{md,mdx}' }),
	schema: entrySchema,
});

const reading = defineCollection({
	loader: glob({ base: './src/content/reading', pattern: '**/*.{md,mdx}' }),
	schema: entrySchema,
});

const notes = defineCollection({
	loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
	schema: entrySchema,
});

export const collections = { travel, micro, reading, notes };

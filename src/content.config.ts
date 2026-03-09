import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    modifiedDate: z.coerce.date().optional(),
    author: z.string().default('CargoIQ Team'),
    category: z.string(),
    tags: z.array(z.string()),
    ogImage: z.string().optional(),
    featured: z.boolean().default(false),
    readingTime: z.string(),
  }),
});

export const collections = { blog };

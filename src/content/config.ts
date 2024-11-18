import { defineCollection, z } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string().optional(),
      cover: image()
        // .refine((img) => img.height < 400, {
        //   message: 'Cover image must be at most 400 pixels height!',
        // })
        .optional(),
      category: z.string().optional(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().default(false),
      sticky: z.number().default(0),
      createdAt: z.coerce
        .date()
        .or(z.string())
        .transform((v) => new Date(v)),
      updatedAt: z.coerce
        .date()
        .or(z.string())
        .optional()
        .transform((v) => (v ? new Date(v) : undefined)),
    }),
})

const categoryCollection = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    }),
})

export const collections = {
  posts: postCollection,
  categories: categoryCollection,
}

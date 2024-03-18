import { defineCollection, z } from "astro:content"

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedDate: z.date(),
  }),
})

export const collections = {
  posts: postsCollection,
}

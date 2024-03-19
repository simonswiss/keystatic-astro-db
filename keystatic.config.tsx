import { collection, config, fields } from "@keystatic/core"

export default config({
  storage: {
    kind: process.env.NODE_ENV === "production" ? "cloud" : "local",
  },
  cloud: {
    project: "simonswiss/astro-db-test",
  },
  collections: {
    posts: collection({
      label: "Posts",
      path: "src/content/posts/*",
      format: {
        contentField: "content",
      },
      slugField: "title",
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        publishedDate: fields.date({ label: "Published Date" }),
        content: fields.mdx({ label: "Content" }),
      },
    }),
  },
})

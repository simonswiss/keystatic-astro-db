import { collection, config, fields } from "@keystatic/core"

export default config({
  storage: {
    kind: "local",
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

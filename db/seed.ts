import { Like, db } from "astro:db"

export default async function seed() {
  await db
    .insert(Like)
    .values([
      { postSlug: "my-first-blog-post" },
      { postSlug: "my-second-blog-post" },
      { postSlug: "my-first-blog-post" },
      { postSlug: "my-first-blog-post" },
    ])
}

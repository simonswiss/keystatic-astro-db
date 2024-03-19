import { Like, db } from "astro:db"

export default async function seed() {
  await db.insert(Like).values([
    { postSlug: "my-first-blog-post", likesCount: 3 },
    { postSlug: "my-second-blog-post", likesCount: 1 },
  ])
}

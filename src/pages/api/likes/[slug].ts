import { APIRoute } from "astro"
import { column, db, eq, Like, sql } from "astro:db"

export const prerender = false

// GET likes
export const GET: APIRoute = async ({ params }) => {
  const { slug } = params
  const data = await db.select().from(Like).where(eq(Like.postSlug, slug))
  return new Response(JSON.stringify(data[0] || { likesCount: 0 }), {
    status: 200,
  })
}

// Add like
export const POST: APIRoute = async ({ params }) => {
  const { slug } = params
  try {
    await db
      .insert(Like)
      .values({ postSlug: slug, likesCount: 1 })
      .onConflictDoUpdate({
        target: Like.postSlug,
        set: { likesCount: sql`${Like.likesCount} + 1` },
      })
    return new Response(null, { status: 200 })
  } catch (e) {
    throw new Error(e)
  }
}

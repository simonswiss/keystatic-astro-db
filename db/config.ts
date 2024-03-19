import { column, defineDb, defineTable } from "astro:db"

const Like = defineTable({
  columns: {
    postSlug: column.text({ primaryKey: true }),
    likesCount: column.number(),
  },
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Like,
  },
})

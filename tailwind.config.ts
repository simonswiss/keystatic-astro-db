import { type Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

export default {
  content: ["./src/**/*.{astro,ts,tsx,js,jsx,md,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
} satisfies Config

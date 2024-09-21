import { defineConfig } from "drizzle-kit"

export default defineConfig({
     schema: "./src/database/drizzle/schema.ts",
     out: "./src/database/drizzle/migrations",
     dialect: "mysql",
     dbCredentials: {
          url: process.env.DATABASE_URL as string
     },
     verbose: true,
     strict: true
})
import { boolean, int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core"
export const UserTable = mysqlTable("users", {
     id: int('id').primaryKey().autoincrement(),
     firstname: varchar('firstname', {length: 255}).notNull(),
     lastname: varchar('lastname', {length: 255}).notNull(),
     email: varchar('email', {length: 255}).notNull().unique(),
     password: varchar('password', {length: 255}).notNull(),
     profilePicture: varchar('profile_picture', {length: 255}).notNull(),
     email_verified: boolean('email_verified').notNull(),
     email_verification_token: varchar('email_verification_token', {length: 255}).notNull(),
     password_reset_token: varchar('password_reset_token', {length: 255}).notNull(),
     email_verified_at: timestamp('email_verified_at').defaultNow(),
     createdAt: timestamp('created_at').defaultNow(),
     updatedAt: timestamp('updated_at').defaultNow()
})
import { varchar, pgTable, integer, timestamp } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: integer().primaryKey().notNull().generatedAlwaysAsIdentity(),
  email: varchar().notNull().unique(),
  password: varchar().notNull(),
  createdAt: timestamp().defaultNow(),
  role: varchar().notNull(),
});

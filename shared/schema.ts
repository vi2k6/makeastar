import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const wishes = pgTable("wishes", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertWishSchema = createInsertSchema(wishes, {
  content: z.string().min(1, "Wish cannot be empty").max(200, "Wish is too long"),
}).pick({
  content: true,
});

export type Wish = typeof wishes.$inferSelect;
export type InsertWish = z.infer<typeof insertWishSchema>;

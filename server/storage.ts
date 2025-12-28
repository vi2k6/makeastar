import { db } from "./db";
import { wishes, type InsertWish, type Wish } from "@shared/schema";

export interface IStorage {
  createWish(wish: InsertWish): Promise<Wish>;
}

export class DatabaseStorage implements IStorage {
  async createWish(insertWish: InsertWish): Promise<Wish> {
    const [wish] = await db.insert(wishes).values(insertWish).returning();
    return wish;
  }
}

export const storage = new DatabaseStorage();

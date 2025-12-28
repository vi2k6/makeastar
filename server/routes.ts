import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { wishes } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed default wishes if empty
  try {
    const existingWishes = await db.select().from(wishes).limit(1);
    if (existingWishes.length === 0) {
      console.log("Seeding database with initial wishes...");
      await storage.createWish({ content: "I wish for peace on Earth 🌍" });
      await storage.createWish({ content: "I wish for a white Christmas ❄️" });
      await storage.createWish({ content: "I wish for everyone to be happy! ✨" });
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  }

  app.post(api.wishes.create.path, async (req, res) => {
    try {
      const input = api.wishes.create.input.parse(req.body);
      const wish = await storage.createWish(input);
      res.status(201).json(wish);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}

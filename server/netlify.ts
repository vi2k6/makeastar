import express from "express";
import serverless from "serverless-http";
import { registerRoutes } from "./routes";
import { createServer } from "http";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const httpServer = createServer(app);

// Use a self-invoking function to register routes since it's async
(async () => {
  await registerRoutes(httpServer, app);
})();

export const handler = serverless(app);

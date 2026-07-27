import express from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./config/env";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// API Welcome
app.get(`${env.API_PREFIX}`, (req, res) => {
  res.json({
    success: true,
    message: "🚀 Welcome to Kurox Backend API v1",
  });
});

// Register all routes
app.use(routes);

export default app;
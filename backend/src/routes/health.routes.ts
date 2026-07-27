import { Router } from "express";
import { env } from "../config/env";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: env.NODE_ENV,
  });
});

export default router;
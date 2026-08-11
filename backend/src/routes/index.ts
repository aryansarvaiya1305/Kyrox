import { Router } from "express";
import healthRoutes from "./health.routes";
import authRoutes from "./auth.routes";
import projectRoutes from "./project.routes";

const router = Router();
commit
router.use("/health", healthRoutes);
router.use("/auth", authRoutes);
router.use("/projects", projectRoutes);

export default router;
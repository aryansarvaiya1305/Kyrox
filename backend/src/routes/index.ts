import { Router } from "express";

import healthRoutes from "./health.routes";
import authRoutes from "./auth.routes";
import projectRoutes from "./project.routes";
import deploymentRoutes from "./deployment.routes";

const router = Router();

router.use("/health", healthRoutes);

router.use("/auth", authRoutes);

router.use("/projects", projectRoutes);

router.use("/projects", deploymentRoutes);

export default router;
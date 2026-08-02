import { Router } from "express";
import {
  create,
  getAll,
} from "../controllers/project.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

// Get All Projects
router.get("/", authenticate, getAll);

// Create Project
router.post("/", authenticate, create);

export default router;
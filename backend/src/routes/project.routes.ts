import { Router } from "express";
import {
  create,
  getAll,
  getOne,
} from "../controllers/project.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

// ==============================
// Get All Projects
// ==============================
router.get("/", authenticate, getAll);

// ==============================
// Get Single Project
// ==============================
router.get("/:id", authenticate, getOne);

// ==============================
// Create Project
// ==============================
router.post("/", authenticate, create);

export default router;
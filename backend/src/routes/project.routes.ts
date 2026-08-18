import { Router } from "express";

import {
  create,
  getAll,
  getOne,
  update,
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

// ==============================
// Update Project
// ==============================

router.put("/:id", authenticate, update);

export default router;
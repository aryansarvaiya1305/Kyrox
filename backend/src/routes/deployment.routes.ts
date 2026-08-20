import { Router } from "express";

import {
  create,
  getAll,
  getOne,
  update,
  remove,
} from "../controllers/deployment.controller";

import { authenticate } from "../middleware/auth.middleware";

const router = Router();

// Get All Deployments
router.get(
  "/:projectId/deployments",
  authenticate,
  getAll
);

// Get Single Deployment
router.get(
  "/:projectId/deployments/:id",
  authenticate,
  getOne
);

// Create Deployment
router.post(
  "/:projectId/deployments",
  authenticate,
  create
);

// Update Deployment
router.put(
  "/:projectId/deployments/:id",
  authenticate,
  update
);

// Delete Deployment
router.delete(
  "/:projectId/deployments/:id",
  authenticate,
  remove
);

export default router;
import { Request, Response } from "express";

import {
  createDeployment,
  getDeployments,
  getDeploymentById,
  updateDeployment,
  deleteDeployment,
} from "../services/deployment.service";

// ===============================
// Create Deployment
// ===============================
export const create = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.projectId as string;

    const deployment = await createDeployment({
      projectId,
      repository: req.body.repository,
      branch: req.body.branch,
    });

    return res.status(201).json({
      success: true,
      message: "Deployment created successfully",
      data: deployment,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to create deployment",
    });
  }
};

// ===============================
// Get All Deployments
// ===============================
export const getAll = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.projectId as string;

    const deployments = await getDeployments(projectId);

    return res.status(200).json({
      success: true,
      data: deployments,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch deployments",
    });
  }
};

// ===============================
// Get Single Deployment
// ===============================
export const getOne = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.projectId as string;
    const deploymentId = req.params.id as string;

    const deployment = await getDeploymentById(
      deploymentId,
      projectId
    );

    if (!deployment) {
      return res.status(404).json({
        success: false,
        message: "Deployment not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: deployment,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch deployment",
    });
  }
};

// ===============================
// Update Deployment
// ===============================
export const update = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.projectId as string;
    const deploymentId = req.params.id as string;

    const deployment = await updateDeployment(
      deploymentId,
      projectId,
      req.body
    );

    if (!deployment) {
      return res.status(404).json({
        success: false,
        message: "Deployment not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Deployment updated successfully",
      data: deployment,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to update deployment",
    });
  }
};

// ===============================
// Delete Deployment
// ===============================
export const remove = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.projectId as string;
    const deploymentId = req.params.id as string;

    const deployment = await deleteDeployment(
      deploymentId,
      projectId
    );

    if (!deployment) {
      return res.status(404).json({
        success: false,
        message: "Deployment not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Deployment deleted successfully",
      data: deployment,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete deployment",
    });
  }
};
import { Request, Response } from "express";

import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../services/project.service";

// ===============================
// Create Project
// ===============================
export const create = async (req: Request, res: Response) => {
  try {
    const project = await createProject({
      ...req.body,
      userId: req.user.id,
    });

    return res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to create project",
    });
  }
};

// ===============================
// Get All Projects
// ===============================
export const getAll = async (req: Request, res: Response) => {
  try {
    const projects = await getProjects(req.user.id);

    return res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
};

// ===============================
// Get Single Project
// ===============================
export const getOne = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.id as string;

    const project = await getProjectById(
      projectId,
      req.user.id
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch project",
    });
  }
};

// ===============================
// Update Project
// ===============================
export const update = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.id as string;

    const project = await updateProject(
      projectId,
      req.user.id,
      req.body
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to update project",
    });
  }
};

// ===============================
// Delete Project
// ===============================
export const remove = async (req: Request, res: Response) => {
  try {
    const projectId = req.params.id as string;

    const project = await deleteProject(
      projectId,
      req.user.id
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      data: project,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete project",
    });
  }
};
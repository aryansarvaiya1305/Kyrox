import { Request, Response } from "express";
import { createProject, getProjects } from "../services/project.service";

// Create Project
export const create = async (req: Request, res: Response) => {
  try {
    const project = await createProject({
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create project",
    });
  }
};

// Get All Projects
export const getAll = async (req: Request, res: Response) => {
  try {
    const projects = await getProjects(req.user.id);

    res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
};
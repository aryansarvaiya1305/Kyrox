import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { createProject } from "../services/project.service";

export const create = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { name, description, repository, framework } = req.body;

    const project = await createProject({
      name,
      description,
      repository,
      framework,
      userId: req.user!.userId,
    });

    return res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create project",
    });
  }
};
import prisma from "../config/prisma";

interface CreateProjectInput {
  name: string;
  description?: string;
  repository?: string;
  framework?: string;
  userId: string;
}

// Create Project
export const createProject = async (data: CreateProjectInput) => {
  return prisma.project.create({
    data: {
      name: data.name,
      description: data.description,
      repository: data.repository,
      framework: data.framework,
      userId: data.userId,
    },
  });
};

// Get All Projects
export const getProjects = async (userId: string) => {
  return prisma.project.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};
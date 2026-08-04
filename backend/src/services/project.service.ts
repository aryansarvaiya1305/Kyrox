import prisma from "../config/prisma";

// ===============================
// Create Project
// ===============================
interface CreateProjectInput {
  name: string;
  description?: string;
  repository?: string;
  framework?: string;
  userId: string;
}

export const createProject = async (
  data: CreateProjectInput
) => {
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

// ===============================
// Get All Projects
// ===============================
export const getProjects = async (
  userId: string
) => {
  return prisma.project.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

// ===============================
// Get Single Project
// ===============================
export const getProjectById = async (
  projectId: string,
  userId: string
) => {
  return prisma.project.findFirst({
    where: {
      id: projectId,
      userId,
    },
  });
};
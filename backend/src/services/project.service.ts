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
  const project = await prisma.project.create({
    data: {
      name: data.name,
      description: data.description,
      repository: data.repository,
      framework: data.framework,
      userId: data.userId,
    },
  });

  return project;
};

// Get All Projects of Logged-in User
export const getProjects = async (userId: string) => {
  const projects = await prisma.project.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return projects;
};
import prisma from "../config/prisma";

interface CreateProjectInput {
  name: string;
  description?: string;
  repository?: string;
  framework?: string;
  userId: string;
}

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
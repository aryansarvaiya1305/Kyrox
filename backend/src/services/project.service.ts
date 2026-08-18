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

// ===============================
// Update Project
// ===============================

interface UpdateProjectInput {
  name?: string;
  description?: string;
  repository?: string;
  framework?: string;
}

export const updateProject = async (
  projectId: string,
  userId: string,
  data: UpdateProjectInput
) => {
  const project = await prisma.project.findFirst({
    where: {
      id: projectId,
      userId,
    },
  });

  if (!project) {
    return null;
  }

  return prisma.project.update({
    where: {
      id: projectId,
    },
    data: {
      name: data.name,
      description: data.description,
      repository: data.repository,
      framework: data.framework,
    },
  });
};

// ===============================
// Delete Project
// ===============================

export const deleteProject = async (
  projectId: string,
  userId: string
) => {
  const project = await prisma.project.findFirst({
    where: {
      id: projectId,
      userId,
    },
  });

  if (!project) {
    return null;
  }

  return prisma.project.delete({
    where: {
      id: projectId,
    },
  });
};
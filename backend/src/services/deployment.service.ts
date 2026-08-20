import prisma from "../config/prisma";

// ===============================
// Create Deployment
// ===============================

interface CreateDeploymentInput {
  projectId: string;
  repository?: string;
  branch?: string;
}

export const createDeployment = async (
  data: CreateDeploymentInput
) => {
  return prisma.deployment.create({
    data: {
      projectId: data.projectId,
      repository: data.repository,
      branch: data.branch ?? "main",
    },
  });
};

// ===============================
// Get All Deployments
// ===============================

export const getDeployments = async (
  projectId: string
) => {
  return prisma.deployment.findMany({
    where: {
      projectId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

// ===============================
// Get Single Deployment
// ===============================

export const getDeploymentById = async (
  deploymentId: string,
  projectId: string
) => {
  return prisma.deployment.findFirst({
    where: {
      id: deploymentId,
      projectId,
    },
  });
};

// ===============================
// Update Deployment
// ===============================

interface UpdateDeploymentInput {
  status?: string;
  url?: string;
  repository?: string;
  branch?: string;
}

export const updateDeployment = async (
  deploymentId: string,
  projectId: string,
  data: UpdateDeploymentInput
) => {
  const deployment = await prisma.deployment.findFirst({
    where: {
      id: deploymentId,
      projectId,
    },
  });

  if (!deployment) {
    return null;
  }

  return prisma.deployment.update({
    where: {
      id: deploymentId,
    },
    data: {
      status: data.status,
      url: data.url,
      repository: data.repository,
      branch: data.branch,
    },
  });
};

// ===============================
// Delete Deployment
// ===============================

export const deleteDeployment = async (
  deploymentId: string,
  projectId: string
) => {
  const deployment = await prisma.deployment.findFirst({
    where: {
      id: deploymentId,
      projectId,
    },
  });

  if (!deployment) {
    return null;
  }

  return prisma.deployment.delete({
    where: {
      id: deploymentId,
    },
  });
};
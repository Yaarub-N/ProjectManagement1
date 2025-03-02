import apiClient from "./ApiClient";

export const getProjects = async () => {
  try {
    const response = await apiClient.get("/projects");
    return response.data;
  } catch (error) {
    console.error("API error - getProjects:", error);
    return [];
  }
};

export const getProjectById = async (projectNumber) => {
  try {
    const response = await apiClient.get(`/projects/${projectNumber}`);
    return response.data;
  } catch (error) {
    console.error(`API error - getProjectById (${projectNumber}):`, error);
    return null;
  }
};

export const createProject = async (project) => {
  try {
    const response = await apiClient.post("/projects", project);
    return response.data;
  } catch (error) {
    console.error("API error - createProject:", error);
    throw error;
  }
};

export const updateProject = async (projectNumber, project) => {
  try {
    const response = await apiClient.put(`/projects/${projectNumber}`, project);
    return response.data;
  } catch (error) {
    console.error(`API error - updateProject (${projectNumber}):`, error);
    return null;
  }
};

export const deleteProject = async (projectNumber) => {
  try {
    await apiClient.delete(`/projects/${projectNumber}`);
    return true;
  } catch (error) {
    console.error(`API error - deleteProject (${projectNumber}):`, error);
    return false;
  }
};

export const getServices = async () => {
  try {
    const response = await apiClient.get("/services");
    return response.data;
  } catch (error) {
    console.error("API error - getServices:", error);
    return [];
  }
};
export const getCustomers = async () => {
  try {
    const response = await apiClient.get("/customers");
    return response.data;
  } catch (error) {
    console.error("API error - getCustomers:", error);
    return [];
  }
};

export const getEmployees = async () => {
  try {
    const response = await apiClient.get("/employees/projectManagers");
    return response.data;
  } catch (error) {
    console.error("API error - getEmployees:", error);
    return [];
  }
};

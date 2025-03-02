import apiClient from "./apiClient";

export const getEmployees = async () => {
  try {
    const response = await apiClient.get("/employees");
    return response.data;
  } catch (error) {
    console.error("API error - getEmployees:", error);
    return [];
  }
};

export const getEmployeeById = async (employeeId) => {
  try {
    const response = await apiClient.get(`/employees/${employeeId}`);
    return response.data;
  } catch (error) {
    console.error(`API error - getEmployeeById (${employeeId}):`, error);
    return null;
  }
};

export const createEmployee = async (employee) => {
  try {
    const response = await apiClient.post("/employees", employee);
    return response.data;
  } catch (error) {
    console.error("API error - createEmployee:", error);
    return null;
  }
};

export const updateEmployee = async (employeeId, employee) => {
  try {
    const response = await apiClient.put(`/employees/${employeeId}`, employee);
    return response.data;
  } catch (error) {
    console.error(`API error - updateEmployee (${employeeId}):`, error);
    return null;
  }
};

export const deleteEmployee = async (employeeId) => {
  try {
    await apiClient.delete(`/employees/${employeeId}`);
    return true;
  } catch (error) {
    console.error(`API error - deleteEmployee (${employeeId}):`, error);
    return false;
  }
};

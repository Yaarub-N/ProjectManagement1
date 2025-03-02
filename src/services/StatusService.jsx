import axios from "axios";

const API_URL = "https://localhost:7007/api/statuses";

export const getStatuses = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("message");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(" API error - getStatuses:", error);
    return [];
  }
};

export const getStatusById = async (statusId) => {
  try {
    const response = await axios.get(`${API_URL}/${statusId}`);
    return response.data;
  } catch (error) {
    console.error(` API error - getStatusById (${statusId}):`, error);
    return null;
  }
};

export const createStatus = async (status) => {
  try {
    const response = await axios.post(API_URL, status, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error(" API error - createStatus:", error);
    return null;
  }
};

export const updateStatus = async (statusId, status) => {
  try {
    const response = await axios.put(`${API_URL}/${statusId}`, status, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error(` API error - updateStatus (${statusId}):`, error);
    return null;
  }
};

export const deleteStatus = async (statusId) => {
  try {
    await axios.delete(`${API_URL}/${statusId}`);
    return true;
  } catch (error) {
    console.error(` API error - deleteStatus (${statusId}):`, error);
    return false;
  }
};

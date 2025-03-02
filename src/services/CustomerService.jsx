import apiClient from "./apiClient";

export const getCustomers = async () => {
  try {
    const response = await apiClient.get("/customers");
    return response.data;
  } catch (error) {
    console.error("API error - getCustomers:", error);
    return [];
  }
};

export const getCustomerById = async (customerId) => {
  try {
    const response = await apiClient.get(`/customers/${customerId}`);
    return response.data;
  } catch (error) {
    console.error(`API error - getCustomerById (${customerId}):`, error);
    return null;
  }
};

export const createCustomer = async (customer) => {
  try {
    const response = await apiClient.post("/customers", customer);
    return response.data;
  } catch (error) {
    console.error("API error - createCustomer:", error);
    throw error;
  }
};

export const updateCustomer = async (customerId, customerData) => {
  try {
    const response = await apiClient.put(
      `/customers/${customerId}`,
      customerData
    );
    return response.data;
  } catch (error) {
    console.error(`API error - updateCustomer (${customerId}):`, error);
    return null;
  }
};

export const deleteCustomer = async (customerId) => {
  try {
    await apiClient.delete(`/customers/${customerId}`);
    return true;
  } catch (error) {
    console.error(`API error - deleteCustomer (${customerId}):`, error);
    return false;
  }
};

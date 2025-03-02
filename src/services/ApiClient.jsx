import axios from "axios";

const API_URL = "https://localhost:7007/api";
//fick hjälp av Chat GPT4o for att komma igång och kunna använda axios
// Skapa en instans av Axios

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;

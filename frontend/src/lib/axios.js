import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? `${import.meta.env.VITE_APP_SERVER_URL}/api` : "/api",
  maxContentLength: Infinity,
  maxBodyLength: Infinity,
  withCredentials: true,
});

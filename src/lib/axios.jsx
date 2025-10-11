import axios from "axios";

axios.defaults.withCredentials = true;
export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api",
  // baseURL:"http://localhost:5000/api",
  baseURL:"https://eduprism-backend-chat-service.onrender.com/api",
  withCredentials: true,
});
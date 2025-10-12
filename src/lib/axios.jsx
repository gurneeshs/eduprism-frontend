import axios from "axios";
import { BASE_URL } from "../utils/helper";


axios.defaults.withCredentials = true;
export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api",
  baseURL:"http://localhost:5000/api",
  // baseURL:BASE_URL,
  withCredentials: true,
});
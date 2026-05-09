import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://mern-chat-app-swart.vercel.app/api" : "/api",
  withCredentials: true,
});

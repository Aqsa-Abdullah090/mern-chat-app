import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mern-chat-app-gowr.vercel.app/api",
  withCredentials: true,
});

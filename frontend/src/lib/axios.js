import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mern-chat-app-ynkz.vercel.app/api",
  withCredentials: true,
});

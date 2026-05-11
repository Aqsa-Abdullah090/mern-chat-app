import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// 1. Basic Middlewares
app.use(express.json({ limit: "10mb" })); // Limit badha di hai images ke liye
app.use(cookieParser());

// 2. Updated CORS Configuration
const allowedOrigin = 'https://mern-chat-app-omega-puce.vercel.app';

app.use(cors({
  origin: allowedOrigin,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"]
}));

// 3. Manual Preflight Fix (Critical for Vercel)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  // OPTIONS request ko turant 200 OK return karo
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

// 4. Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// 6. DB Connection & Server Start
// Note: Vercel standard server.listen ignore kar deta hai, 
// lekin export default app; zaroori hai agar aap serverless use kar rahe hain.
server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
  connectDB();
});

export default app; // Vercel compatibility ke liye
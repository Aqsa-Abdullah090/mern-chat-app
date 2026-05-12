import mongoose from "mongoose";
let isConnected = false
export const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing DB connection");
    return;
  }
  try {
    // Fixed: Added quotes around the connection string
    const conn = await mongoose.connect("mongodb+srv://aqsaabdullah38403_db_user:ePyDE7MwJXZgwgvf@cluster0.vqjeroh.mongodb.net/chat_db?retryWrites=true&w=majority", {
      serverSelectionTimeoutMS: 5000, // fail fast instead of hanging 10s
      socketTimeoutMS: 45000,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
    // Exit process if DB connection fails
    process.exit(1);
  }
};
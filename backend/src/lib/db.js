import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Fixed: Added quotes around the connection string
    const conn = await mongoose.connect("mongodb+srv://aqsaabdullah38403_db_user:ePyDE7MwJXZgwgvf@cluster0.vqjeroh.mongodb.net/chat_db?retryWrites=true&w=majority");
    
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
    // Exit process if DB connection fails
    process.exit(1);
  }
};
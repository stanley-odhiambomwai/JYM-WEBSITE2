
import mongoose from "mongoose";


const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;
  if (!mongoURI) {
    console.error("Error: MONGO_URI is not defined in the environment variables.");
    process.exit(1);
  }

 
  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to DB");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Mongoose connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
  });

 
  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("Mongoose connection closed due to app termination");
    process.exit(0);
  });

  try {
   
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
export default connectDB;

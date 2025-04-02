import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./Config/Database.js";
import cookieParser from "cookie-parser";
import authRoutes from "./Routes/Auth.js"; 
import activitiesRoutes from "./Routes/Activites.js";
import progressRoutes from "./Routes/Progress.js";
import communityRoutes from "./Routes/Community.js";

const app = express();

const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "https://jym-website2-1.onrender.com",
   credentials: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/activities", activitiesRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/community", communityRoutes);

app.get("/api/test", (req, res) => {
  res.send("JYM Backend API is running.....");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


import express from "express";
import { getProgress } from "../Controllers/Progress.js";

const router = express.Router();

router.get("/", getProgress);

export default router;

import express from "express";
import { getActivities } from "../Controllers/Activities.js";

const router = express.Router();

router.get("/", getActivities);

export default router;

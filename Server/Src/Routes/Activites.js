import express from "express";
import { getActivities } from "../Controllers/ActivitiesController.js";

const router = express.Router();

router.get("/", getActivities);

export default router;

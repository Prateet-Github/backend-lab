import { Router } from "express";
import { streamEvents } from "../controllers/event.controller.js";

const router = Router();

router.get("/events", streamEvents);

export default router;
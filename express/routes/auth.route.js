import { Router } from "express";
import {register, login, me } from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { loginLimiter } from "../middlewares/rateLimiter.js";

const router = Router();

router.post("/register", register);
router.post("/login", loginLimiter, login);
router.get("/me", protect, me);

export default router;
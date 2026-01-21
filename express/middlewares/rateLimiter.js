import rateLimit from "express-rate-limit";

export const loginLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 min
  max: 5,                  // 5 attempts
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many login attempts. Try again later."
});
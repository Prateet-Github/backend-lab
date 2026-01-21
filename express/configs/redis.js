import env from "./env.js";
import { createClient } from "redis";

export const redisClient = createClient({
  url: env.REDIS_URL
});

redisClient.on("connect", () => {
  console.log("Redis connection established");
});

redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});

export const connectRedis = async () => {
  if (redisClient.isOpen) {
    console.log("Redis already connected");
    return;
  }

  await redisClient.connect();
};
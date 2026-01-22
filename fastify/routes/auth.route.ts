import type  { FastifyInstance } from "fastify";
import { loginSchema } from "../scehma/auth.schema.js";
import { login } from "../controllers/auth.controller.ts";

export const authRoute = async (app: FastifyInstance) => {
  app.post('/login', { schema: { body: loginSchema } }, login);
};
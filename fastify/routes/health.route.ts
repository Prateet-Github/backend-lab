import type { FastifyInstance } from 'fastify';

export const healthRoute = async (app: FastifyInstance) => {
  app.get('/', async (_request, _reply) => {
    return { status: 'ok', message: 'Service is healthy' };
  });
};
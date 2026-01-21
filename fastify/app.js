import Fastify from 'fastify';
import { healthRoute } from './routes/health.route.ts';

const isDev = process.env.NODE_ENV !== 'production';

export const buildApp = () => {
  const app = Fastify({
    logger: isDev
      ? {
          transport: {
            target: 'pino-pretty',
            options: {
              translateTime: 'HH:MM:ss',
              colorize: true,
              ignore: 'pid,hostname',
            },
          },
        }
      : true,
  });

  app.register(healthRoute, {
    prefix: '/api/health',
  });

  return app;
};
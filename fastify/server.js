import { buildApp } from './app.js';
import env from './configs/env.js';

const startServer = async () => {
  const app = buildApp();

  try {
    app.listen({ port: env.PORT, host: '0.0.0.0' });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

startServer();
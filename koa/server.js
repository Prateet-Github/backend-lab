import app from './app.js';
import env from './config/env.js';

const startServer = async () => {
  try {
    app.listen(3000, () => {
      console.log(`Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
    });
  } catch (error) {
    console.error('Server startup error:', error);
    process.exit(1);
  }
};

startServer();
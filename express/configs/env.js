import dotenv from 'dotenv';

dotenv.config();

const env = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  REDIS_URL: process.env.REDIS_URL,
  WEBSOCKET_PORT: process.env.WEBSOCKET_PORT
};

const requiredVars = [
  'PORT', 
  'NODE_ENV',
  'MONGODB_URI',
  'JWT_SECRET',
  'REDIS_URL',
  'WEBSOCKET_PORT'
];

requiredVars.forEach((key) => {
  if (!env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

export default env;
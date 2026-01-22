import dotenv from 'dotenv';

dotenv.config();

const env: { [key: string]: string | undefined } = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
};

const requiredVars = [
  'PORT',
  'NODE_ENV',
];

requiredVars.forEach((key) => {
  if (!env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

export default env;
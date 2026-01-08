import express from 'express';
import env from '../configs/env.js';

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    service: 'Backend Lab Server', 
    environment: env.NODE_ENV || 'development',
    uptime: process.uptime()
  });
});

export default router;
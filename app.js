import express from 'express';
import healthRoute from './routes/health.route.js';

const app = express();

app.use('/api', healthRoute);

export default app;

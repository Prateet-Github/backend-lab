import express from 'express';
import healthRoute from './routes/health.route.js';
// import authRoute from './routes/auth.route.js';
import sseRoute from './routes/sse.route.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/health', healthRoute);
// app.use('/api/auth', authRoute);
app.use('/api/sse', sseRoute);

export default app;

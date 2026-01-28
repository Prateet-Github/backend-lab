import Koa from 'koa';
import healthRoute from './routes/health.route.js';

const app = new Koa();

app.use(healthRoute.routes())
   .use(healthRoute.allowedMethods());

export default app;
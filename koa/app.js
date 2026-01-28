import Koa from 'koa';
import healthRoute from './routes/health.route.js';
import authRoute from './routes/auth.routes.js';
import bodyParser from 'koa-bodyparser';

const app = new Koa();

app.use(bodyParser());

app.use(healthRoute.routes())
   .use(healthRoute.allowedMethods());

app.use(authRoute.routes())
   .use(authRoute.allowedMethods());   

export default app;
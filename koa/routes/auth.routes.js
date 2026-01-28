import Router from '@koa/router';
import * as authRoutes from '../controllers/auth.controller.js';

const router = new Router({
  prefix: '/api/auth',
});

router.post('/login', authRoutes.login);

export default router;
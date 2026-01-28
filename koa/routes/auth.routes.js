import Router from '@koa/router';
import * as authRoutes from '../controllers/auth.controller.js';

const router = new Router({
  prefix: '/api/auth',
});

router.post('/login', authRoutes.login);
// router.post('/register', authRoutes.register);

export default router;
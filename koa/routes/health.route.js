import Router from '@koa/router';

const router = new Router({
  prefix: '/api/health',
});

router.get('/', async (ctx) => {
  ctx.body = { status: 'OK', timestamp: new Date().toISOString() };
});

export default router;
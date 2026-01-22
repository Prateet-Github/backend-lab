import type { FastifyRequest, FastifyReply } from 'fastify';

interface LoginBody {
  username: string;
  password: string;
}

export const login = async (
  request: FastifyRequest<{ Body: LoginBody }>,
  reply: FastifyReply
) => {
  const { username, password } = request.body;

  // fake logic for demo
  if (username === 'test' && password === '123456') {
    return { message: 'Login successful' };
  }

  reply.status(401).send({ error: 'Invalid credentials' });
};
export const login = async (ctx) => {

  const { email, password } = ctx.request.body;  

  try {

      if (!email || !password) {
    ctx.status = 400;
    ctx.body = { message: 'Email and password are required' };
    return;
  }

     const user = {
    id: 1,
    email: 'test@mail.com',
    password: '123456'
  };

  if (email !== user.email || password !== user.password) {
    ctx.status = 401;
    ctx.body = { message: 'Invalid credentials' };
    return;
  }

  ctx.status = 200;
  ctx.body = {
    message: 'Login successful',
    userId: user.id
  };

    
  } catch (error) {
    console.error('Login error:', error);
    ctx.status = 500;
    ctx.body = { message: 'Internal server error' };
  }
};
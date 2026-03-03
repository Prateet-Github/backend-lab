import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (_req, res) => {
  res.send('Hello from API Gateway!');
});

app.listen(PORT, () => {
  console.log(`API Gateway is running on http://localhost:${PORT}`);
});
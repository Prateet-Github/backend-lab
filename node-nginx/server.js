import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello from Node.js  server!');
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
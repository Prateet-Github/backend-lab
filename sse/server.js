import express from 'express';

const app = express();

const PORT = 5001;

app.get('/', (_req, res) => {
  res.send('Hello from the server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
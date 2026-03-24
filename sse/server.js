import express from 'express';

const app = express();
const PORT = 5001;

app.get('/', (_req, res) => {
  res.send('Hello from the server!');
});

app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  res.write(`data: Connected to SSE\n\n`);

  const interval = setInterval(() => {
    const data = {
      time: new Date().toISOString(),
    };

    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 2000);

  req.on('close', () => {
    clearInterval(interval);
    res.end();
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
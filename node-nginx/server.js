import express from 'express';

const app = express();

app.get('/', (_req, res) => {
res.send(`Hello from instance ${process.env.INSTANCE_ID || 'unknown'}`);
});

const PORT = 5001;
const HOST = '0.0.0.0';

app.listen(PORT,HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
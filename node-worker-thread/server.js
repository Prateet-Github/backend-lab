import express from 'express';
import { Worker } from 'worker_threads';

const app = express();

const PORT = 5002;
const HOST = '0.0.0.0';

app.get('/non-blocking', (_req, res) => {
res.status(200).send("This is non-blocking.")
});

app.get('/blocking', (_req, res) => {

  const worker = new Worker('./worker.js');

  worker.on('message', (data) => {
    res.status(200).send(`Result is ${data}`);
  });

  worker.on('error', (err) => {
    console.error(err);
    res.status(500).send('An error occurred in the worker thread.');
  });
});

app.listen(PORT,HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
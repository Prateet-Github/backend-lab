import express from 'express';
import { Worker } from 'worker_threads';

const app = express();

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

const PORT = 5001;
const HOST = '0.0.0.0';

app.listen(PORT,HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
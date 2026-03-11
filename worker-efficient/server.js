import express from 'express';
import { Worker } from 'worker_threads';

const app = express();
const PORT = 5001;
const HOST = '0.0.0.0';
export const THREADS = 4;

const createWorker = () => {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js',{
      workerData: {
        thread_count: THREADS
      }
    });

    worker.on('message', (data) => {
      resolve(data);
    });

    worker.on('error', (err) => {
      console.error(err);
      reject(err);
    });
  });
}

app.get('/non-blocking', (_req, res) => {
res.status(200).send("This is non-blocking.")
});

// This endpoint will create multiple worker threads to perform a CPU-intensive task without blocking the main event loop.
app.get('/blocking', async (_req, res) => {
  const workerPromises = [];

  for (let i = 0; i < THREADS; i++) {
    workerPromises.push(createWorker());
  }

  const threadResults = await Promise.all(workerPromises);

  const total = threadResults.reduce((sum, value) => sum + value, 0);

  res.status(200).send(`Efficient result is ${total}`);
});

app.listen(PORT,HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

import express from 'express';
import { Worker } from 'worker_threads';

const app = express();
const PORT = 5001;
const HOST = '0.0.0.0';
const THREADS = 4;

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

app.get('/blocking', (_req, res) => {

const workerPromises = [];
for(let i = 0; i < THREADS; i++){
  workerPromises.push(createWorker());
}

const threadResults = Promise.all(workerPromises);
const total = 
    threadResults[0] +
    threadResults[1] +
    threadResults[2] +
    threadResults[3];

    res.status(200).send(`Result is ${total}`);

});

app.listen(PORT,HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

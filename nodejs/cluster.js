import express from 'express';
import cluster from 'cluster';
import { availableParallelism } from 'os';

const numCPUs = availableParallelism();
const PORT = 5001;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running.`)

  for(let i=0; i < numCPUs; i++){
    cluster.fork();
  }

cluster.on('exit', (worker, _code, _signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });

} else {

  const app = express();

  app.listen(PORT, () => {
    console.log(`Server is runnning on ${PORT}`)
  })
}
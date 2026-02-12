import cluster from 'cluster';
// import os from 'os';
import { availableParallelism } from 'os';
import http from 'http';

const numCPUs = availableParallelism();
// const numCPUs = os.cpus().length;

console.log(`Number of CPU cores available: ${numCPUs}`);

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // this part will loop and create workers as per the number of CPU cores available
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, _code, _signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} 

else{

  const server = http.createServer((_req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  });
  
  const PORT = process.env.PORT || 3000;
  
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });

}


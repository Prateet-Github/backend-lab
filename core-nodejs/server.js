import http from "http";

const PORT = 5001;
const HOST = '127.0.0.1';

const server = http.createServer((_req,res) => {
  res.end("Node.js Server");
});

server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
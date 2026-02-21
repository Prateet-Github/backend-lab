import http from 'http';

const PORT = 3000;

const server = http.createServer((req,res)=>{
res.end('Node.js streams.')
});

server.listen(PORT,()=>{
  console.log(`Server is listening at ${PORT}`)
});
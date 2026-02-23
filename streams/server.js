import http from 'http';
import fs from 'fs';

const PORT = 3000;

const server = http.createServer((_req,res) => {

// without streams  
// const file = fs.readFileSync('sample.txt');

// with streams
const readableStream = fs.createReadStream('sample.txt');
readableStream.pipe(res)

});

server.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
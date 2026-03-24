import fs from 'fs';

const readableStream = fs.createReadStream('./input.txt');

readableStream.on('data', (chunk) => {
  console.log("Data:",chunk.toString());  
});

readableStream.on('end', () => {
  console.log('No more data to read.');
});

readableStream.on('error', (err) => {
  console.error(`Error reading file: ${err}`);
});
import { error } from 'console'
import fs from 'fs'

const readableStream = fs.createReadStream('./input.txt');

readableStream.on('open', () => {
  console.log("File is opened");
})

readableStream.on('ready', () => {
  console.log("Stream is ready to go");
})

readableStream.on('data', (chunk) => {
  console.log(chunk.toString());
})

readableStream.on('end', () => {
  console.log("No more data left in the source");
})

readableStream.on('close', () => {
  console.log("Strteam is fully destroyed");
})

readableStream.on('error', () => {
  console.log("Error is ", error);
})



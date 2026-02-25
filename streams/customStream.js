import {Readable, Writable} from 'stream';

const writableStream = new Writable({
  write (s){
    console.log('Writing', s.toString());
  }
})

const readableStream = new Readable({
  highWaterMark: 1024 * 1024, // Buffer limit of a stream
  read (){}
});

readableStream.on('data', (chunk) => {
  console.log('Data is:', chunk.toString()); 
  // Data is: <Buffer 4c 65 61 72 6e 69 6e 67 20 74 68 65 20 73 74 72 65 61 6d 73 20 69 6e 20 4e 6f 64 65 2e 6a 73>
  // Data is: Learning the streams in Node.js (.toString())
  writableStream.write(chunk);
});

console.log(readableStream.push('Learning the streams in Node.js'));
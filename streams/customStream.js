import {Readable} from 'stream';

const readableStream = new Readable({
  read (){}
});

readableStream.on('data', (chunk)=>{
  console.log('Data is:', chunk);
});

readableStream.push('Learning the streams in Node.js');
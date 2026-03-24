import fs from 'fs';

const writableStream = fs.createWriteStream('./writableOutput.txt');

writableStream.write('Hello, this is a writable stream example.\n');
writableStream.write('This will be written to the output.txt file.\n');

writableStream.end(() => {
  console.log('Finished writing to the file.');
});

writableStream.on('error', (err) => {
  console.error(`Error writing to file: ${err}`);
});
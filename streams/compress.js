import zlib from 'zlib';
import fs from 'fs';

const inputFile = fs.createReadStream('input.txt');  
const outputFile = fs.createWriteStream('input.txt.gz');  

inputFile.pipe(zlib.createGzip()).pipe(outputFile);
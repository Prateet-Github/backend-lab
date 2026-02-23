import zlib from 'zlib';
import fs from 'fs'; 

const inputFile = fs.createReadStream('input.txt.gz');  
const outputFile = fs.createWriteStream('input2.txt');  

inputFile.pipe(zlib.createUnzip()).pipe(outputFile);
import zlib from 'zlib';
import fs from 'fs'

const readStream = fs.createReadStream('./input.txt')
const writeStream = fs.createWriteStream('./inputNew.txt.gz') 

const compress =  zlib.createGzip() // compression
// const decompress = zlib.createUnzip() // decompress

readStream.pipe(compress).pipe(writeStream)
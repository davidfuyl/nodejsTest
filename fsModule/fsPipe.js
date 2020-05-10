const fs = require('fs');

const inputName = 'input.txt';
const readStream = fs.createReadStream(inputName);
const outputName = 'output.txt';
const writeStream = fs.createWriteStream(outputName);

//利用管道来实现读取和写入流
readStream.pipe(writeStream);

console.log('read success...');
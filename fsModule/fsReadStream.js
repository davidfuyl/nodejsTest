const fs = require('fs');

//首先创建一个文件读取流

const fileName = './input.txt';
let count = 0;
let fileSave = '';
const readStream = fs.createReadStream(fileName);

readStream.on('data', (chunk) => {
    fileSave += chunk;
    count++;
});

//读取完成
readStream.on('end', (chunk) => {
    console.log('read times: ', count);
    console.log('read success: ', fileSave);
});

//读取失败
readStream.on('error', (err) => {
    console.log('read failed: ', err);
});
const fs = require('fs');

const writeDatas = '我是数据\n';

const writeStream = fs.createWriteStream('output.txt');

//设置写入的数据为utf-8
//writeStream.write(writeDatas, 'utf-8');

//通过for循环来写入流

function writeData(){
    for(let i = 0; i<100; i++){
        writeStream.write(writeDatas, 'utf-8');
    }
}

writeData();

//标记写入完成,会触发finish()方法，相当于回调
writeStream.end();


writeStream.on('finish', () => {
    console.log('write finish...');
});

writeStream.on('error', () => {
    console.log('write error');
});


/*
 1. fs.stat  检测是文件还是目录
 2. fs.mkdir  创建目录
 3. fs.writeFile  创建写入文件
 4. fs.appendFile 追加文件
 5.fs.readFile 读取文件
 6.fs.readdir读取目录
 7.fs.rename 重命名
 8. fs.rmdir  删除目录
 9. fs.unlink删除文件
 */

const fs = require('fs');

//创建目录
/*fs.mkdir('./hello1', (err) => {
    if(err) throw err;
});*/

//删除目录
/*fs.rmdir('./hello', (err) => {
    if(err) throw err;
});*/

/*===========fs.mkdir()==========*/
// recursive: true 如果有多个目录的话，表示会递归创建目录，
/*fs.mkdir('./hello1/hello2', {recursive: true}, (err) => {
    if(err) throw err;
});*/

/*===========stats.isDirectory() stats.isFile()==========*/
//const pathsToCheck = ['./dir', './file.txt'];
/*for(let i=0; i < pathsToCheck.length; i++){
    fs.stat(pathsToCheck[i], (err, stats) => {
        console.log(stats.isDirectory(), pathsToCheck[i]);
        console.log(stats.isFile(), pathsToCheck[i]);
        console.log(pathsToCheck);
    });
}*/

/*===========fs.rename==========*/
//fs.rename(oldPath, newPath, callback)

/*fs.rename('./file1.txt', './file.txt', (err) => {
    if(err) throw err;
    console.log('rename success');
});*/

/*===========fs.readFile==========*/

//fs.readFile(path[, options], callback)
/*fs.readFile('./file1.txt', 'utf-8', (err, fileContent) => {
    if(err) throw err;
    //如果没有指定 encoding，则返回原始的 buffer,否则需要toString()
    //console.log(fileContent.toString());
    console.log(fileContent);
})*/

/*==========fs.writeFile=============*/
//fs.writeFile(file, data[, options], callback)
//const fileContent = new Uint8Array(Buffer.from('Node.js中文网'));
/*const fileContent = 'Node.js中文网';

fs.writeFile('./file1.txt', fileContent, (err) => {
    if(err) throw err;
    console.log(fileContent);
});*/

/*==========fs.appendFile=============*/
//fs.appendFile(path, data[, options], callback)
//如果 options 是字符串，则它指定字符编码,
//fs.appendFile('message.txt', '追加的数据', 'utf8', callback);
/*const appendContent = ' hello nodejs111';
fs.appendFile('./file.txt', appendContent, 'utf-8', (err) => {
    if(err) throw err;
    console.log('The content has been appended')
});*/

/*==========fs.appendFileSync=============*/
//同步地将数据追加到文件，如果文件尚不存在则创建该文件。 data 可以是字符串或 Buffer。
//fs.appendFileSync(path, data[, options])

/*==========fs.unlink=============*/
//fs.unlink() 不能用于目录。 要删除目录，则使用 fs.rmdir()。
//fs.unlink(path, callback)
/*
fs.unlink('./file1.txt', (err) => {
    if(err) throw err;
    console.log('delete file success');
});*/

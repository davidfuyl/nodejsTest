//判断服务器上有没有某个目录，如果没有则创建，一般用于图片上传
const fs = require('fs');

/*fs.stat('upload', (err, stats) => {
    if(err){
        //console.log('err is :', err);
        //return false;
        //如果没有则创建
        fs.mkdir('upload', (err) => {
            console.log('dir create success');
        });
    }else{
        console.log('dir has already exists');
    }
});*/

/*==========分别找出fsModule目录下的所有目录和文件，然后打印出来======*/
//fs.readdir(path[, options], callback)

const dirArr = [];
const filesArr = [];
fs.readdir('../fsModule', (err, files) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(files);

    (function getFiles(i){
        if(i == files.length){
            //跳出循环
            console.log('Directory: ');
            console.log(dirArr);
            console.log('Files are:');
            console.log(filesArr);
            return false;
        }
        fs.stat('../fsModule/' + files[i], (err, stats) => {
            if(stats.isDirectory()){
                dirArr.push(files[i]);//如果是目录则保存
            }else{
                filesArr.push(files[i]);
            }
            //递归调用
            getFiles(i+1);
        })
    })(0);
});


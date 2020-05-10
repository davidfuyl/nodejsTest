//function getData(callBack){
//    //异步请求
//    setTimeout(()=>{
//        let name = 'zhansan';
//        callBack(name);
//    }, 2000);
//}

//从外部获取异步方法里面的数据
//getData((data) => {
//    console.log(data);
//});

//异步方式2
/*const promise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        let name = 'zhansan';
        //if(){...}
        resolve(name);
    });
});

promise.then((data) => {
    console.log(data + 'hello');
});*/

//异步方式3
function getData(resolve, reject){
    //异步请求
    setTimeout(()=>{
        let name = 'zhansan';
        resolve(name);
    }, 1000);
}

const promise = new Promise(getData);//将方法名作为参数传给promise实例，从而将getData方法转换为异步

promise.then((data) => {
    console.log(data + ' promise');
});

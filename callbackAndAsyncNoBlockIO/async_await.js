//普通函数
/*function getData(){
    console.log('this is a common function...');
}
getData();*/

//用async，让一个函数变成一个异步函数
//注意用async修饰的函数，返回的是一个promise对象
/*async function getData(){
    return 'this is a async function...'; // Promise { 'this is a async function...' }
}*/

//console.log(getData());

/*const promise = getData();
promise.then((data) => {
    console.log(data);
});*/

//如果获取async异步函数的执行结果,es7中有await可以等待异步方法返回结果
// await 必须用在异步方法中，或者说必须用在用async修饰的方法

async function getData(){
    return 'this is a async function';
}

async function test(){
    const result = await getData();
    console.log(result);
}

test();
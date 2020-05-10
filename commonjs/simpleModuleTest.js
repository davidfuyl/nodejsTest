const str = 'hello nodejs';

let userInfo = {
    name: 'zhangsan',
    age: 20,
    address: 'beijing',
    sayHi(){
        console.log('hello');
    },
    add(x,y){
        return x + y;
    }
}

//必须使用exports.xxx = xxx将此模块中的属性和方法暴露出去其他模块才可以使用
module.exports.str = str;
module.exports.userInfo = userInfo;

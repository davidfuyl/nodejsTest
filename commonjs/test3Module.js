//node_modules中的模块不要指定路径和后缀名，直接require即可
const sd = require('silly-datetime');
const dateTime = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');

console.log('Current Time is:', dateTime);

//当然这里还可以将此模块暴露出去，供其他需要的模块来使用

module.exports.dateTime = dateTime;
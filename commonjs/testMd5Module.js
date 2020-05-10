const md5 = require('md5-node');

const str = "hello world";

const md5str = md5(str);

console.log(md5str);

module.exports.md5str = md5str;




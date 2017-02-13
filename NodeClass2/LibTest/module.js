/**
 * Created by dllo on 17/2/13.
 */
// var hello = require('./hello.js');
// hello.sayHEllo('zx');

// var hello  = new hello();

//验证文件是否存在，不会加载模块。模块完整路径
// require.resolve('path');

//模块缓存
// require.cache
// console.log(require.cache);
// delete require.cache[require.resolve('./hello.js')];


//  系统模块与自写模块有区别，系统模块有自己系统模块的缓存，缓存不保存在一起。
// var http = require('http');
// console.log(require.cache);
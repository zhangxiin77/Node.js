/**
 * Created by dllo on 17/2/10.
 */

//获取文件系统模块
var filesystem = require('fs');
var qs = require('querystring');
//文件系统模块读入文件。参数1：要读入文件的路径，参数2:选项，文本的编码格式，参数3：回调函数
//异步执行(非阻塞)   readFile()
// console.log('before');
// filesystem.readFile('./newTests.txt', 'utf-8', function (error, data) {
//    if(error)
//    {
//        console.log(error.stack)
//        return;
//    }
//    else
//    {
//        console.log(data.toString());
//    }
//     console.log("程序执行完毕");
// });
// console.log('after');
//删除文件：unlink
// filesystem.unlink('./test.txt', function () {
//     console.log('success');
// });
//重命名： rename
// filesystem.rename('./1.txt', './newTest.txt', function () {
//     console.log('rename succeed');
// });
//查看文件状态
//     filesystem.Stats('./newTest.txt', function (err, stat) {
//         console.log(stat);
//     });
//查看文件是否存在
//     filesystem.exists('./newTest.txt', function (err, data) {
//         if (err)
//         {
//             console.log(err.stack);
//         }
//         else
//         {
//
//         }
//
//     });

//非空check
//     filesystem.nullCheck()
//同步执行(阻塞)  readFileSync()
// console.log('before');
// var data = filesystem.readFileSync('./1.txt', 'utf-8');
// console.log(data);
// console.log('after');

// var content = "write file";
// filesystem.writeFile('./1.txt', content, 'utf-8', function (error, data){
//     console.log('写入成功');
// });
//
// var say = require('./SayHello');
// say.sayHello('zx');
//
// var  EventEmitter = require('events');
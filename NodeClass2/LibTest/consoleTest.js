/**
 * Created by dllo on 17/2/13.
 */
//打印错误信息
console.error('这里的代码有问题');
var user = new Object();
user.name = 'Mc.BigXin';
//打印对象信息
console.dir(user);
//打印栈信息
console.trace('这里的代码有问题');
/* 打印结果
Trace: 这里的代码有问题
at Object.<anonymous> (/Users/dllo/NodeClass/NodeClass2/LibTest/consoleTest.js:11:9)
at Module._compile (module.js:409:26)
at Object.Module._extensions..js (module.js:416:10)
at Module.load (module.js:343:32)
at Function.Module._load (module.js:300:12)
at Function.Module.runMain (module.js:441:10)
at startup (node.js:139:18)
at node.js:990:3
*/
//assert 断言。代码只执行到断言结束，不执行后续的时间打印
console.assert(1 > 20, '1不大于20');
//时间计时打印
console.time('timer');
for (var i = 0; i < 100000000; i++)
{

}
console.timeEnd('timer');

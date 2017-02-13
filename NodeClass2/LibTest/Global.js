/**
 * Created by dllo on 17/2/13.
 */
//global
// console.log(global);
//__dirname：获取当前文件所处文件夹路径
console.log(__dirname);
//__filename：获取当前文件所处完整路径
console.log(__filename);

/*参数1:回调函数
  参数2:延迟多少毫秒再执行
  参数2以后:回调函数内需要传入的参数值。
*/
//设置多少毫秒之后做某事
var timer = setTimeout(function (name, age) {
    console.log('本人叫' + name + ',今年' + age + '岁');
}, 1000, 'zx', 25);


console.log('hhhhhh');
//清除单次定时器
// clearTimeout(timer);

//设置间隔多少毫秒做某事
// var interval = setInterval(function () {
//     console.log('hhhhh');
// }, 1000);
// clearInterval(interval);

//取消回调函数的回调
timer.unref();
//恢复回调函数的回调
timer.ref();
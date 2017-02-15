/**
 * Created by dllo on 17/2/14.
 */
//JS严格模式
/* 严格模式的优点
  1 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;

  2 消除代码运行的一些不安全之处，保证代码运行的安全；

  3 提高编译器效率，增加运行速度；

  4 为未来新版本的Javascript做好铺垫。

  5 "严格模式"体现了Javascript更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经支持它，许多大项目已经开始全面拥抱它。

  6 另一方面，同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。掌握这些内容，有助于更细致深入地理解Javascript，让你变成一个更好的程序员。
 */

var http = require('http');
// var server = http.createServer(function (req, res) {
//     // console.log(request.method + ': ' + request.url);
//    res.writeHead(200, {'Content-Type': 'text-plain'});
//    res.end('Hello, Node.js');
// });
//
// server.listen('3000');
// console.log('server is running at http://127.0.0.1:3000');


//解析url
var url = require('url');
//url.parse(urlStr, [parseQueryString], [slashesDenoteHost])
// 参数1:url;
// 参数2:为true时将使用查询模块分析查询字符串，默认为false;
// 参数3: 默认为false，//foo/bar 形式的字符串将被解释成 { pathname: ‘//foo/bar' }
// http://example.com:8080/one?a=index&t=article&m=default
// console.log(url.parse('http://example.com:8080/one?a=index&t=article&m=default', true, true));
// console.log(url.parse('http://example.com:8080/one?a=index&t=article&m=default'));
// console.log(url.parse('http://www.jb51.net/article/58354.htm', true, true));


//处理本地文件目录
var path = require('path');
// path.resolve():  该方法以应用程序根目录为起点，根据所有的参数值字符串解析出一个绝对路径，参数可以是文件或文件夹。
var dir = path.resolve('NodeJob3');
// console.log(dir);
// path.join():  该方法将多个参数值字符串结合成一个路径字符串,用于最终路径的拼接
//打印当前文件的绝对路径
// console.log(path.join(dir, 'nodejob3.js'));


//文件服务器

var fs = require('fs');
var root = path.resolve(process.argv[2] || '.');

var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    var filepath = path.join(root, pathname);
    console.log(filepath);
    // 获取文件状态:
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + req.url);
            // 发送200响应:
            res.writeHead(200);
            // 将文件流导向response:
            fs.createReadStream(filepath).pipe(res);
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + req.url);
            // 发送404响应:
            res.writeHead(404);
            res.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');
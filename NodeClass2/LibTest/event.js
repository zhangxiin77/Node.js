/**
 * Created by dllo on 17/2/13.
 */
//获取http服务模块
var http = require('http');
//获取事件模块
var even = require('events');
//创建一个server
var server = http.createServer();
//给服务添加事件 =>  .once()  事件只执行一次
server.on('request', function (req, res) {
    if (req.url !== '/favicon.ico')
    {
        console.log(req.url);
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello,Node.js event');
});
server.on('request', function (req, res) {
    if (req.url !== '/favicon.ico')
    {
        console.log('请求成功');
    }
});
server.on('request', function (req, res) {
    if (req.url !== '/favicon.ico')
    {
        console.log('响应成功');
    }
});
//服务器监听3000端口
server.listen(3000);

server.on('newListener', function (f, e) {
    console.log('对' + f +  '添加了事件' + e);
});
server.on('removeListener', function (f, e) {
    console.log('对' + f +  '删除了事件' + e);
});

//移除监听事件
var func = function (req) {
    if (req.url !== '/favicon.ico')
    {
        console.log('这个方法不会执行');
    }
};
//添加监听事件
server.on('request', func);
//删除监听事件
// server.removeListener('request', func);
//删除全部
// server.removeAllListeners('request');


server.on('request', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello,Event');
});

//设置监听事件最大值,默认为10
server.setMaxListeners(20);

//创建一个自定义事件(customEvent)
server.on('customEvent', function () {
    console.log('此处为自定义事件');
});
//执行自定义事件
server.emit('customEvent');

console.log(even.listenerCount(server, 'request'));
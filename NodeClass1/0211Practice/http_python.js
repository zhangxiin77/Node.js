/**
 * Created by dllo on 17/2/11.
 */
var http = require('http');
var url = "http://www.imooc.com/learn/348";
http.get(url, function (res) {
    var html = '';
    res.on('data', function (data) {
        html += data;
    });
    res.on('end', function () {
        console.log(html);
    })
}).on('error', function () {
    console.log('获取课程出错');
});

exports.get = function(options, cb) {
    var req = exports.request(options, cb);
    req.end();
    return req;
};
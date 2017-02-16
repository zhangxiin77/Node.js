/**
 * Created by dllo on 17/2/15.
 */
var http = require('http');
var path = require('path');
var url = require('url');
var getStaticFile = require('./getStaticFile');
var qs = require('querystring');
var server = http.createServer();
var moment = require('moment');
server.on('request', function (request, response) {
    if(request.url !== '/favicon.ico')
    {
        var urlPath = url.parse(request.url).pathname;
        var filePath = path.join(__dirname, urlPath);
        getStaticFile(filePath, response);
        setInterval(function () {
            //
            if(request.url !== '/favicon.ico') {
                var time = moment().format('MMMM Do YYYY, h:mm:ss a');
                console.log(time);
                response.end();
            }
        },1000);
    }
    else
    {
        response.end();
    }
});
server.listen(8080, function () {
    console.log('服务器启动成功');
});
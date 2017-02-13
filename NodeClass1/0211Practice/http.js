/**
 * Created by dllo on 17/2/11.
 */
// var http = require('http');
var http = require('_http_server');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello Nodejs');
    res.end();
}).listen(2015);
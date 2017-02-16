/**
 * Created by dllo on 17/2/15.
 */
var moment = require('moment');
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
http.createServer(function (req, res) {
    setInterval(function () {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(time);
    var urlPath = url.parse(req.url).pathname;
    var filePath = path.join(__dirname, urlPath);
    fs.createReadStream(filePath).pipe(time);
    },1000);
}).listen(3000);







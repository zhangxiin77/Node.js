/**
 * Created by dllo on 17/2/11.
 */
var http = require('http');
var url = "http://www.imooc.com/learn/348";
var cheerio = require('cheerio');
function filterChapters() {
    var $ = cheerio.load(html);
    var chapters = $('.learnchapter');
    [{
        chapterTitle: '',
        videos: [
            title: '',
            id: ''
        ]
    }];
    var courseData = []
}
http.get(url, function (res) {
    var html = '';
    res.on('data', function (data) {
        html += data;
    });
    res.on('end', function () {
        console.log(html);
    })
}).on('error', function () {
    filterChapters(html);
});

exports.get = function(options, cb) {
    var req = exports.request(options, cb);
    req.end();
    return req;
};
/**
 * Created by dllo on 17/2/17.
 */
var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var options = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'Nodejs',
    port: 3306,
    charset: 'utf8'
};
//创建pool的实例化对象，把options传进来
var pool = mysql.createPool(options);
//.post 请求
router.post('/', function (req, res) {
    // 连接
    pool.getConnection(function (err, connection) {
        //定义sql
        var sql = 'select * from user where username = \'' + req.body.username + '\' and password = \'' + req.body.password + '\'';
        // 执行sql
        connection.query(sql, function (err, result) {
            // 判断是否检索到结果(result[0])
            if (result[0]) {
                // 如果有结果，用res.send()写出响应体内容
                res.send('Hello ' + result[0].nickname);
            } else {
                // 没有结果输出错误信息
                res.send('账号或密码错误');
                // alert('账号或密码错误');
            }
        });
    });
});

module.exports = router;
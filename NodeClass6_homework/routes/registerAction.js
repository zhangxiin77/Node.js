/**
 * Created by dllo on 17/2/18.
 */
var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var options = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    charset: 'utf8',
    database: 'Nodejs'
};
var pool = mysql.createPool(options);
router.post('/', function (req, res) {
    pool.getConnection(function (err, connection) {
        var insertSql = 'insert into user (username, password, nickname) values (\'' + req.body.username + '\',' + '\'' +req.body.password + '\',' + '\'' +req.body.nickname + '\')';
        var selectSql  = 'select * from user where username = \'' + req.body.username + '\'';
        connection.query(selectSql, function (err, result) {
            if (result[0]) {
                //说明用户名已经存在
                res.send('用户名已存在，注册失败');
            } else {
                if (req.body.password == req.body.password2) {
                    connection.query(insertSql, function (err, result) {
                        // 注册成功
                        res.send('注册成功');
                    });
                } else {
                    res.send('两次输入的密码不一致');
                }
            }
        });
    });
});

module.exports =router;
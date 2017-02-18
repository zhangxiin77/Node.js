/**
 * Created by dllo on 17/2/18.
 */
var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var option = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    charset: 'utf8',
    database: 'Nodejs'
};
var pool = mysql.createPool(option);
router.post('/', function (req, res) {
    pool.getConnection(function (err, connection) {
        var sql = 'select * from user where username = \'' + res.body.username + 'and password = \'' + res.body.password + '\'';
        connection.query(sql, function (err, result) {
            if (result[0]) {
                res.send('hello ' + nickname);
            } else {
                res.send('用户名或密码错误');
            }
        });
    });
});

module.exports = router;
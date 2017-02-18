/**
 * Created by dllo on 17/2/18.
 */
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.render('register');
});

module.exports = router;
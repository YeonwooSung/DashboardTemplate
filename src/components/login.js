'use strict';

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('login.html');
});

router.post('/', (req, res) => {
    var {id, password} = req.body;

    //TODO

    res.redirect('/');
});

module.exports = router;

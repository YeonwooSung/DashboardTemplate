'use strict';

var express = require('express');
var router = express.Router();

var saveNewUser = require('../db/dbConn').saveNewUser;

router.get('/', (req, res) => {
    res.render('signup.html');
});

router.post('/', (req, res) => {
    var {id, password, region} = req.body;
    saveNewUser(res, id, password, region);
});

module.exports = router;

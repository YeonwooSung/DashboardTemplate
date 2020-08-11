'use strict';

var express = require('express');
var router = express.Router();

var authenticate = require('../db/dbConn').authenticate;

router.get('/', (req, res) => {
    res.render('login.html');
});

router.post('/', (req, res) => {
    var {id, password} = req.body;

    authenticate(id, password, function (err, user) {
        if (err) {
            var err_msg = err.message;
            console.log(err_msg);

            return res.redirect('login');
        }

        if (user) {
            // req.session.regenerate(function () {
            //     req.session.user = user;
            //     res.redirect('/callbackAuth');
            // });

            res.redirect('/');
        } else {
            res.redirect('login');
        }
    });
});

module.exports = router;

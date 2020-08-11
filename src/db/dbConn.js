var mongoose = require('mongoose');

var db;

function connectDB() {
    var db_info = require('../../private/mongodb.json');

    db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', function () {
        // CONNECTED TO MONGODB SERVER
        console.log("Connected to mongod server");
    });

    mongoose.connect(db_info.url);
}

connectDB();

var User = require('./schema/user');
var Data = require('./schema/data');


//------------------------------------------------------------------------------------
// DB functions for User schema

exports.saveNewUser = (res, id, password, region) => {
    var user = new User();
    user.id = id;
    user.password = password;
    user.region = region;

    user.save((err) => {
        if (err) {
            console.error(err);
            res.redirect('/signup');
            return;
        }

        res.redirect('login');
    });
}

exports.authenticate = (user_id, password, fn) => {
    User.findOne({id: user_id}, function(err, user) {
        if (err) return fn(err);
        if (!user) return fn(new Error('cannot find user'));

        if (password != user.password) {
            return fn(new Error('wrong password'));
        } else {
            return fn(null, user);
        }
    });
}


//------------------------------------------------------------------------------------
// DB functions for Data schema

exports.saveNewData = (res, id, type, value) => {
    var data = new Data();
    data.id = id;
    data.type = type;
    data.value = value;

    data.save((err) => {
        if (err) {
            console.error(err);
            res.send({ result: 0 });
            return;
        }

        //TODO
        res.send({ result: 1 });
    });
}

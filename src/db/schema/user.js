var mongoose = require('mongoose');
var bcrypt = require("bcrypt-nodejs");

var SALT_FACTOR = 10;

var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: String,
    password: String,
    region: String,
});


// encrypt password before save
// userSchema.pre("save", function (done) {
//     var user = this;
//     if (!user.isModified("password")) {
//         return done();
//     }
//     bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
//         if (err) {
//             return done(err);
//         }
//         bcrypt.hash(user.password, salt, noop, function (err, hashedPassword) {
//             if (err) {
//                 return done(err);
//             }
//             user.password = hashedPassword;
//             done();
//         });
//     });
// });

// function for password checking
userSchema.methods.checkPassword = function (guess, done) {
    bcrypt.compare(guess, this.password, function (err, isMatch) {
        done(err, isMatch);
    });
};

module.exports = mongoose.model('user', userSchema);
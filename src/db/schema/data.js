var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataSchema = new Schema({
    id: String,     // user id
    type: String,   // i.e. 'c', 't', 'h'
    value: Number,  // value
    serial: Number, // sequential value
    ip: String,     // ip address of sender device
    node: String,   // node information
    timestamp: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('data', dataSchema);
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/loginapp');

var db = mongoose.connection;

var UserSchema = mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

var User = module.exports = mongoose.model('User', UserSchema);
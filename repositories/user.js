const User = require("../models/user");
const bcrypt = require('bcryptjs');


function UserRepository() {}

function createUser(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save(callback);
        })
    })
}

function getUserByUsername(username, callback) {
    var query = {email: username};
    User.findOne(query, callback);
}

function getUserById(id, callback) {
    User.findById(id, callback);
}

function comparePassword(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        console.log(isMatch);
        if (err) throw err;
        callback(null, isMatch);
    })
}


UserRepository.prototype.createUser = createUser;
UserRepository.prototype.getUserByUsername = getUserByUsername;
UserRepository.prototype.getUserById = getUserById;
UserRepository.prototype.comparePassword = comparePassword;

module.exports = new UserRepository();
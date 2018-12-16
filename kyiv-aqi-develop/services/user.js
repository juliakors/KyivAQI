const UserRepository = require("../repositories/user");

module.exports = {
    createUser: (user, callback) => {
        UserRepository.createUser(user, (err, data) => {
            callback(err, data);
        })
    },
    getUserByUsername: (username, callback) => {
            UserRepository.getUserByUsername(username, (err, data) => {
            callback(err, data);
        })
    },
    getUserById: (id, callback) => {
        UserRepository.getUserById(id, (err, data) => {
            callback(err, data);
        })
    },
    comparePassword: (candidatePassword, hash, callback) => {
        UserRepository.comparePassword(candidatePassword, hash, (err, data) => {
            callback(err, data);
        })
    }
};
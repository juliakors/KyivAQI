const FeatureRepository = require("../repositories/feature");

module.exports = {
    getFeatures: (date, callback) => {
        FeatureRepository.getFeatures(date, (err, data) => {
            callback(err, data);
        })
    },
    // getUserByUsername: (username, callback) => {
    //         UserRepository.getUserByUsername(username, (err, data) => {
    //         callback(err, data);
    //     })
    // }
};
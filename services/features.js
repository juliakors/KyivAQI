const FeatureRepository = require("../repositories/feature");

module.exports = {
    getFeatures: (date, callback) => {
        FeatureRepository.getFeatures(date, (err, data) => {
            callback(err, data);
        })
    },
    getFeaturesNO2: (date, callback) => {
        FeatureRepository.getFeaturesNO2(date, (err, data) => {
            callback(err, data);
        })
    },
    getFeaturesSO2: (date, callback) => {
        FeatureRepository.getFeaturesSO2(date, (err, data) => {
            callback(err, data);
        })
    },
    getFeaturesO3: (date, callback) => {
        FeatureRepository.getFeaturesO3(date, (err, data) => {
            callback(err, data);
        })
    },
    getFeaturesPM25: (date, callback) => {
        FeatureRepository.getFeaturesPM25(date, (err, data) => {
            callback(err, data);
        })
    },
    getFeaturesPM10: (date, callback) => {
        FeatureRepository.getFeaturesPM10(date, (err, data) => {
            callback(err, data);
        })
    },
    // getUserByUsername: (username, callback) => {
    //         UserRepository.getUserByUsername(username, (err, data) => {
    //         callback(err, data);
    //     })
    // }
};
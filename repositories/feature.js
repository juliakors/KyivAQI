const Features = require("../models/aqi-feature");


function FeatureRepository() {}

function getFeatures(date, callback) {
	Features.findOne({date: date}, callback);
}


FeatureRepository.prototype.getFeatures = getFeatures;

module.exports = new FeatureRepository();
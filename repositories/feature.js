const Features = require("../models/aqi-feature");
const FeaturesNO2 = require("../models/no2-feature");
const FeaturesSO2 = require("../models/so2-feature");
const FeaturesO3 = require("../models/o3-feature");
const FeaturesPM25 = require("../models/pm25-feature");
const FeaturesPM10 = require("../models/pm10-feature");


function FeatureRepository() {}

function getFeatures(date, callback) {
	Features.findOne({date: date}, callback);
}

function getFeaturesNO2(date, callback) {
	FeaturesNO2.findOne({date: date}, callback);
}

function getFeaturesSO2(date, callback) {
	FeaturesSO2.findOne({date: date}, callback);
}

function getFeaturesO3(date, callback) {
	FeaturesO3.findOne({date: date}, callback);
}

function getFeaturesPM25(date, callback) {
	FeaturesPM25.findOne({date: date}, callback);
}

function getFeaturesPM10(date, callback) {
	FeaturesPM10.findOne({date: date}, callback);
}


FeatureRepository.prototype.getFeatures = getFeatures;
FeatureRepository.prototype.getFeaturesNO2 = getFeaturesNO2;
FeatureRepository.prototype.getFeaturesO3 = getFeaturesO3;
FeatureRepository.prototype.getFeaturesSO2 = getFeaturesSO2;
FeatureRepository.prototype.getFeaturesPM25 = getFeaturesPM25;
FeatureRepository.prototype.getFeaturesPM10 = getFeaturesPM10;

module.exports = new FeatureRepository();
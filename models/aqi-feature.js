const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/loginapp');

var db = mongoose.connection;

var FeatureSchema = mongoose.Schema({
    type: {
        type: String
    },
    name: {
        type: String
	},
	date: {
		type: String
	},
    crs: {
        type: {
			type: {type: String},
			properties: {type: {
				name: {type: String}
			}}
		}
	},
	features: {type: [{
		type: {type: String},
		properties: {type: {
			fid: {type: Number},
			cat: {type: String},
			pm25: {type: Number},
			pm10: {type: Number},
			aqi: {type: Number}
		}},
		geometry: {type: {
			type: {type: String},
			coordinates: {type: Array}
		}}
	}]}
}, {collection: 'aqi'});

var Features = module.exports = mongoose.model('aqi', FeatureSchema);
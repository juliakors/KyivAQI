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
			pm10: {type: Number}
		}},
		geometry: {type: {
			type: {type: String},
			coordinates: {type: Array}
		}}
	}]}
}, {collection: 'pm10'});

var Features = module.exports = mongoose.model('pm10', FeatureSchema);
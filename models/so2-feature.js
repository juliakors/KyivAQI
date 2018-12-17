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
			so2: {type: Number}
		}},
		geometry: {type: {
			type: {type: String},
			coordinates: {type: Array}
		}}
	}]}
}, {collection: 'so2'});

var Features = module.exports = mongoose.model('so2', FeatureSchema);
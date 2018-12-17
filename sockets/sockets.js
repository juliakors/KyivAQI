// Services
const connectionService = require('../services/connection');
const userService = require("../services/user");
const featureService = require("../services/features");
const User = require('../models/user');

module.exports = function (io, mongo) {
	io.on('connection', (socket) => {

		// Connect
		connectionService.connect(io, socket);

		socket.on('get-aqi', (date) => {
			featureService.getFeatures(date, (err, data) => {
				socket.emit('aqi', data);
			});
		});

		socket.on('get-no2', (date) => {
			featureService.getFeaturesNO2(date, (err, data) => {
				socket.emit('no2', data);
			});
		});

		socket.on('get-so2', (date) => {
			featureService.getFeaturesSO2(date, (err, data) => {
				socket.emit('so2', data);
			});
		});

		socket.on('get-o3', (date) => {
			featureService.getFeaturesO3(date, (err, data) => {
				socket.emit('o3', data);
			});
		});

		socket.on('get-pm25', (date) => {
			featureService.getFeaturesPM25(date, (err, data) => {
				socket.emit('pm25', data);
			});
		});

		socket.on('get-pm10', (date) => {
			featureService.getFeaturesPM10(date, (err, data) => {
				socket.emit('pm10', data);
			});
		});
	
		// Disconnect
		socket.on('disconnect', () => {
			connectionService.disconnect(io, socket);
		});

		socket.on('register-user', (user, callback) => {
			let newUser = new User({
				name: user.name,
				email: user.email,
				password: user.password
			});
			userService.createUser(newUser, callback);
		});

		socket.on('login', () => {
			socket.emit('login', true);
		})
	});
}
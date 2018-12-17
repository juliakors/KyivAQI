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
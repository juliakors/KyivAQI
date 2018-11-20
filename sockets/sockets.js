// Services
const connectionService = require('../services/connection');
const userService = require("../services/user");
const User = require('../models/user');

module.exports = function (io) {
	io.on('connection', (socket) => {

		// Connect
		connectionService.connect(io, socket);
	
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
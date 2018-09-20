// Services
const connectionService = require('../services/connection');

module.exports = function (io) {
	io.on('connection', (socket) => {

		// Connect
		connectionService.connect(io, socket);
	
		// Disconnect
		socket.on('disconnect', () => {
			connectionService.disconnect(io, socket);
		});

	});
}
let connections = require('../data/data-storage').connections;


function ConnectionRepository() {}

function connectUser(io, socket) {
	connections.push(socket);
	console.log('Connected: %s sockets', connections.length);
}

function disconnectUser(io, socket) {
	/* if (socket.nickname == undefined) {
		connections.splice(connections.indexOf(socket), 1);
		return;
	}; */
	connections.splice(connections.indexOf(socket), 1);
	console.log('Disconnected: %s sockets', connections.length);
}


ConnectionRepository.prototype.connectUser = connectUser;
ConnectionRepository.prototype.disconnectUser = disconnectUser;

module.exports = new ConnectionRepository();
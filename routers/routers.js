const path = require("path");

module.exports = (app) => {
	// Display html page
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../src/public/index.html'));
	});

	app.get('/css/style.css', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../src/public/css/style.css'));
	});

	app.get('/script.js', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../dist/main.js'));
	});

	app.get('/socket.io/socket.io.js', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../node_modules/socket.io/socket.io.js'));
	});
}
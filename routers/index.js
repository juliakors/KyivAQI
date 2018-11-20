const path = require("path");

module.exports = (app, io) => {
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../src/public/index.html'));
	});

	app.get('/script.js', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../dist/main.js'));
	});

	app.get('/login.js', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../src/scripts/login.js'));
	});

	app.get('/globals.js', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../src/scripts/globals.js'));
	});
}
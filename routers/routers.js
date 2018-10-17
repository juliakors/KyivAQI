const path = require("path");

module.exports = (app) => {
	// Display html page
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../src/public/index.html'));
	});

	app.get('/login.html', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../src/public/login.html'));
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

	app.get('/fonts/Roboto-Light.ttf', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../src/public/fonts/Roboto-Light.ttf'));
	});

	app.get('/fonts/Roboto-Bold.ttf', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../src/public/fonts/Roboto-Bold.ttf'));
	});

	app.get('/fonts/Roboto-Regular.ttf', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../src/public/fonts/Roboto-Regular.ttf'));
	});

	app.get('/fonts/Roboto-Medium.ttf', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../src/public/fonts/Roboto-Medium.ttf'));
	});

	app.get('/bootstrap/bootstrap.min.js', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../src/public/bootstrap/bootstrap.min.js'));
	});

	app.get('/jquery-3.3.1.min.js', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/../src/public/jquery-3.3.1.min.js'));
	});
}
const ee = require('@google/earthengine');
// const privateKey = require('./kiev-air-088230e7eb27.json');

const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
//const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
const mongoose = require('mongoose');

const handlebars  = require('express-handlebars');

mongoose.connect('mongodb://localhost/loginapp');
const db = mongoose.connection;

const staticPath = path.normalize(__dirname + "/src/public");

// Connection
require('./sockets/sockets')(io, mongo);

//app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'src/public')));

app.get('/script.js', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/dist/main.js'));
});

app.get('/login.js', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/src/scripts/login.js'));
});

app.get('/qgis/index.html', (req, res) => {
	res.sendFile(path.resolve(__dirname + '/views/qgis/index.html'));
  });



app.engine('.hbs', handlebars({extname: '.hbs', cache: false}))
  .set('view engine', '.hbs');
app.use('/src/public', express.static('src/public'));
app.use('/views', express.static(__dirname + '/views'));
app.use('/views/qgis', express.static(__dirname + '/views/qgis'));
app.use('/views/qgis-thermal', express.static(__dirname + '/views/qgis-thermal'));
app.use('/views/dist', express.static(__dirname + '/views/dist'));

app.get('/', (request, response) => {
	// console.log(ee.Image('LANDSAT/LC08/C01/T1_TOA/LC08_123032_20140515'));
	// const image = new ee.Image('LANDSAT/LC08/C01/T1_TOA/LC08_123032_20140515');
	// var map = image.getMap({min: 0, max: 1000});
	
    response.render('index');

  });

app.get('/thermal', (request, response) => {
// console.log(ee.Image('LANDSAT/LC08/C01/T1_TOA/LC08_123032_20140515'));
// const image = new ee.Image('LANDSAT/LC08/C01/T1_TOA/LC08_123032_20140515');
// var map = image.getMap({min: 0, max: 1000});

  response.render('index-thermal');

});

// app.get('/globals.js', (req, res) => {
//   res.sendFile(path.resolve(__dirname + '/src/scripts/globals.js'));
// });

// Express session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.')
    , root = namespace.shift()
    , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }

    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

app.use(flash());
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Initialize client library and run analysis.
// var runAnalysis = function() {
//   ee.initialize(null, null, function() {
//     console.log('It works!');
//   }, function(e) {
//     console.error('Initialization error: ' + e);
//   });
// };

// // Authenticate using a service account.
// ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function(e) {
//   console.error('Authentication error: ' + e);
// });
const PORT = process.env.PORT || 3000
express().listen(PORT, () => console.log(`Listening on ${ PORT }`))

// Routers
var routes = require('./routers/routers')(app, io);
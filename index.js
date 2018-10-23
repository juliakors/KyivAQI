const ee = require('@google/earthengine');
const privateKey = require('./kiev-air-088230e7eb27.json');

const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);
// const mongooseConnection = require("./db/dbconnect").connection;

const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/loginapp');
const db = mongoose.connection;

const staticPath = path.normalize(__dirname + "/src/public");

// var users = require('./routers/users');

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname + '/../src/public/index.html'));
// });



// Connection
require('./sockets/sockets')(io);


app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'src/public')));

app.get('/script.js', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/dist/main.js'));
});

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

// app.use('/users', users);

// Initialize client library and run analysis.
var runAnalysis = function() {
  ee.initialize(null, null, function() {
    console.log('It works!');
    var img = ee.Image(1);
    console.log(img);
  }, function(e) {
    console.error('Initialization error: ' + e);
  });
};

// Authenticate using a service account.
ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function(e) {
  console.error('Authentication error: ' + e);
});

app.listen(3000);

// Routers
var routes = require('./routers/routers')(app);
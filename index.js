const ee = require('@google/earthengine');
const privateKey = require('./kiev-air-088230e7eb27.json');

const express = require('express');
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongooseConnection = require("./db/dbconnect").connection;

// Routers
require('./routers/routers')(app);

// Connection
require('./sockets/sockets')(io);

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

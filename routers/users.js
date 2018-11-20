const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../models/user');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const userService = require("../services/user");
const server = require('http').createServer(express());
const io = require('socket.io').listen(server);

router.get('/login', (req, res) => {
	res.sendFile(path.resolve(__dirname + '/../src/public/login.html'));
});

router.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../src/public/registration.html'));
});

passport.use(new localStrategy(
    function(username, password, done) {
        userService.getUserByUsername(username, (err, user) => {
            if (err) throw err;
            if (!user) {
                return done(null, false, {message: 'Unknown user'});
            }
            userService.comparePassword(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    console.log('Passwords match');
                    return done(null, user);
                } else {
                    console.log('Passwords dont match');
                    return done(null, false, {message: 'Invalid password'});
                }
            })
        })
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    userService.getUserById(id, (err, user) => {
        done(err, user);
    })
});

router.post('/login',
    passport.authenticate('local'),
    (req, res) => {
        // console.log(req);
        io.emit('a', true);
        res.redirect('/');
    }
);

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router;
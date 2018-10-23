const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../models/user');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;


router.get('/login', (req, res) => {
	res.sendFile(path.resolve(__dirname + '/../src/public/login.html'));
});

router.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../src/public/registration.html'));
    // res.render('register');
});

router.post('/register', (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        // res.render('register', {
        //     errors: errors
        // });
    } else {
        var newUser = new User({
            name: name,
            email: email,
            password: password
        });
        User.createUser(newUser, (err, user) => {
            if (err) throw err;
            console.log(user);
        });

        req.flash('success_msg', 'You are registered');
        res.redirect('login');
    }
});





passport.use(new localStrategy(
    function(username, password, done) {
        console.log('1');
        User.getUserByUsername(username, (err, user) => {
            console.log(user);
            if (err) throw err;
            if (!user) {
                console.log('3');
                return done(null, false, {message: 'Unknown user'});
            }
            User.comparePassword(password, user.password, (err, isMatch) => {
                console.log('4');
                if (err) throw err;
                if (isMatch) {
                    console.log('!!!!!!!!!!!!');
                    return done(null, user);
                } else {
                    console.log('--------------');
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
    User.getUserById(id, (err, user) => {
        done(err, user);
    })
});

router.post('/login',
    passport.authenticate('local'),
    (req, res) => {
        console.log(11);
        // passport.authenticate('local', {
        //     successRedirect: '/',
        //     failureRedirect: '/login',
        //     failureFlash: true
        // }),
        res.redirect('/');
    }
);

module.exports = router;
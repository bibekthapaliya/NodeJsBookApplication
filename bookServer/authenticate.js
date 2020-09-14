var passport = require('passport');
var LocalStartegy= require('passport-local').Strategy;
var User = require('./models/user');
var config = require('./config');

exports.local = passport.use(new LocalStartegy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


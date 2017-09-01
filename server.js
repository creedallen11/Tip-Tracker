var express = require('express');
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load();
var path = require('path');

var app = express();

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//Models
var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);
var actionRoute = require('./app/routes/action.js')(app);

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function() {

   console.log('Nice! Database looks fine')

}).catch(function(err) {

   console.log(err, "Something went wrong with the Database Update!")

});

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');
 
// app.get('/', function(req, res) {
 
//     res.send('Welcome to Passport with Sequelize');
 
// });

 
 
app.listen(3000, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});
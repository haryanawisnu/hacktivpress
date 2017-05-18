const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
let index = require('./routes/index');
let article = require('./routes/article');
let users = require('./routes/users')
var usersControllers = require('./controllers/users');
var passport = require('passport');

let db_config = {
  development: 'mongodb://localhost/livecodewisnu',
  test: 'mongodb://localhost/livecodewisnu-test'
}

let app_env = app.settings.env;

mongoose.connect(db_config[app_env], function(err, res) {
  console.log('connected to database ' + db_config[app_env]);
});

var Strategy = require('passport-local').Strategy;
passport.use(new Strategy(usersControllers.signin));

//Corse
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token")
  next()
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

app.use('/article', article);
app.use('/users', users);
app.use('/', index);

app.listen(3000);
console.log('listening to port 3000');

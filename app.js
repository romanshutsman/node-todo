var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupCOntroller = require('./controllers/setupController');
var api = require('./controllers/api')

var port = process.env.PORT || 3000;
const conf = {
    autoIndex: false,
    useNewUrlParser: true,
  };

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnStr(), conf);
setupCOntroller(app);
api(app);

app.listen(port);

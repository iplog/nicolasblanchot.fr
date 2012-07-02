
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var api = require('./routes/api');
var mustacheCompiler = require('./tools/mustache_compiler');
var data = require('./tools/data');

// add data
data.createData();

var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'mustache');
  app.register('.mustache', mustacheCompiler);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

// app.enable("jsonp callback");

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get('/inprogress', routes.underConstruction);
app.get('/categories', api.categories);
app.get('/activities', api.activities);
app.get('/details', api.details);
app.get('/*', routes.error404);

global.isProd = !(!process.env.PORT);

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

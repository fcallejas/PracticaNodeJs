var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

require('./lib/mongoConection');
require('./modelos/Anuncios');
require('./modelos/Usuarios');
const config = require('./conf/config');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/apiV1/anuncios', require('./routes/apiV1/api_anuncios'));
app.use('/apiV1/usuarios', require('./routes/apiV1/usuarios'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.status(err.status || 500);

  if(req.originalUrl.indexOf('/api')=== 0){
    //traducir mensaje
    const lenguaje = req.query.lenguaje;

    if(lenguaje){
      var msg = config.traducir(lenguaje, err.message);
      return res.json({respuesta:false, error:msg});
    }else{
      return res.json({respuesta:false, error:err.message});
    }
  }

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  
  res.render('error');
});

module.exports = app;

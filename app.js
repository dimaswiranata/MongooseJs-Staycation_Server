var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// import method-override untuk method PUT DELETE
const methodOverride = require('method-override');

// import connect-flash
const flash = require('connect-flash');

// import express-session
const session = require('express-session');

// import cors untuk akses API
// import cors untuk akses API
// import cors untuk akses API
const cors = require('cors');

// import mongoose
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://dimaswiranata:staycationserver@cluster0.bzzy3.mongodb.net/db_staycation?retryWrites=true&w=majority', 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// router admin
const adminRouter = require('./routes/admin');
// api router
const apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app use methodOverride
app.use(methodOverride('_method'));

// app use flash
app.use(flash());

// app use session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// add path for sb-admin-2 
app.use('/sb-admin-2', express.static(path.join(__dirname, 'node_modules/startbootstrap-sb-admin-2')));

// cors
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// admin
app.use('/admin', adminRouter);
// api
app.use('/api/v1/member', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

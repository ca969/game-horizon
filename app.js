
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var expressHbs = require("express-handlebars");
var mongoose = require("mongoose");
var session = require("express-session");
var passport = require("passport");
var flash = require("connect-flash");
var validator = require("express-validator");
var MongoStore = require("connect-mongo")(session);

var indexRouter = require("./routes/index");
var userRoutes = require("./routes/user");




var app = express();

// Connect to database
// mongoose.connect("mongodb://localhost:27017/video-game-shop", {
//   useNewUrlParser: true
// });




 mongoose.connect("mongodb+srv://ceyhun456:ceyhun456@gamehorizon-qbkr1.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true
});

// var db = mongoose.connection;

// Load passport.js
require("./config/passport");

// view engine setup
app.engine(".hbs", expressHbs({ defaultLayout: "layout", extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(validator());
app.use(cookieParser());
app.use(
  session({
    secret: "mysupersecret",
    resave: false,
    saveUninitialized: false,
    // Use existing database connection for session
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    // Set the cookie expire time ( in miliseconds )
    cookie: { maxAge: 180 * 60 * 1000 }
  })
);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use("/shopping-cart", express.static(path.join(__dirname, "public")));
// app.use("/shop/",express.static(path.join(__dirname, "public")));
app.use("/shop", express.static(path.join(__dirname, "public")));
app.use("/user", express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));

app.use(function(req, res, next) {
  res.locals.login = req.isAuthenticated();
  // Make the session available in all views
  res.locals.session = req.session;
  next();
});

app.use("/user", userRoutes);
app.use("/", indexRouter);
// app.use("/shop", indexRouter);
// app.use("/shop", indexRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.get('*', function(req, res){
  return res.sendFile(path.join(__dirname + "/public/404.html"));
});


module.exports = app;


// app.listen(process.env.PORT || 3000);
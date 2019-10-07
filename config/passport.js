var passport = require("passport");

var LocalStrategy = require("passport-local").Strategy;
const { validationResult } = require("express-validator");

var User = require("../models/user");

passport.serializeUser(function(user, done) {
  // Store the user in the session
  // Serialize it by id
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true
    },
    function(req, email, password, done) {
      var errors = validationResult(req);
      console.log(Object.entries(errors)[1][1][0]);
      if (Object.entries(errors)[1][1][0]) {
        var messages = [];

        messages.push(Object.entries(errors)[1][1][0].msg);

        return done(null, false, req.flash("error", messages));
      }
      User.findOne({ email: email }, function(err, user) {
        if (err) {
          return done(err);
        } else if (user) {
          return done(null, false, { message: "Email is already in use." });
        }

        var newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.save(function(err, result) {
          if (err) {
            return done(err);
          }

          return done(null, newUser);
        });
      });
    }
  )
);

passport.use(
  "local.login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true
    },
    function(req, email, password, done) {
      var errors = validationResult(req);
      console.log(Object.entries(errors)[1][1][0]);
      if (Object.entries(errors)[1][1][0]) {
        var messages = [];

        messages.push(Object.entries(errors)[1][1][0].msg);

        return done(null, false, req.flash("error", messages));
      }
      User.findOne({ email: email }, function(err, user) {
        if (err) {
          return done(err);
        } else if (!user) {
          return done(null, false, { message: "No user found." });
        } else if (!user.validPassword(password)) {
          return done(null, false, { message: "Wrong password." });

        }

        return done(null, user);
      });
    }
  )
);

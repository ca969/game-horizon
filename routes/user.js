var express = require("express");
var router = express.Router();
var csrf = require("csurf");
var passport = require("passport");
const { check, validationResult } = require("express-validator");

var Cart = require("../models/cart");
var Order = require('../models/order');
var Favorite = require("../models/favorite");
var Library = require("../models/library");

// var mongoose = require("mongoose");
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true
// });

// var db = mongoose.connection;


var csrfProtection = csrf();
router.use(csrfProtection);

/*  VIEWS FOR LOGGED IN USERS  */
/* GET profile page. */
router.get("/profile", isLoggedIn, function(req, res, next) {
  // Compare logged in user with the user from database
  var orderArray = [];
  var favoriteArray = [];
  // Order.find({ user: req.user }, function(err, orders) {
  //   if (err) {
  //     return res.write('Error');
  //   } 
  //   var cart;
  //   orders.forEach(function(order) {
  //     cart = new Cart(order.cart);
  //     // Return an array of the items in the cart
  //     // And store them in the order.items
  //     order.items = cart.generateArray();
  //     // console.log(order)
  //   });
  //   orders.forEach(function(item) {
  //     orderArray.push(item);
  //   });

  //   console.log(orderArray)
    
  // });
  Library.find({user: req.user}, function(err, libraries) {
    if (err) {
      return res.write('Error');
    }
    console.log(libraries)
    var favorite;
    libraries.forEach(function(library) {
      // console.log(library.favorite.items)
      favorite = new Favorite(library.favorite)
      library.favorite.items.forEach(function(each) {
        // favoriteArray.push(each.element.item);
        favoriteArray.push(each);
      })
      library.items = favorite.generateArray();
      // console.log(library.favorite.items[0].element.item);
    })
    console.log(favoriteArray);
    res.render('user/profile', {orders: orderArray, favorites: favoriteArray});
  });
 
 
});

/* LOGOUT */
router.get("/logout", isLoggedIn, function(req, res, next) {
  req.session.favorite = null;
  req.logOut();
  res.redirect("/");
});

/* VIEWS FOR THE NOT LOGGED IN USERS */

/* Check if the user is logged in */
router.use("/", notLoggedIn, function(req, res, next) {
  next();
});

/* GET signup page. */
router.get("/signup", function(req, res, next) {
  var messages = req.flash("error");
  res.render("user/signup", {
    csrfToken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0
  });
});

/* POST signup page. */
router.post(
  "/signup",
  [
    check("email")
      .not()
      .isEmpty()
      .isEmail()
      .withMessage("Invalid email"),
    check("password")
      .not()
      .isEmpty()
      .isLength({ min: 6 })
      .withMessage("Invalid password")
  ],
  passport.authenticate("local.signup", {
    failureRedirect: "/user/signup",
    failureFlash: true
  }) , function(req, res, next) {
    if (req.session.oldUrl) {
      var oldUrl = req.session.oldUrl;
      req.session.oldUrl = null;
      res.redirect(oldUrl);
      
    } else {
      res.redirect('/user/profile');
    }
  }
);

/* GET login page. */
router.get("/login", function(req, res, next) {
  var messages = req.flash("error");
  res.render("user/login", {
    csrfToken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0
  });
});

/* POST login page. */
router.post(
  "/login",
  [
    check("email")
      .not()
      .isEmpty()
      .isEmail()
      .withMessage("Invalid email"),
    check("password")
      .not()
      .isEmpty()
      .isLength({ min: 6 })
      .withMessage("Invalid password")
  ],
  passport.authenticate("local.login", {
    failureRedirect: "/user/login",
    failureFlash: true
  }), function(req, res, next) {
    if (req.session.oldUrl) {
      var oldUrl = req.session.oldUrl;
      req.session.oldUrl = null;
      res.redirect(oldUrl);
     
    } else {
      res.redirect('/user/profile');
    }
  }
);



module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    // Continue
    return next();
  }
  // Otherwise redirect
  res.redirect("/");
}

function notLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    // Continue
    return next();
  }
  // Otherwise redirect
  res.redirect("/");
}

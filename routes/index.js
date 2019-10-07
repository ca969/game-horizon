var express = require("express");
var router = express.Router();

var Product = require("../models/product");

var Cart = require("../models/cart");
var Order = require("../models/order");
var Favorite = require("../models/favorite");
var Library = require("../models/library");

var ObjectId = require("mongodb").ObjectID;

/* GET home page. */
router.get("/", function(req, res, next) {
  var successMsg = req.flash("success")[0];
  // Product.find(function(err, docs) {
  //   var productChunks = [];
  //   var chunkSize = 1;
  //   for (var i = 0; i < docs.length; i += chunkSize) {
  //     productChunks.push(docs.slice(i, i + chunkSize));
  //   }
  //   res.render("shop/index", {
  //     title: "Shopping Cart",
  //     products: productChunks,
  //     successMsg: successMsg,
  //     noMessages: !successMsg
  //   });
  // });
  Product.find(function(err, docs) {
    var homeProductChunks = [];
    var homeChunkSize = 1;
    var specialProductChunks = [];
    var specialChunkSize = 1;
    var newChunks = [];
    var newChunkSize = 1;
    var topChunks = [];
    var topChunkSize = 1;
    var soonChunks = [];
    var soonChunkSize = 1;

    for (var i = 0; i < 4; i += homeChunkSize) {
      homeProductChunks.push(docs.slice(i, i + homeChunkSize));
    }

    for (var j = 4; j < 13; j += specialChunkSize) {
      specialProductChunks.push(docs.slice(j, j + specialChunkSize));
    }

    for (var a = 13; a < 23; a += newChunkSize) {
      newChunks.push(docs.slice(a, a + newChunkSize));
    }

    for (var b = 23; b < 33; b += topChunkSize) {
      topChunks.push(docs.slice(b, b + topChunkSize));
    }

    for (var c = 50; c < 60; c += soonChunkSize) {
      soonChunks.push(docs.slice(c, c + soonChunkSize));
    }
    res.render("shop/index", {
      title: "Video Game Shop",
      homeProducts: homeProductChunks,
      specialProducts: specialProductChunks,
      newProducts: newChunks,
      topProducts: topChunks,
      soonProducts: soonChunks,
      successMsg: successMsg,
      noMessages: !successMsg
    });
  });

  // homeProduct.find(function(err, docs) {
  //   var productChunks = [];
  //   var chunkSize = 1;
  //   for (var i = 0; i < docs.length; i += chunkSize) {
  //     productChunks.push(docs.slice(i, i + chunkSize));
  //   }
  //   res.render("shop/index", {
  //     title: "Shopping Cart",
  //     homeProduct: productChunks,
  //     successMsg: successMsg,
  //     noMessages: !successMsg
  //   });
  // });
});

/* GET shop page */
router.get("/shop", function(req, res, next) {
  Product.find(function(err, docs) {
    var shopProductChunks = [];
    var shopProductChunkSize = 1;
    for (var j = 0; j < 50; j += shopProductChunkSize) {
      shopProductChunks.push(docs.slice(j, j + shopProductChunkSize));
    }
    console.log(shopProductChunks);
    res.render("shop/shop", { shopProducts: shopProductChunks });
  });
});

/* GET product index.  */
router.get("/shop/:name", function(req, res, next) {
  var productName = req.params.name;
  console.log(productName);

  Product.find({ title: `${productName}` }, function(err, product) {
    if (err) {
      return res.redirect("/");
    }

    var productArray = [];
    var newestProduct = product.pop();
    productArray.push(newestProduct);

    console.log(newestProduct);
    console.log(productArray);
    res.render("shop/product-index", { productInfo: productArray });
    // res.status(200).json({ message: "success" });
  });
});


/* SEARCH items */
router.get("/search/:item_name", function(req,res,next) {
  var itemName = req.params.item_name;

  console.log(itemName)

  Product.find({ title: { $regex : ".*"+ itemName +".*", $options:'i' }}, function(err, result) {
    if (err) {
       return res.status(404).json({message: "No match found."})
    } else {
      return res.status(200).json({result: result})
    }
  });

  
})

/* ADD to fav. */
router.get("/add-to-fav/:id", isFavLoggedIn, function(req, res, next) {
  var productId = req.params.id;
  var favorite = new Favorite(req.session.favorite ? req.session.favorite : {});

  Product.findById(productId, function(err, product) {
    if (err) {
      console.log("error");
      return res.redirect("/");
    } else {
      Library.findOne({ user: req.user._id }, function(err, docs) {
        console.log("-----------DOCS------------");
        console.log(docs);
        console.log("-----------------------");

        if (!docs) {
          favorite.add(product, product.id);

          req.session.favorite = favorite;

          var library = new Library({
            user: req.user,
            favorite: favorite
          });
          library.save();
          res.status(200).json({ message: "Item added to favorites" });
          console.log("success");

          // console.log(err)
        } else {
          var matched = false;

          docs.favorite.items.forEach(function(single, index) {
            // var inventory = single.element.item._id;
            var inventory = single._id;
            var incoming = productId;

            console.log(JSON.stringify(inventory) === JSON.stringify(incoming));
            if (JSON.stringify(inventory) === JSON.stringify(incoming)) {
              matched = true;
            }
          });

          if (matched) {
            return res
              .status(409)
              .json({ message: "Item already added to favorites" });
          } else {
            favorite.add(product, product.id);

            req.session.favorite = favorite;
            // console.log(favorite);

            Library.updateOne(
              { user: req.user._id },
              {
                $push: {
                  "favorite.items": favorite.items
                }
              },
              { multi: true },
              function(err, affected) {
                if (err) {
                  console.log(err);
                } else {
                  return res
                    .status(200)
                    .json({ message: "Item added to favorites" });
                }
              }
            );
          }
        }
      });
    }
  });
});

/* REMOVE from fav. */
router.post("/remove-fav/:index/:id", isFavLoggedIn, function(req, res, next) {
  var itemIndex = req.params.index;
  // console.log(itemIndex);
  // console.log(typeof itemIndex);

  var productId = req.params.id;

  Library.updateOne(
    { user: req.user._id },
    {
      $pull: {
        "favorite.items": {
          
            _id: ObjectId(productId)
          
        }
      
        
        
        
      }
    },
    // { multi: true },
    function(err, affected) {
      if (err) {
        console.log(err);
      } else {
        return res.status(200).json({ message: "Item removed from favorites" });
      }
    }
  );

  // var favorite = new Favorite(req.session.favorite ? req.session.favorite : {});

  // Product.findById(productId, function(err, product) {
  //   if (err) {
  //     console.log("error");
  //     return res.redirect("/");
  //   } else {

  // Library.update({ user: req.user._id }, function(err, docs) {
  // //   console.log("-----------DOCS------------");
  // //   console.log(docs);
  // //   console.log("-----------------------");

  // //   console.log(  docs.favorite.items[itemIndex]);

  // //   // docs.favorite.items.splice(itemIndex, 1);
  // //   console.log(docs.favorite.items);

  //   // if (!docs) {
  //   //   favorite.add(product, product.id);

  //   //   req.session.favorite = favorite;

  //   //   var library = new Library({
  //   //     user: req.user,
  //   //     favorite: favorite
  //   //   });
  //   //   library.save();
  //   //   res.status(200).json({ message: "Item added to favorites" });
  //   //   console.log("success");

  //   //   // console.log(err)
  //   // } else {
  //   //   var matched = false;

  //   //   docs.favorite.items.forEach(function(single, index) {
  //   //     var inventory = single.element.item._id;
  //   //     var incoming = productId;

  //   //     console.log(JSON.stringify(inventory) === JSON.stringify(incoming));
  //   //     if (JSON.stringify(inventory) === JSON.stringify(incoming)) {
  //   //       matched = true;
  //   //     }
  //   //   });

  //   //   if (matched) {
  //   //     return res
  //   //       .status(409)
  //   //       .json({ message: "Item already added to favorites" });
  //   //   } else {
  //   //     favorite.add(product, product.id);

  //   //     req.session.favorite = favorite;
  //   //     // console.log(favorite);

  //   //     Library.updateOne(
  //   //       { user: req.user._id },
  //   //       {
  //   //         $push: {
  //   //           "favorite.items": favorite.items
  //   //         }
  //   //       },
  //   //       { multi: true },
  //   //       function(err, affected) {
  //   //         if (err) {
  //   //           console.log(err);
  //   //         } else {
  //   //           return res
  //   //             .status(200)
  //   //             .json({ message: "Item added to favorites" });
  //   //         }
  //   //       }
  //   //     );
  //   //   }

  //   // }
  // });
});

//   });
// });

/* ADD to shopping cart. */
router.get("/add-to-cart/:id", function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product) {
    if (err) {
      console.log("error");
      return res
        .status(500)
        .json({ message: "Failed to add item to cart. Please try again" });
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    return res.status(200).json({ message: "Item added to cart" });
    // res.status(200).json({ message: "success" });
  });
});

/* ADD multiple items to shopping cart. */
router.get("/add-multiple-to-cart/:id/:count", function(req, res, next) {
  var productId = req.params.id;
  var productCount = parseInt(req.params.count);
  var cart1 = new Cart(req.session.cart ? req.session.cart : {});
  console.log(productCount);

  Product.findById(productId, function(err, product) {
    if (err) {
      console.log(err);
      console.log("error");
      return res
        .status(500)
        .json({ message: "Failed to add item to cart. Please try again" });
    }
    cart1.addMultiple(product, product.id, productCount);
    req.session.cart = cart1;
    console.log(req.session.cart);

    return res
      .status(200)
      .json({ message: "Items added to cart", multiple: true });
  });
});

// Remove item
router.get("/remove/:id", function(req, res, next) {
  var productId = req.params.id;
  var cart2 = new Cart(req.session.cart ? req.session.cart : {});

  cart2.removeItem(productId);
  req.session.cart = cart2;
  return res.status(200).json({ message: "Succesfully removed" });
});

// Reduce item quantity by one in the shopping-cart
router.get("/decrement/:id", function(req, res, next) {
  var productId = req.params.id;
  var cart3 = new Cart(req.session.cart ? req.session.cart : {});

  cart3.reduceByOne(productId);
  req.session.cart = cart3;
  return res.status(200).json({ message: "Succesfully decremented" });
});

// Increment item quantity by one in the shopping-cart
router.get("/increment/:id", function(req, res, next) {
  var productId = req.params.id;
  var cart4 = new Cart(req.session.cart ? req.session.cart : {});

  cart4.incrementByOne(productId);
  console.log(cart4);
  req.session.cart = cart4;
  console.log(req.session.cart);
  return res.status(200).json({ message: "Succesfully incremented" });
});

/* GET shopping cart. */
router.get("/shopping-cart", function(req, res, next) {
  if (!req.session.cart) {
    return res.render("shop/shopping-cart", { products: null });
  }
  var cart5 = new Cart(req.session.cart);
  console.log(req.session.cart);
  res.render("shop/shopping-cart", {
    products: cart5.generateArray(),
    totalPrice: cart5.totalPrice

  });
});

/* GET checkout page. */
router.get("/checkout", isLoggedIn, function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect("/shopping-cart");
  }

  var cart6 = new Cart(req.session.cart);
  var errMsg = req.flash("error")[0];
  console.log(req.session.cart);
  console.log(cart6.totalPrice);

  res.render("shop/checkout", {
    total: cart6.totalPrice,
    errMsg: errMsg,
    noError: !errMsg
  });
});

router.get("/shopping-completed", isLoggedIn, function(req, res, next) {
  if (req.session.cart) {
    return res.redirect("/checkout");
  } else {
    Order.findOne({ user: req.user._id }, function(err, docs) {
      if (!docs) {
        return res.redirect("/shop");
      } else {
        res.render("shop/shopping-completed");
      }
    });
  }
});

/* POST checkout page. */
router.post("/checkout", isLoggedIn, function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect("/shopping-cart");
  }

  var cart = new Cart(req.session.cart);
  const keys = require("../config/keys");
  console.log(keys);
  const stripe = require("stripe")(
    'sk_test_nspRAlz13uIp4m0daf5giZcI00Ew5Z2wro'
  );

  // Token is created using Checkout or Elements!
  // Get the payment token ID submitted by the form:
  const token = req.body.stripeToken; // Using Express

  (async () => {
    const charge = await stripe.charges.create(
      {
        amount: cart.totalPrice.toFixed(2) * 100,
        currency: "usd",
        description: "Test2 Charge",
        source: token
      },
      function(err, charge) {
        if (err) {
          req.flash("error", err.message);
          return res.redirect("/checkout");
        }

        var order = new Order({
          user: req.user,
          cart: cart,
          address: req.body.address,
          name: req.body.name,
          surname: req.body.surname,
          paymentId: charge.id,
          completed: true
        });
        order.save(function(err, result) {
          req.flash("success", "Successfully bought product!");
          req.session.cart = null;

          res.redirect("/shopping-completed");
        });
      }
    );
  })();
});

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    // Continue
    return next();
  }
  req.session.oldUrl = req.url;
  // Otherwise redirect
  res.redirect("/user/login");
}

function isFavLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    // Continue
    return next();
  }

  // Otherwise redirect

  res.status(401).json({ message: "Please login to use this feature" });
}

var ui = new UI();

// SELECT SEARCHBAR
var searchBar = document.querySelector("#search-input");







// SEARCH ITEMS
$("#search-input").on("change keyup",function(e) {
  var item_name = $(this).val();

  if (item_name.trim().length === 0) {
    ui.displaySearchResult(null, "No Match Found")
  } 
  else {
    console.log(item_name);
    $.ajax({
      type: "GET",
      url: "/search/" + item_name,
      data: $("#search_input").serialize(),
      success: function(res) {
        ui.displaySearchResult(res.result, null);
        console.log(res.result);
      },
      error: function(xhr) {
        console.log(xhr.responseJSON.message);
        ui.displaySearchResult(null, xhr.responseJSON.message);
      }
    });
    return false;
  }
 
 

})






// ADD TO CART
$(".add-to-cart").on("click", function() {
  var game_id = $(this).attr("game_id");
  $.ajax({
    type: "GET",
    url: "/add-to-cart/" + game_id,
    data: $(".add-to-cart").serialize(),
    success: function(res) {
      ui.displayMessage(res.message);
    },
    error: function(xhr) {
      ui.displayMessage(xhr.responseJSON.message);
    }
  });

  return false;
});

// ADD MULTIPLE ITEMS TO CART
$("#add-multiple-to-cart").on("click", function() {
  var game_id = $(this).attr("game_id");
  var count = parseInt($(".quantity__input").val());
  console.log(typeof count);
  console.log("Multiple");
  $.ajax({
    type: "GET",
    url: "/add-multiple-to-cart/" + game_id + "/" + count,
    data: $("#add-multiple-to-cart").serialize(),
    success: function(res) {
      ui.displayMessage(res.message,"", count, res.multiple);
    },
    error: function(xhr) {
      ui.displayMessage(xhr.responseJSON.message);
    }
  });

  return false;
});


// ADD TO FAVORITES
$(".fav-button").on("click", function() {
  var game_id = $(this).attr("game_id");
  console.log(
    $(this)
      .parent()
      .closest(".carousel-cell")
      .index()
  );
  var index = $(this)
    .parent()
    .closest(".carousel-cell")
    .index();
  $.ajax({
    type: "GET",
    url: "/add-to-fav/" + game_id,
    data: $(".fav-button").serialize(),
    success: function(res) {
      ui.displayMessage(res.message, index);
    },
    error: function(xhr) {
      ui.displayMessage(xhr.responseJSON.message);
    }
  });

  return false;
});


// REMOVE FROM FAVORITES
$(".remove-fav").on("click", function() {
  var game_id = $(this).attr("game_id");
 
  var index = $(this)
  .parent()
  .closest(".list-item")
  .index();

  console.log(index)
  $.ajax({
    type: "POST",
    url: "/remove-fav/" + index + "/" + game_id,
    data: $(".remove-fav").serialize(),
    success: function(res) {
      console.log(res.message);
      ui.displayMessage(res.message, index);
    },
    error: function(xhr) {
      ui.displayMessage(xhr.responseJSON.message);
    }
  });

  return false;
});

// DECREMENT BY ONE
$(".decrement").on("click", function() {
  var game_id = $(this).attr("game_id");
  var index = $(this)
    .parent()
    .closest(".order-info")
    .index();
  // var count = $(this).parent().closest(".order-action-container").children(".order-quantity").children(":first").text();
  // var amount =  $(this).parent().closest(".order-content").find(".amount").text();
  console.log(index);
  $.ajax({
    type: "GET",
    url: "/decrement/" + game_id,
    data: $(".decrement").serialize(),
    success: function(res) {
      ui.orderController(res.message, index);
    },
    error: function(xhr) {
      ui.displayMessage(xhr.responseJSON.message);
    }
  });

  return false;
});

// INCREMENT BY ONE
$(".increment").on("click", function() {
  var game_id = $(this).attr("game_id");
  var index = $(this)
    .parent()
    .closest(".order-info")
    .index();
  // var count = $(this).parent().closest(".order-action-container").children(".order-quantity").children(":first").text();
  // var amount =  $(this).parent().closest(".order-content").find(".amount").text();
  console.log(index);
  $.ajax({
    type: "GET",
    url: "/increment/" + game_id,
    data: $(".increment").serialize(),
    success: function(res) {
      ui.orderController(res.message, index);
    },
    error: function(xhr) {
      ui.displayMessage(xhr.responseJSON.message);
    }
  });

  return false;
});

// REMOVE ITEM
$(".remove-item").on("click", function() {
  var game_id = $(this).attr("game_id");
  var index = $(this)
    .parent()
    .closest(".order-info")
    .index();

  console.log(index);
  $.ajax({
    type: "GET",
    url: "/remove/" + game_id,
    data: $(".remove-item").serialize(),
    success: function(res) {
      ui.orderController(res.message, index);
    },
    error: function(xhr) {
      ui.displayMessage(xhr.responseJSON.message);
    }
  });

  return false;
});

// REDIRECT TO CHECKOUT
$(".checkout-button").on("click", function() {
  // var game_id = $(this).attr("game_id");
  var total = Number(document.querySelector(".total-amount").textContent);
  var message = "Please add item to cart to continue";
  if (total <= 0) {
    ui.displayMessage(message);
  } else {
    window.location.href = "/checkout";
    // $.ajax({
    //   type: "GET",
    //   url: "/checkout/",
    //   data: $(".checkout-button").serialize(),
    //   success: function(res) {
    //     // ui.orderController(res.message, index);
    //     console.log(res.message);
    //   },
    //   error: function(xhr) {
    //     // ui.displayMessage(xhr.responseJSON.message);
    //     console.log(xhr.responseJSON.message)
    //   }
    // });
  }

 
  

  return false;
});

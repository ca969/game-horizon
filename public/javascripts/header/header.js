$(document).ready(function() {
  if (($(".navigation").css("display") == "grid")) {
    $(".hamburger").toggleClass("active");
  } 
 
  // 
  $(".hamburger").click(function() {
   
    $(".hamburger").toggleClass("active");
  });

  
 
});



window.addEventListener('popstate', function(event) {
  // The popstate event is fired each time when the current history entry changes.

  console.log("DIO")
  // var r = confirm("You pressed a Back button! Are you sure?!");

  // if (r == true) {
  //     // Call Back button programmatically as per user confirmation.
  //     history.back();
  //     // Uncomment below line to redirect to the previous page instead.
  //     // window.location = document.referrer // Note: IE11 is not supporting this.
  // } else {
  //     // Stay on the current page.
  //     history.pushState(null, null, window.location.pathname);
  // }

  // history.pushState(null, null, window.location.pathname);

}, false);

var searchBox = document.getElementById("search-input");
var resultBox = document.querySelector(".result-container");
var clicked;




document.addEventListener("click", function(e) {
  if (e.target.className === "result-container" || e.target.className === "game-search-item" ||e.target.className === "search-input") {
    resultBox.style.display = "flex";
  } else {
    resultBox.style.display = "none";
  }
 
  // resultBox.style.display = "none;"
})

// resultBox.addEventListener("click", function() {
  
// })

// searchBox.addEventListener("blur", function() {

//     resultBox.style.display = "none";
// });


$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $(".main-header").addClass("black");
  } else {
    $(".main-header").removeClass("black");
  }
})


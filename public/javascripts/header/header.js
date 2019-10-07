$(document).ready(function() {
  $(".hamburger").click(function() {
    $(".hamburger").toggleClass("active");
  });
});

var searchBox = document.getElementById("search-input");
var resultBox = document.querySelector(".result-container");
var clicked;


// searchBox.addEventListener("focus", function() {

//   resultBox.style.display = "flex";
// });

document.addEventListener("click", function(e) {
  if (e.target.className === "result-container" || e.target.className === "game-search-item" ||e.target.className === "search-input") {
    resultBox.style.display = "flex";
  } else {
    resultBox.style.display = "none";
  }
  console.log(e.target.className);
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


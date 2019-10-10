// REDIRECT TO PRODUCT INDEX PAGE
var productCard = document.querySelectorAll("#shop-product-card");
var tabsCard = document.querySelectorAll(".tabs-item-content");
var homeSlides = document.querySelectorAll(".btn-index");



for (let i = 0; i < productCard.length; i++) {
  productCard[i].addEventListener("click", function(e) {
    redirectToIndex(i);
  });
}


if (tabsCard.length !== 0) {
  for (let j = 0; j < 20; j++) {
    tabsCard[j].addEventListener("click", function(e) {
     fromtTabsToIndex(j);
    });
  }
  
}

for (let z = 0; z < homeSlides.length; z++) {
  homeSlides[z].addEventListener("click", function(e) {
    fromHomeToIndex(z);
  });
}

function redirectToIndex(i) {
  var name = document.querySelectorAll("#shop-name")[i].textContent;
  location.href = `${name}`;
 
}


function fromtTabsToIndex(j) {
  var tabsName = document.querySelectorAll(".text-name")[j].textContent;
  location.href = `shop/${tabsName}`;

}

function fromHomeToIndex(z) {
  var title = document.querySelectorAll(".title")[z].textContent;
  location.href = `shop/${title}`;
 
}



// REDIRECT TO PRODUCT INDEX PAGE
var addMultiple = document.querySelector("#add-multiple-to-cart");

console.log(addMultiple);

if (addMultiple) {
  addMultiple.addEventListener("click", function(e) {
    buyMultiple();
  });
}



function buyMultiple() {
  var game_id = $("#add-multiple-to-cart").attr("game_id");

  var count = parseInt($(".quantity__input").val());
  location.href = "/add-multiple-to-cart/" + game_id + "/"+ count
 
}

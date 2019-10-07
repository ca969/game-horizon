var indexImage = document.querySelector(".index-image");
var indexButtons = document.querySelector(".button-container");
var indexInfo = document.querySelector(".info-container");
var indexPrice = document.querySelector(".price-container");


if (indexImage.src.includes("coming")) {
    indexButtons.style.display = "none";
    indexInfo.style.display = "none";
    indexPrice.innerHTML = "<p>Coming Soon</p>";
    indexPrice.style.fontWeight = "bold";
    indexPrice.style.marginTop = "10%";
    // indexPrice.style.height = "90%";
    indexPrice.style.fontSize = "35px";
}

console.log(indexImage.src);
console.log(indexImage.src.includes("coming"));
console.log(typeof indexImage.src);
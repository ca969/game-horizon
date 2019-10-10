// NAV MENU
$('input.nav-menu-toggle').on('change', function() {
    $('input.nav-menu-toggle').not(this).prop('checked', false);
});


// IN TOP SELLING TAB
// DO NOT DISPLAY DISCOUNT AND OLD PRICE IF THERE ISN'T ONE

setTimeout(function() {
    var oldPrice = document.querySelectorAll(".top-old-price");
    var discount = document.querySelectorAll(".top-discount")
    oldPrice.forEach(function(item) {
        if (item.textContent.length < 2) {
            item.style.display = "none";
        }
       
    });
    discount.forEach(function(element) {
        if (element.textContent.length < 3) {
            element.style.display = "none";
        }
       
    });
   
}, 500);




// ITEM FILTERS
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// init Isotope
$(document).ready(function() {
  var filters = {};
  var filter = "*";
  var rangeFilters = {
    price: { min: 19.99, max: 59.99 }
  };

  var $grid = $(".products-view").isotope({
    itemSelector: ".shop-product-card",
   
    layoutMode: "cellsByRow",
    cellsByRow: {
      columnWidth: ".grid-sizer",
      rowHeight: 350
    },

    filter: function() {
      var $this = $(this);
      var price = $this.attr("data-price");
      var isInPriceRange =
        rangeFilters["price"].min <= price &&
        rangeFilters["price"].max >= price;
     
      return $this.is(filter) && isInPriceRange;
    },
    getSortData: {
      date: function(itemElem) {
        return Date.parse(
          $(itemElem)
            .find(".date")
            .text()
        );
      },
      name: ".name",
    
      price: function(itemElem) {
        return parseFloat(
          $(itemElem)
            .find(".price")
            .text()
        );
      }

    
    }
  });
  var $range = $(".js-range-slider");

  

  function updateSlider(num) {
    var sldmin = +num.from,
      sldmax = +num.to,
      filterGroup = $("#price-slider").attr("data-filter-group");
  
    rangeFilters[filterGroup] = {
      min: sldmin || 0,
      max: sldmax || 100000
    };
    $grid.isotope();
  }

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: 0,
    max: 60,
    step: 1,
    from: 15,
    to: 40,
    prefix: "$",
    onFinish: function(num) {
    
      updateSlider(num);
     
      $grid.isotope();
   
    }
  });



 
  $(".filters").on("click", ".button", function(event) {
  
    var $button = $(event.currentTarget);
    // get group key
    var $buttonGroup = $button.parents(".button-group");
    var filterGroup = $buttonGroup.attr("data-filter-group");
    // set filter for group
    console.log(filterGroup);
    console.log(event.currentTarget);
    filters[filterGroup] = $button.attr("data-filter");
    console.log(filters);
    // combine filters
    filter = concatValues(filters) || "*";
    // set filter for Isotope

    $grid.isotope();
    
  });

  // change is-checked class on buttons
  $(".button-group").each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function(event) {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      var $button = $(event.currentTarget);
      $button.addClass("is-checked");
    });
  });

  // flatten object by concatting values

  function concatValues(obj) {
    var value = "";
    for (var prop in obj) {
      value += obj[prop];
    }

    return value;
  }

  

  // SORT FILTERS
  $(".dropdown-el").on("click", function() {
    var sortByValue = $(this)
      .find(":checked")
      .attr("data-sort-by");
    var priceTracker = $(this)
      .find(":checked")
      .val();
    console.log(priceTracker);
    if (priceTracker === "lowestPrice") {
      $grid.isotope({ sortBy: sortByValue, sortAscending: { price: true } });
    } else if (priceTracker === "highestPrice") {
      $grid.isotope({ sortBy: sortByValue, sortAscending: { price: false } });
    } else if (priceTracker === "releaseDate") {
      $grid.isotope({ sortBy: sortByValue, sortAscending: { date: false } });
    } else if (priceTracker === "alphabetical") {
      $grid.isotope({ sortBy: sortByValue, sortAscending: { name: true } });
    }

    console.log(sortByValue);
    $grid.isotope({ sortBy: sortByValue });
  });
});

$(".dropdown-el").click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).toggleClass("expanded");
  $("#" + $(e.target).attr("for")).prop("checked", true);
});
$(document).click(function() {
  $(".dropdown-el").removeClass("expanded");
});


// Filter Dropdown

$(".ui-group .group-genre").click(function() {
  $(".genres").slideToggle();
});

$(".ui-group .group-platform").click(function() {
  $(".platforms").slideToggle();
});

$(".toggle-filters").on("click", function() {
  $(this).toggleClass("selected");
});


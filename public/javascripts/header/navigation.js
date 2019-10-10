$(".nav-menu-container .hamburger").click(function() {
  $(".nav-list").slideToggle();
  $(".nav-list .sub-nav-list").css("display", "none");
});

$(".nav-list .close-nav").hover(function() {
  $(".nav-list").slideToggle();
});

$(".nav-list .nav-list-item").hover(function() {
  $(".nav-list .sub-nav-list").slideUp();
  $(this)
    .find(".sub-nav-list")
    .stop()
    .slideToggle();
});

$(window).resize(function() {
  if ($(window).width() > 768) {
    $(".nav-list").removeAttr("style");
  }
});



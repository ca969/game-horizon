jQuery(document).ready(function($) {

$(".form-group input").on("focus", function() {
    $(this).addClass("focus");
  });

  $(".form-group input").on("blur", function() {
    if ($(this).val() === "") $(this).removeClass("focus");
  });
}); 

//   $('.lecture').each(function(i){
//     $(this).width($(this).data('views'));
// });
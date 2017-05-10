$(".l-dropdown").hide();

  $(".l-label").click(function() {

    $(".l-dropdown").slideToggle(200);

});

// shows and hides navigation //
//----------------------------//

$('#links').hide();

$('#navigation').click(function(e) {
  
  e.preventDefault();

  $(this).next('#links').slideToggle(400);

  $('#square').toggle();
  $('#arc').toggle();

});

$(".about-meaning").hide();

  $(".about-object").click(function() {

    $(this).next(".about-meaning").slideToggle(200);
    $(this).toggleClass("bg-white");

});
$(".l-dropdown").hide();

  $(".l-label").click(function() {

    $(".l-dropdown").slideToggle(200);

});

// shows and hides navigation //
//----------------------------//

$('#links').hide();

$('#navigation').click(function() {

  $(this).next('#links').slideToggle(400);

});

$(".about-meaning").hide();

  $(".about-object").click(function() {

    $(this).next(".about-meaning").slideToggle(200);
    $(this).toggleClass("bg-white");

});


$(function() {
  $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('#scroll-about').animate({
          scrollTop: $('#scroll-about').scrollTop() + target.offset().top - 150
        }, 1000);
        return false;
      }
    }
  });
});

$(function() {
  $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('#scroll-essay').animate({
          scrollTop: $('#scroll-essay').scrollTop() + target.offset().top - 125
        }, 1000);
        return false;
      }
    }
  });
});

$(function() {
  $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('#scroll-info').animate({
          scrollTop: $('#scroll-info').scrollTop() + target.offset().top - 125
        }, 1000);
        return false;
      }
    }
  });
});
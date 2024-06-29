$(function () {

  /* getting image height for slideshows */
  var window_height = $(window).height();
  var window_width = $(window).width();

  $(".slides figure img")
    .css("max-height", window_height - 50)
    .show();
    
});

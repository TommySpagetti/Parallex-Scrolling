$(window).bind('scroll', function(e) {
  parallaxScroll();
})

function parallaxScroll() {
  var value = $(window).scrollTop();
  $('.layer-1').css('top', 0-value*.6+'px');
  $('.layer-1').css('background-size', 200-value +'px');
  $('.layer-2').css('top', 0-value+'px');
  $('.layer-2').css('background-size', 150-value*.5 +'px');
  $('.img-1').css('bottom', -573+value*.15+'px');
  $('.img-2').css('bottom', -748+value*.5+'px');
}

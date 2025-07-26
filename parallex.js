$(window).bind('scroll', function(e) {
  parallaxScroll();
})

function parallaxScroll() {
  var value = $(window).scrollTop();
  $('.layer-1').css('top', value+'px');
  $('.layer-1').css('background-size', 100-value*.5 +'px');
  if(value*.5 >= 90) {
    $('.layer-1').css('display','none');
  } else if(value <= 90) {
    $('.layer-1').css('display','block');
  }
}

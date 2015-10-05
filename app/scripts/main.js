(function() {
  console.log('RWK!');
})();

$(window).load(function() {
  $('#carousel').flexslider({
    animation: 'slide',
    controlNav: false,
    animationLoop: true,
    slideshow: false,
    itemWidth: 141,
    itemMargin: 10,
    asNavFor: '#slider'
  });

  $('#slider').flexslider({
    animation: 'slide',
    controlNav: false,
    directionNav: false,
    animationLoop: false,
    slideshow: false,
    sync: '#carousel'
  });


  $('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });


// parallax
$('#my-video').backgroundVideo({
    pauseVideoOnViewLoss: false,
    parallaxOptions: {
        effect: 0.9
    }
});

  $(".fancybox").fancybox({
    width		: 660,
    height		: 400
  });
});

$(document).ready(function() {
  $('#mountainTabs a').on('click', function() {
    var thisId = $(this).attr('aria-controls');
    $('#section3 .image-container').css('background-image', 'url("assets/images/'+thisId+'.jpg")');
  })
  $('.mountain-tabs #drop').on('click', function() {
    $('#mountainTabs').toggleClass('open');
  })
  $(document).on('click', function(e) {
    var container = $('#mountainTabs, #drop');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('#mountainTabs').removeClass('open');
    }
  })
  $(".logo-line-right a").on('click', function() {
    var thisId = $(this).attr('data-scroll-id');
    $('html, body').animate({
        scrollTop: $('#'+thisId).offset().top
    }, 800);
  });

  $('#slider').carouFredSel({
    responsive: true,
    width: '100%',
    height: 130,
    scroll: 1,
    pagination: "#pager",
    mousewheel: true,
    swipe: {
      onMouse: true,
      onTouch: true
    },
    items: {
      width: 300,
      visible: {
        min: 1,
        max: 6
      }
    },
    auto: {
      pauseOnHover: 'resume',
    }
  });
});


  $(window).load(function() {
  $(".before-after").twentytwenty({
    before_label: 'Без скинали',
    after_label: 'Со скинали',
  });
  $(".before-slider").slick({
    draggable: false,
    dots: true,
    dotsClass: 'before-slider_dots',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right'),
  });
  
  /*$('.menu-button').on('click', function(){
    $('.menu').toggleClass('menu_active');
  });*/

  $('.burger, .menu_nav>a').click(function() {
    $('.burger').toggleClass('open');
    $('.menu').toggleClass('menu_active');
  });

  $('.select').on('click', function(){
    $('.select_dropdown').toggleClass('select_dropdown_open');
  });

  $('.select_option').on('click', function(){
    var value = $(this).attr('data-value');
    $('#select_type').val(value);
    $('.select_checked').text(value);
    $('.select_dropdown').toggleClass('select_dropdown_open');
  });


  /* Настройки select */

});

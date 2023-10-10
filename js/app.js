// Initialize Wow
new WOW().init();

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  });

  $('.multiple-items-02').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.multiple-items-03').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
     arrows: false,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
  });
    
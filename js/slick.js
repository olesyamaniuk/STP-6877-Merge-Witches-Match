$(function () {
  $('.gallery__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: '.gallery-button-left',
    nextArrow: '.gallery-button-right',
  });
});

$(function () {
  $('.reviews__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    // autoplay: true,
    // autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    // centerMode: true,
    cssEase: 'linear',
    prevArrow: '.reviews-button-left',
    nextArrow: '.reviews-button-right',
  });
});

$(function () {
  $('.advantages__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: 'linear',
  });
});



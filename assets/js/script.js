$(document).ready(() => {
    $('.slider').slick({
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    })

    $('.menu, .close').click(e => {
        $('nav').toggleClass('showNav');
    })
})
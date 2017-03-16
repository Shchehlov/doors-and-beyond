$(document).ready(function(){
    $('.product-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });
});
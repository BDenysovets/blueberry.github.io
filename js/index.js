$(document).ready(function(){
    $('.section-testimonials__list').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '150px',
                slidesToShow: 1
                }
            },
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1
            }
        }
        ]
    });
});

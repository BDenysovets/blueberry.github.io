$(document).ready(function(){
    $('.seasons-list').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 500,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 5
                }
            },
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 4
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
            }
        }
        ]
    });
});

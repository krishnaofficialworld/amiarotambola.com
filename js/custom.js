/*============Popup=========================*/
$(window).on('load', function() {
        $('#pageLoadPopup').modal('show');
});


/*=============== Home-carousel ===============*/
$(document).ready(function() {
    $('.home-carousel').owlCarousel({
        loop: true,
            margin: 10,
            nav: true,
            dots:true,
            loop: true,
            autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
            responsiveClass: true,
            navText: ['<span class="fal fa-angle-left fa-2x"></span>','<span class="fal fa-angle-right fa-2x"></span>'],
            responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
                margin: 20
            },

            1366: {
                items: 1,
                margin: 20
            }
        }
    })
})
/*=============== Home-carousel end ===============*/


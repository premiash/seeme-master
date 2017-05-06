(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - with jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 500
        }
    })

    // custom hamburger animation
    var hamburger = $('#menu-btn');

    hamburger.on('click', function(e) {
        e.preventDefault();
        if (hamburger.hasClass('open')) {
            hamburger.removeClass('open');
            hamburger.addClass('close');
        } else {
            hamburger.removeClass('close');
            hamburger.addClass('open');
        }
    });
})(jQuery); // End of use strict
$(window).on('load', function() {
    var $slides = $(".slide");
    var $slideAnchors = $(".menu-item").parent();


    $("#logo").click(function() {
        toggleRain();
    });

    $(".menu-item").click(function() {
        var slideID = $(this).attr('id');
        var slideName = slideID.substr(0, slideID.length - 7);
        showSlide(slideName);
    });

    function showSlide(slideName) {
        // cache the elements for performance reasons.
        var $slide = $('#' + slideName + '-container');
        var $slideItem = $('#' + slideName + '-anchor').parent();

        if (!$slide.hasClass('slide-active')) {
            $slides.removeClass('slide-active');
            $slideAnchors.removeClass('active');

            $slide.addClass('slide-active');
            $slideItem.addClass('active');
        }
    }
});

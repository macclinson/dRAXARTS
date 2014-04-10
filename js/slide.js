// Slider for home page
jQuery (function () {
    var slideDefaultInterval = 6000;
    var interval;
    var sliderUl = $('#home-slider');
    var lis = sliderUl.find('li');
    var currentIndex = 0;
    var selectorContainer = $('#slide-selector');
    var selectors;
    
    // Identify all slides
    lis.each(function (i) {
        $(this).data('index', i);
        selectorContainer.append($('<span>').data('index', i));
    });
    
    selectors = selectorContainer.find('span');
    sliderUl.width(lis.width() * lis.length);
    setSlide(0);
    
    interval = setInterval(function () {
        setSlide((currentIndex + 1) % lis.length);
    }, slideDefaultInterval);
    
    selectorContainer.delegate('span', 'click', function () {
        setSlide($(this).data('index'));
        
        // Disable autoscroll
        clearInterval(interval);
    });
    
    function setSlide (index) {
        var left = -index * lis.width();
        var anim = {duration: 300};
        sliderUl.animate({left: left}, anim);
        selectors.removeClass('active-slide-selected');
        $(selectors[index]).addClass('active-slide-selected');
        currentIndex = index;
    }
    
    $(window).resize(function (e) {
        // When window was resized, the lis are going to be resized too...
        // so we need to reprogram
        setSlide(currentIndex % lis.length);
    });
});

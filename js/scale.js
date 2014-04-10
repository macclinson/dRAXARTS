jQuery(function ($) {
    resizeImages();
    
    $('#home-slider img').load(resizeImages);
    $(window).resize(resizeImages);
});

function resizeImages () {
    var imgs = $('#home-slider img');
    var win = $('#wrapper > .slide');
    var width = win.width();
    var height = win.height();
    
    // For every image...
    imgs.each(function () {
        var img = $(this);
        
        // What shall we resize?
        var widthRatio = img.width() / width;
        var heightRatio = img.height() / height;
        var lowerRatio = Math.min(widthRatio, heightRatio);
        
        img.removeAttr('width').removeAttr('height');
        
        if(widthRatio === lowerRatio) {
            img.attr('width', width);
        } else {
            img.attr('height', height);
        }
        
        // Center
        img.css('top', /*(height - img.height()) / 2*/ 0); // The top of the image should always be visible
        img.css('left', (width - img.width()) / 2);
    });
}


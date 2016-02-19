'use strict';

$(function() {
    
    //configuretion
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;
    
    //cache DOM
    var $sliderr = $('#sliderr');
    var $slideeContainer = $sliderr.find('.slidess');
    var $slidess = $slideeContainer.find('.slidee');
    
    var interval;
    
    function startSlider() {
        interval = setInterval(function() {
            $slideeContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                currentSlide++;
                if (currentSlide === $slidess.length) {
                    currentSlide = 1;
                    $slideeContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    
    function stopSlider() {
        clearInterval(interval);
    } 
    
    $sliderr.on('mouseenter', stopSlider).on('mouseleave', startSlider);
    
    startSlider();
    
})
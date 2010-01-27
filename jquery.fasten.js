/**
 * jQuery.fasten - dynamic fixed positioning plugin
 *
 * version 0.5.0
 *
 * http://michaelmonteleone.net/projects/fasten
 * http://github.com/mmonteleone/jquery.fasten
 *
 * Copyright (c) 2009 Michael Monteleone
 * Licensed under terms of the MIT License (README.markdown)
 */
(function($){                
    $.fn.fasten = function(options) {
        var settings = $.extend({}, $.fn.fasten.defaults, options || {});        

        return this.each(function(){
            var elm = $(this),
                top = elm.offset().top - settings.padding,
                isFixed = false,
                parent = $(window),
                defaultTop = elm.css('top'),
                defaultPosition = elm.css('position');

            parent.bind('scroll', function(){
                var shouldBeFixed = parent.scrollTop() >= top;
                if(shouldBeFixed && !isFixed) {
                    isFixed = true;
                    elm.css({position:'fixed', top: settings.padding +'px'});
                    elm.trigger('fasten');
                } else if(!shouldBeFixed && isFixed) {
                    isFixed = false;
                    elm.css({position: defaultPosition, top: defaultTop});
                    elm.trigger('unfasten');
                }
            });
        });
    };
    $.extend($.fn.fasten, {
        version: '0.5.0',
        defaults: {
            // The distance in pixels from the viewport boundary at which to apply a fixed position to the element.
            padding: 10
        }
    });
})(jQuery);
;(function ($) {
    'use strict';

    $.widget('bvforme.scollLink', {
        _create: function () {
            this._initPlugins();
            this._initEvents();
        },

        _initEvents: function () {
            this._on({
                'click': function(e) {
                    e.preventDefault();
                    
                    var $el = $(e.currentTarget);
                    var target = $el.attr('href');
                    var $target = $(target);

                    if ($target.length) {
                        $('html, body').stop().animate({
                            'scrollTop': $target.offset().top
                        }, 900);
                    }
                }
            });
        },

        _initPlugins: function () {
        }
    });
})(jQuery);

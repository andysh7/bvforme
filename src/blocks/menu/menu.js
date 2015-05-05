;(function ($) {
    'use strict';

    $.widget('bvforme.menu', {
        options: {
        },

        _create: function () {
            this.$menuLinks = this.element.find('.menu__link');

            this._initPlugins();
            this._initEvents();
        },

        _initEvents: function () {
            this._on(this.$menuLinks, {
                'click': function(e) {
                    e.preventDefault();
                    
                    var $el = $(e.currentTarget);
                    var target = $el.attr('href');
                    var $target = $('#' + target);

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

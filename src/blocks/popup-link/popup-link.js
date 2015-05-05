;(function ($) {
    'use strict';

    $.widget('bvforme.popupLink', {
        _create: function () {
            this._initPlugins();
            this._initEvents();
        },

        _initEvents: function () {
            this._on({
                'click': function(e) {
                    e.preventDefault();
                    this.element.magnificPopup('open');
                }
            });
        },

        _initPlugins: function () {
            this.element.magnificPopup({
              type:'inline',
              midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
            });
        }
    });
})(jQuery);

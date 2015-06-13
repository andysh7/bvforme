;(function ($) {
    'use strict';

    $.widget('bvforme.aboutActions', {

        _create: function () {
            this.$links = this.element.find('.about-actions__link');
            this.magnificPopup = $.magnificPopup.instance;

            this._initEvents();
            this._initPlugins();
        },

        _initEvents: function () {
        },

        _initPlugins: function () {            
            this.$links.magnificPopup({
                type: 'image',
                mainClass: '_gallery _docs',
                image: {
                    markup: '<div class="mfp-figure">' +
                                '<div class="mfp-close"></div>' +
                                '<button class="mfp-prev"></button>' +
                                '<button class="mfp-next"></button>' +
                                '<div class="mfp-img"></div>' +
                                '<div class="mfp-bottom-bar">' +
                                    '<div class="mfp-title"></div>' +
                                '</div>' +
                            '</div>',
                    titleSrc: 'title',
                    verticalFit: false,
                    tError: '<a href="%url%">Изображение</a> не может быть загружено.'
                },
                fixedContentPos: true,
                fixedBgPos: true,
                gallery:{
                    enabled: false
                }
            });
        }
    });

})(jQuery);

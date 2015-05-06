;(function ($) {
    'use strict';

    $.widget('bvforme.gallery', {

        _create: function () {
            this.$photos = this.element.find('.gallery__photos');
            this.$items = this.element.find('.gallery__item');
            this.$images = this.element.find('.gallery__photo');
            this.magnificPopup = $.magnificPopup.instance;

            this._initPlugins();
            this._initEvents();
        },

        _initEvents: function () {
            var that = this;
            
            this._on(this.document, {
                'click .mfp-prev': function(e) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    that.magnificPopup.prev();
                },
                'click .mfp-next': function(e) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    that.magnificPopup.next();
                }
            });
        },

        _initPlugins: function () {

            this.$photos.slick({
                slidesToShow: 1,
                infinite: false
            });

            this.$images.magnificPopup({
                type: 'image',
                closeBtnInside: true,
                closeOnContentClick: false,
                closeOnBgClick: false,
                closeMarkup: '<button title="%title%" class="mfp-close _gallery"><i class="mfp-close-icn">&times;</i></button>',
                image: {
                    markup: '<div class="mfp-figure">'+
                            '<div class="mfp-close"></div>'+
                            '<div class="mfp-img"></div>'+
                                '<div class="mfp-bottom-bar">'+
                                    '<div class="mfp-title"></div>'+
                                '</div>'+
                            '</div>'+
                            '<button class="mfp-prev"></button>'+
                            '<button class="mfp-next"></button>'
                          , // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
                    titleSrc: 'title',
                    verticalFit: false,
                    tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
                },
                gallery:{
                    enabled:true
                }
            });
        }
    });
})(jQuery);

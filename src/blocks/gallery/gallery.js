;(function ($) {
    'use strict';

    $.widget('bvforme.gallery', {

        _create: function () {
            this.$photos = this.element.find('.gallery__photos');
            this.$items = this.element.find('.gallery__item');
            this.$images = this.element.find('.gallery__photo');
            this.magnificPopup = $.magnificPopup.instance;

            this._initEvents();
            this._initPlugins();
        },

        _initEvents: function () {
            var that = this;

            this.$photos.on('init', function(event, slick, direction){
              that.$photos.css({overflow: 'visible'});
            });

            if (!isMobile.any) {
                $(document).on('click', '.mfp-prev', function(e) {
                    e.preventDefault();
                    that.magnificPopup.prev();
                });

                $(document).on('click', '.mfp-next', function(e) {
                    e.preventDefault();
                    that.magnificPopup.next();
                });
            }
        },

        _initPlugins: function () {

            this.$photos.slick({
                slidesToShow: 1,
                infinite: false
            });

            if (!isMobile.any) {
                this.$images.magnificPopup({
                    type: 'image',
                    mainClass: '_gallery',
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
                        enabled:true
                    }
                });
            }
        }

    });
})(jQuery);

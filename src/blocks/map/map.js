;(function ($) {
    'use strict';

    var myMap;

    $.widget('bvforme.map', {
        _create: function () {
            this.$mapContainer = this.$container;

            this._initPlugins();
            this._initEvents();
        },

        _initEvents: function () {
            this._on({
            });
        },

        _initPlugins: function () {
            // Дождёмся загрузки API и готовности DOM.
            ymaps.ready(this._initMap);
        },

        _initMap: function() {
            // Создание экземпляра карты и его привязка к контейнеру с
            // заданным id ("map").
            myMap = new ymaps.Map('map', {
                // При инициализации карты обязательно нужно указать
                // её центр и коэффициент масштабирования.
                center: [55.76, 37.64], // Москва
                zoom: 10,
                controls: ['geolocationControl', 'zoomControl']
            });

            myMap.behaviors.disable('scrollZoom');
        }
    });
})(jQuery);

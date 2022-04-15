// map
const BREAKPOINT = 1280;


if ($('.where-buy').length) {
  try {
    ymaps.ready(() => {
      // vars
      const markWidth = 33;
      const markHeight = 45;  

      // init
      const map = new ymaps.Map(
        'map',
        {
          center: [55.749175531624125, 37.61820806388663],
          zoom: 15,
          controls: [],
        },
        {
          maxZoom: 22,
        },
        
      );

      const clusterer = new ymaps.Clusterer({
        clusterIconLayout: ymaps.templateLayoutFactory.createClass('<div class="cluster">{{ properties.geoObjects.length }}</div>'),
        clusterIconShape: {
          type: 'Rectangle',
          coordinates: [[0, 0], [50, 50]]
        },
      })

      // добавление точек
      const placemarks = [];

      $(".placemarks__item").each(function () {
        // данные
        const balloon = $(this).find(".placemarks__balloon").text().trim();
        const latitude = $(this).find(".placemarks__latitude").text().trim();
        const longitude = $(this).find(".placemarks__longitude").text().trim();
        const id = $(this).data('modal-id')

        // placemark
        const coordinates = [latitude, longitude];
        const placemark = new ymaps.Placemark(
          coordinates,
          {
            balloon,
          },
          {
            iconLayout: "default#image",
            // iconImageHref: "/local/templates/main/assets/images/svg/map/placemark.svg",
            iconImageHref: "/assets/images/svg/placemark.svg",
            iconImageSize: [markWidth, markHeight],
            iconImageOffset: [-markWidth / 2, -80],

            balloonPanelMaxMapArea: 0,
            hideIconOnBalloonOpen: false,
          }
        );
        placemark.events.add(['click'], () => {
          $.fancybox.defaults.animationEffect = 'left'
          $.fancybox.defaults.animationDuration = 800
          $.fancybox.defaults.afterShow = function(instance, slide) {
            $(slide.src).closest('.fancybox-container').addClass('open')
            $(slide.src).addClass('active')
          }
          $.fancybox.defaults.beforeClose = function(instance, slide) {
            $(slide.src).removeClass('active')
          }
          $.fancybox.open($(`[data-map-modal=${id}]`))
        })
        placemarks.push(placemark);
      });

      // добавление на карту
      clusterer.add(placemarks)
      map.geoObjects.add(clusterer)

      // позиционирование на точках
      map
        .setBounds(clusterer.getBounds(), {
          zoomMargin: Math.max(markWidth, markHeight),
        })
        .then(() => {
          if (items.length === 1) {
            map.setZoom(12);
          }
        });
    })
  } catch (err) {
    console.error(err)
  }
}
// map
const BREAKPOINT = 1280;

export function initMap() {
  if ($('#map').length) {
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
            controls: []
          },
          {
            maxZoom: 22,
          },
        );

        map.controls.add('zoomControl', {
          float: 'none',
          position: {
            top: '150px',
            left: '20px'
          }
        })

        map.controls.add('geolocationControl', {
          float: 'none',
          position: {
            top: '20px',
            left: '20px'
          }
        })

        const clusterer = new ymaps.Clusterer({
          clusterIconLayout: ymaps.templateLayoutFactory.createClass('<div class="cluster">{{ properties.geoObjects.length }}</div>'),
          clusterIconShape: {
            type: 'Rectangle',
            coordinates: [[0, 0], [50, 50]]
          },
        })

        // zoom
        map.behaviors.disable('scrollZoom');

        // добавление точек
        const placemarks = [];
        let requests = []

        $('.placemarks__address').each(function() {
          requests.push(ymaps.geocode($(this).text().trim()))
        })

        Promise.all(requests)
          .then(
            function(res) {
              res.forEach((item, i) => {
                const coordinates = item.geoObjects.get(0).geometry.getCoordinates()
                const id = $('.placemarks__item').eq(i).data('modal-id')
                const modalId = $('.placemarks__item').eq(i).data('item')

                const placemark = new ymaps.Placemark(
                  coordinates,
                  {},
                  {
                    iconLayout: "default#image",
                    // iconImageHref: "/local/templates/main/assets/images/svg/placemark.svg",
                    iconImageHref: "assets/images/svg/placemark.svg",
                    iconImageSize: [markWidth, markHeight],
                    iconImageOffset: [-markWidth / 2, -80],
      
                    balloonPanelMaxMapArea: 0,
                    hideIconOnBalloonOpen: false,
                  }
                );
                placemark.events.add(['click'], () => {
                  window.dispatchEvent(new CustomEvent('mapModalOpen', {detail: {modalId: modalId,}}));
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
              })

              // добавление на карту
              clusterer.add(placemarks)
              map.geoObjects.add(clusterer)

              // позиционирование на точках
              map
                .setBounds(clusterer.getBounds(), {
                  zoomMargin: Math.max(markWidth, markHeight),
                })
                .then(() => {
                  if (placemarks.length === 1) {
                    map.setZoom(12);
                  }
                });
            }
          )
      })
    } catch (err) {
      console.error(err)
    }
  }
}

initMap()
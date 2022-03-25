import Swiper from 'swiper/bundle';

const BREAKPOINT = 1280;

// swiper 
{
  $(window).on('load', () => {
    const slider = $('[data-slider-id]');

    if (slider.length !== 0) {
      slider.each(function () {
        const slider_el = $(this);
        const slider_id = slider_el.data('slider-id');
        const slider_prev_id = slider_el.data('slider-prev');
        const slider_next_id = slider_el.data('slider-next');
        const slider_prev = $(`[data-slider-button="${slider_prev_id}"]`);
        const slider_next = $(`[data-slider-button="${slider_next_id}"]`);

        let slider_options = {
          slidesPerView: 'auto',

          spaceBetween: 20,

          // breakpoints: {
          //   [BREAKPOINT]: {
          //     spaceBetween: 20,
          //   },
          // },
        };

        switch (slider_id) {
          case 3:
          slider_options = {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 12,
            centeredSlides: true,
          }
            break;
          case 10:
            slider_options = {
              // ...slider_options,
              slidesPerView: 'auto',
              spaceBetween: 150,
              loop: true,
              centeredSlides: true,
            }
            break;
          case 21:
            slider_options = {
              // ...slider_options,
              slidesPerView: 'auto',
              spaceBetween: 20,
              loop: true,
            }
        }

        const slider_swiper = new Swiper(slider_el[0], slider_options);

        slider_prev.on('click', () => {
          slider_swiper.slidePrev();
        });
        slider_next.on('click', () => {
          slider_swiper.slideNext();
        });
      });
    }
  });
}

import Swiper from "swiper"

{
  $(window).on('load', () => {
    const slider = $('[data-about-slider]')

    if (slider.length) {
      const swiperContainer = slider.find('.swiper-container')
      const sliderNext = slider.find('[data-about-next]')
      const sliderPrev = slider.find('[data-about-prev]')

      const swiper = new Swiper(swiperContainer[0], {
        slidesPerView: 'auto',
        spaceBetween: 20,
        slidesPerGroup: 2,
        allowTouchMove: false,
        loopFillGroupWithBlank: true,
        loop: true,
        speed: 300,
      })

      sliderNext.on('click', () => {
        swiper.slideNext()
      });
      sliderPrev.on('click', () => {
        swiper.slidePrev()
      });

      let currentElem = null

      slider.on('mouseover', event => {
        if (currentElem) return;

        let target = $(event.target).closest('.about-page__slider-slide');

        if (!target.length) return;

        const index = target.closest('.swiper-slide').index() - swiper.activeIndex

        if (index === 5) {
          currentElem = target
          currentElem.addClass('active')
          setTimeout(() => {
            swiper.slideNext(750)
            
          }, 250);
        } else if (index) {
          console.log(swiper.activeIndex);
          // let i = swiper.activeIndex + 1
          // // console.log(swiper);
          // swiper.slideTo(5, 300, false)
        }
        currentElem = target
        currentElem.addClass('active')
      })

      slider.on('mouseout', event => {
        if (!currentElem) return;

        let relatedTarget = $(event.relatedTarget).closest('.about-page__slider-slide')

        if (relatedTarget[0] !== currentElem[0]) {
          currentElem.removeClass('active')
        } 
        
        currentElem = null;
      })
    }
  })
}
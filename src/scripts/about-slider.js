import Swiper from "swiper"
import {mediaQuery} from './mediaQueries'

{
  $(window).on('load', () => {
    const slider = $('[data-about-slider]')

    if (slider.length) {
      let swiperContainer
      let swiper

      if (mediaQuery.matches) {
        swiperContainer = slider.find('[data-slider-desktop]')
        const sliderNext = slider.find('[data-about-next]')
        const sliderPrev = slider.find('[data-about-prev]')
  
        swiper = new Swiper(swiperContainer[0], {
          slidesPerView: 'auto',
          spaceBetween: 0,
          slidesPerGroup: 2,
          allowTouchMove: false,
          speed: 500,
        })
  
        sliderNext.on('click', () => {
          swiper.slideNext()
        });
        sliderPrev.on('click', () => {
          swiper.slidePrev()
        });
  
        let currentElem = null
        let index
        const sliderParent = $('[data-slider-parent]')
  
        swiperContainer.on('mouseover', event => {
          if (currentElem) return;
  
          let target = $(event.target).closest('.about-page__slider-slide');
  
          if (!target.length) return;
  
          index = target.closest('.swiper-slide').index() - swiper.activeIndex
  
          if (index === 5) {
            sliderParent.addClass('left')
          } else if (index) {
            sliderParent.addClass('center')
          }
  
          currentElem = target
          currentElem.addClass('active')
        })
  
        swiperContainer.on('mouseout', event => {
          if (!currentElem) return;
  
          let relatedTarget = $(event.relatedTarget).closest('.about-page__slider-slide')
  
          if (relatedTarget[0] !== currentElem[0]) {
            currentElem.removeClass('active')
          } 
  
          if (index === 5) {
            sliderParent.removeClass('left')
          } else if (index) {
            sliderParent.removeClass('center')
          }
          
          currentElem = null;
        })
      } else {
        swiperContainer = slider.find('[data-slider-mobile]')

        swiper = new Swiper(swiperContainer[0], {
          slidesPerView: 'auto',
          spaceBetween: 12,
          centeredSlides: true,
        })
      }

      //progress
      const slides = swiperContainer.find('.swiper-slide')
      const progress = $('[data-slider-progress]')
      let width

      if (mediaQuery.matches) {
        const count = slides.length % 2

        width = 100 / (((slides.length - 6) + count) / 2 + 1) 
      } else {
        width = 100 / slides.length
      }

      progress.css('width', `${width}%`)

      let prevProgress = swiper.progress
      let value = 0

      swiper.on("slideChange", function() {
        const currentProgress = swiper.progress

        if (prevProgress < currentProgress) {
          value += 100
        } 

        if (prevProgress > currentProgress) {
          value -= 100
        }

        progress.css('transform', `translateX(${value}%)`)
        prevProgress = currentProgress
      })
    }
  })
}
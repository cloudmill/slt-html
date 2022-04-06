{
  $(() => {
    const index = {
      before: {
        active: 0,
      },
      after: {}
    }
    const DELAY = 600

    const slider = $('.main-page__slider')

    if (slider.length !== 0) {
      const sliderControl = slider.find('.slider-buttons__item')
      const sliderCol = slider.find('.main-page__slider-col')
      const template = slider.find('.template')
      const templateSlide = template.find('.main-page__slider-frame')
      const templateTitle = template.find('.main-page__slider-title')

      sliderCol.each(function (i) {
        const col = $(this)
        const wrapper = col.find('.main-page__slider-wrapper')
        wrapper.append(templateTitle.eq(i).clone().addClass('active'))
        const container = col.find('.main-page__slider-container')
        container.append(templateSlide.eq(i).clone().addClass('active'))

        let num = 0

        sliderControl.on('click', function () {
          const dataTarget = $(this).data('slider-arrow')
          const slidesActive = container.find('.main-page__slider-frame.active')

          index.before.active = getRealIndex(i + num, templateSlide.length)
          index.before.left = getRealIndex(index.before.active - 1, templateSlide.length)
          index.before.right = getRealIndex(index.before.active + 1, templateSlide.length)

          function getRealIndex(index, length) {
            return (length + index) % length
          }
          let delta

          if (dataTarget === 'prev') {
            num--
            delta = -1
            container.prepend(templateSlide.eq(index.before.left).clone().addClass('left'))
          } else {
            delta = 1
            num++
            container.append(templateSlide.eq(index.before.right).clone().addClass('right'))
          }

          index.after.active = getRealIndex(index.before.active + delta, templateSlide.length)

          slider.css('pointer-events', 'none')
          wrapper.append(templateTitle.eq(index.after.active).clone())

          const slidesTitle = col.find('.main-page__slider-title')
          const slides = container.find('.main-page__slider-frame')

          slidesTitle.removeClass('active')

          setTimeout(() => {
            slides.removeClass('left right')
            slides.eq(slidesActive.index() + delta).addClass('active front')
          })

          setTimeout(() => {
            slidesTitle.eq(1).addClass('active')
            slidesTitle.eq(0).remove()
            slides.eq(slidesActive.index() + delta).removeClass('front')
            slides.eq(slidesActive.index()).remove()
            slider.css('pointer-events', '')
          }, DELAY)
        })
      })
    }
  });
}
import { mediaQuery } from './mediaQueries'

// scroll
{
  $(() => {

    if (mediaQuery.matches) {

      const header = $('.header')
  
      const fps = 120
  
      let scrollTop = $(window).scrollTop()
  
      $(window).one('scroll', scroll)
  
      function scroll() {
        update()
  
        setTimeout(() => {
          update()
  
          $(window).one('scroll', scroll)
        }, 1000 / fps)
      }
  
      function update() {
        const newScrollTop = $(window).scrollTop()
  
        if (Math.abs(scrollTop - newScrollTop) >= 1) {
          if (newScrollTop > scrollTop) {
            header.addClass('header--up')
          } else {
            header.removeClass('header--up')
          }
        }
  
        if (scrollTop < 1) {
          header.removeClass('header--up')
        }
  
        if ($('[data-header-transparent]').length) {
          if (scrollTop < 1) {
            header.addClass('header--transparent')
          } else {
            header.removeClass('header--transparent')
          }
        }
  
        scrollTop = newScrollTop
      }
    }
  });
}


// desktop header accordion
{
  $(() => {

    if (mediaQuery.matches) {
      const header = $('.header')
      const headerButton = header.find('[data-accordion-header]')
      const modals = header.find('[data-header-modal]')
  
      const stateManager = {
        closeAll: () => {
          modals.slideUp()
          headerButton.removeClass('active')
        },
        classRemove: () => {
          $('.body').removeClass('body--hidden')
          $('.header__panel').removeClass('header__panel--active')
          $('.header__nav').removeClass('header__nav--active')
        }
      }
  
      window.addEventListener('click', event => {
        const button = event.target.closest('[data-accordion-header]')
  
        if (button) {
          const id = button.getAttribute('data-accordion-header')
  
          if (button.classList.contains('active')) {
            button.classList.remove('active')
            $(`[data-header-modal=${id}]`).slideUp()
            stateManager.classRemove()
          } else {
            stateManager.closeAll()
  
            button.classList.add('active')
            $('.body').addClass('body--hidden')
            $('.header__panel').addClass('header__panel--active')
            $(`[data-header-modal=${id}]`).slideDown()
            $('.header__nav').addClass('header__nav--active')
          }
        }
  
        if (event.target.classList.contains('header__panel-overlay')) {
          stateManager.closeAll()
          stateManager.classRemove()
        }
      })
    }
  })
}
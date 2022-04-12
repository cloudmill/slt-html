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

// catalog cards img change
{
  $(() => {
    const cards = $('.catalog-card')

    cards.each(function() {
      let currentElem = null
      let index
      const images = $(this).find('[data-category-img]')

      $(this).on('mouseover', event => {
        if (currentElem) return;

        let target = $(event.target).closest('[data-header-category]');

        if (!target.length) return;

        index = target.index()
        currentElem = target
        
        images.eq(index).addClass('active')
      })

      $(this).on('mouseout', event => {
        if (!currentElem) return;

        let relatedTarget = $(event.relatedTarget).closest('[data-header-category]')
        
        if (relatedTarget[0] !== currentElem[0]) {
          currentElem.removeClass('active')
          images.eq(index).removeClass('active')
        } 
        
        currentElem = null;
      })
    })
  })
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
          modals.removeClass('active')
          headerButton.removeClass('active')
          modals.slideUp(500)
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
          const headerModal = $(`[data-header-modal=${id}]`)
  
          if (button.classList.contains('active')) {
            button.classList.remove('active')
            headerModal.slideUp(500)
            headerModal.removeClass('active')
            stateManager.classRemove()
          } else {
            stateManager.closeAll()
  
            button.classList.add('active')
            $('.body').addClass('body--hidden')
            $('.header__panel').addClass('header__panel--active')
            headerModal.slideDown(500)
            headerModal.addClass('active')
            
            if (id !== 'cards') {
              $('.header__nav').addClass('header__nav--active')
            } else {
              $('.header__nav').removeClass('header__nav--active')
            }
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

// header сервисы расчета
{
  document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('[data-header-menu]')
    const button = menu.querySelector('[data-header-button]')
    const dropdown = menu.querySelector('[data-header-dropdown]')

    window.addEventListener('click', event => {
      const target = event.target

      if (target.closest('[data-header-button]')) {
        menu.classList.toggle('active')
      }

      if (target.closest('[data-header-overlay]')) {
        menu.classList.remove('active')
      }
    })
    button.onclick = function() {
      
    }
  })
}
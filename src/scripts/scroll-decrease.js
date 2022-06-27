
document.addEventListener('DOMContentLoaded', () => {
  const decrease = document.querySelector('[data-decrease]')

  if (decrease) {
    const container = decrease.closest('[data-decrease-container]')
    const initialWidth = decrease.offsetWidth

    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset 
      const step = container.offsetTop - scrollPos

      if (scrollPos < container.offsetTop && initialWidth > step) {
        decrease.style.width = `${step}px`
      }

      if (step < 0) {
        decrease.style.width = '0px'
      }
    })
  }

  const decreaseMain = document.querySelector('[data-decrease-main]') 
  
  if (decreaseMain) {
    const svg = decreaseMain.querySelector('svg')
    const container = decreaseMain.closest('[data-decrease-container]')
    const initialWidth = decreaseMain.offsetWidth

    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset 
      const step = 100 - (scrollPos / (container.offsetTop - 200) * 100)

      if (scrollPos < container.offsetTop && initialWidth > step) {
        svg.style.width = `${step}%`
      }

      if (step < 0) {
        svg.style.width = '0px'
      }
    })
  }
})
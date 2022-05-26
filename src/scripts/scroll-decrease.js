
document.addEventListener('DOMContentLoaded', () => {
  const decrease = document.querySelector('[data-decrease]')

  if (decrease) {
    const container = decrease.closest('[data-decrease-container]')
    const initialWidth = decrease.offsetWidth

    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset + window.innerHeight / 3
      const step = container.offsetTop - scrollPos

      if (scrollPos < container.offsetTop && initialWidth > step) {
        decrease.style.width = `${step}px`
      }

      if (step < 0) {
        decrease.style.width = '1px'
      }
    })
  }
})
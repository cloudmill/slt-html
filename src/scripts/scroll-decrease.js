
document.addEventListener('DOMContentLoaded', () => {
  const decrease = document.querySelector('[data-decrease]')

  if (decrease) {
    const attrValue = decrease.getAttribute('data-decrease')
    const distance = attrValue ? window.innerHeight / attrValue : 0
    const container = decrease.closest('[data-decrease-container]')
    const initialWidth = decrease.offsetWidth

    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset + distance
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
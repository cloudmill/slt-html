document.addEventListener("DOMContentLoaded", () => {

  window.addEventListener('click', event => {
    const target = event.target.closest('[data-link]')

    if (target) {
      event.preventDefault()

      const href = target.getAttribute('href')

      document.body.classList.add('fade-out')
      setTimeout(() => {
        window.location.assign(href)
      }, 500);
    }
  })
})
document.addEventListener('DOMContentLoaded', () => {
  const orderCards = document.querySelectorAll('[data-order-card]')
  
  if (orderCards.length) {
    const panel = document.querySelector('[data-order-panel]')
    const title = panel.querySelector('.order-page__panel-title')

    title.textContent = `${title.textContent} ${orderCards.length}`
    panel.classList.remove('hidden')
    document.querySelector('.footer').classList.add('footer--order')
  }
})
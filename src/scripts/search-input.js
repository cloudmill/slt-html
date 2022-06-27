
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('[data-search-input]')

  if (inputs.length) {
    inputs.forEach(item => {
      const button = item.closest('[data-search-container]').querySelector('[data-search-button]')
      item.oninput = function() {
        if (this.value) {
          button.classList.remove('hidden')
        } else {
          button.classList.add('hidden')
        }
      }

      button.onclick = function() {
        item.value = ''
        this.classList.add('hidden')
      }
    })
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('[data-checkbox-reveal]')

  if (checkbox) {
    const hiddenContainer = document.querySelector('[data-container-reveal]')

    checkbox.onchange = function() {
      if (this.checked) {
        hiddenContainer.classList.add('active')
        hiddenContainer.querySelectorAll('input').forEach(item => {
          item.setAttribute('required', 'required')
        })
      } else {
        hiddenContainer.classList.remove('active')
        hiddenContainer.querySelectorAll('input').forEach(item => {
          item.removeAttribute('required')
        })
      }
    }
  }
})
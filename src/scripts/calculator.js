
document.addEventListener('DOMContentLoaded', () => {

  const calculator = document.querySelector('[data-calc]')

  if (calculator) {
    const data = {
      type: null,
      length: null,
      mounting: null,
      exploitation: null,
    }
    const radioButtons = document.querySelectorAll('[data-calc-radio]')
    
    radioButtons.forEach(item => {
      item.onchange = function() {
        const property = item.getAttribute('data-calc-radio')
        
        if (this.checked) {
          data[property] = +this.value
        }
      }
    })

    const inputs = document.querySelectorAll('[data-calc-input]')

    inputs.forEach(item => {
      item.onchange = function() {
        const property = item.getAttribute('data-calc-input')
        
        data[property] = +this.value
      }
    })

    const btn = document.querySelector('[data-calc-btn]')
    const text = document.querySelector('[data-calc-res]')

    btn.onclick = function() {
      const result = Math.round(data.type * (data.length / 2) * (data.exploitation - data.mounting))

      text.textContent = `${result} мм`
    }
  }
})
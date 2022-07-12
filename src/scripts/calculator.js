
document.addEventListener('DOMContentLoaded', () => {

  const calculator = document.querySelector('[data-calc]')

  if (calculator) {
    const data = {
      type: NaN,
      ratio: NaN,
      length: NaN,
      mounting: NaN,
      exploitation: NaN,
      diameter: NaN,
      compensatorLength: NaN,
    }
    const radioButtons = document.querySelectorAll('[data-calc-radio]')
    
    radioButtons.forEach(item => {
      item.onchange = function() {
        const property = item.getAttribute('data-calc-radio')
        const ratio = item.getAttribute('data-calc-ratio')

        if (this.checked) {
          data[property] = +this.value

          if (ratio) {
            data.ratio = +ratio
          }
        }
      }
    })

    const inputs = document.querySelectorAll('[data-calc-input]')

    inputs.forEach(item => {
      item.onchange = function() {
        const property = item.getAttribute('data-calc-input')
        
        data[property] = +this.value

        const res = getLength()

        if (property === 'compensatorLength') {
          document.querySelector('[data-calc-value=compensatorLength]').textContent = this.value
        }

        if (getLength()) {
          document.querySelector('[data-calc-value=length]').textContent = getLength()
        }
        if (getCompLength()) {
          document.querySelector('[data-calc-value=compLength]').textContent = getCompLength()
        }
        if (getMinWidth()) {
          document.querySelectorAll('[data-calc-value=minWidth]').forEach(item => {
            item.textContent = getMinWidth()
          })
        }
        if (getAmount()) {
          document.querySelector('[data-calc-value=amount]').textContent = getAmount()
        }

        if (res) {
          console.log(getLength());
          console.log(getMinWidth());
          console.log(getCompLength());
          console.log(getAmount());
        }
      }
    })

    const btn = document.querySelector('[data-calc-btn]')
    const text = document.querySelector('[data-calc-res]')

    btn.onclick = function() {
      const result = Math.round(data.type * (data.length / 2) * (data.exploitation - data.mounting))

      text.textContent = `${result} мм`
    }
    
    function tempDiff() {
      return data.exploitation - data.mounting;
    }

    function linearExpansion() {
      return Math.round(data.ratio * (data.length / 2) * tempDiff());
    }

    function getLength() {
      return data.type * Math.pow(Math.abs(data.diameter * linearExpansion()),0.5);
    }

    function getMinWidth() {
      const expansion = linearExpansion()
      
      if (expansion < 0) {
        return 150;
      }

      if (!expansion) {
        return null;
      }

      return 2 * expansion + 150;
    }

    function getCompLength() {
      return 2 * Math.pow(data.compensatorLength / data.type, 2) / data.diameter / data.ratio / Math.abs(tempDiff())
    }

    function getAmount() {
      return Math.ceil(data.length / getCompLength())
    }
  }
})
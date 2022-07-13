
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

        calculate()
      }
    })

    const inputs = document.querySelectorAll('[data-calc-input]')

    inputs.forEach(item => {
      item.onchange = function() {
        const property = item.getAttribute('data-calc-input')
        
        data[property] = +this.value

        if (property === 'compensatorLength') {
          const elem = document.querySelector('[data-calc-value=compensatorLength]')
          const parent = elem.closest('[data-calc-parent]')

          if (+this.value) {
            console.log(+this.value);
            elem.textContent = this.value
            parent.classList.remove('empty')
          } else {
            parent.classList.add('empty')
          }
        }

        calculate()
      }
    })

    // const btn = document.querySelector('[data-calc-btn]')
    // const text = document.querySelector('[data-calc-res]')

    // btn.onclick = function() {
    //   const result = Math.round(data.type * (data.length / 2) * (data.exploitation - data.mounting))

    //   text.textContent = `${result} мм`
    // }

    function calculate() {
      getLength()
      getCompLength()
      getMinWidth()
      getAmount()
    }
    
    function tempDiff() {
      const res = data.exploitation - data.mounting
      return res ? res : NaN;
    }

    function linearExpansion() {
      return Math.round(data.ratio * (data.length / 2) * tempDiff());
    }

    function getLength() {
      const result = data.type * Math.pow(Math.abs(data.diameter * linearExpansion()),0.5)
      const elem = document.querySelector('[data-calc-value=length]')

      if (elem) {
        const parent = elem.closest('[data-calc-parent]')

        if (result) {
          elem.textContent = result
          parent.classList.remove('empty')
        } else {
          parent.classList.add('empty')
        }
      }
    }

    function getMinWidth() {
      const expansion = linearExpansion()
      let result 

      if (expansion < 0) {
        result = 150;
      } else if (!expansion) {
        result =  null;
      } else {
        result = 2 * expansion + 150;
      }
      
      const elems = document.querySelectorAll('[data-calc-value=minWidth]')

      if (elems.length) {

        if (result) {
          elems.forEach(item => {
            item.textContent = result
            item.closest('[data-calc-parent]').classList.remove('empty')
          })
        } else {
          elems.forEach(item => {
            item.closest('[data-calc-parent]').classList.add('empty')
          })
        }
      }
    }

    function getCompLength() {
      const result = 2 * Math.pow(data.compensatorLength / data.type, 2) / data.diameter / data.ratio / Math.abs(tempDiff())
      const elem = document.querySelector('[data-calc-value=compLength]')
      if (elem) {
        const parent = elem.closest('[data-calc-parent]')
        console.log(result);
        if (result) {
          elem.textContent = result
          parent.classList.remove('empty')
        } else {
          parent.classList.add('empty')
        }
      }
      
      return result;
    }

    function getAmount() {
      const result = Math.ceil(data.length / getCompLength())
      const elem = document.querySelector('[data-calc-value=amount]')

      if (elem) {
        const parent = elem.closest('[data-calc-parent]')

        if (result) {
          elem.textContent = result
          parent.classList.remove('empty')
        } else {
          parent.classList.add('empty')
        }
      }
    }
  }
})
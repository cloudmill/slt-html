// калькулятора на странице calculator
export class CalculatorMain {
  constructor() {
    this.data = {
      type: NaN,
      ratio: NaN,
      length: NaN,
      mounting: NaN,
      exploitation: NaN,
      diameter: NaN,
      compensatorLength: NaN,
    }
    this.sep = 1

    this.init()
  }

  init() {
    const inputs = document.querySelectorAll('[data-calc-input]')
    inputs.forEach(item => {
      item.onchange = () => {
        this.inputChangeHandler(item)
      }
    })
    const radioButtons = document.querySelectorAll('[data-calc-radio]')
    radioButtons.forEach(item => {
      item.onchange = () => {
        this.radioChangeHandler(item)
      }
    })
    // this.inputChangeHandler()
    // this.radioChangeHandler()
  }

  inputChangeHandler(item) {
    const property = item.getAttribute('data-calc-input')
    
    this.data[property] = +item.value

    // if (property === 'compensatorLength') {
    //   const elem = document.querySelector('[data-calc-value=compensatorLength]')
    //   const parent = elem.closest('[data-calc-parent]')

    //   if (+this.value) {
    //     elem.textContent = item.value
    //     parent.classList.remove('empty')
    //   } else {
    //     parent.classList.add('empty')
    //   }
    // }
  }

  radioChangeHandler(item) {
    const property = item.getAttribute('data-calc-radio')
    // const ratio = item.getAttribute('data-calc-ratio')

    if (item.checked) {
      this.data[property] = +item.value

      // if (ratio) {
      //   this.data.ratio = +ratio
      // }

      // const elem = document.querySelector('[data-calc-value=compensSkill]')

      // if (elem) {
      //   if (property === 'diameter') {
      //     const parent = elem.closest('[data-calc-parent]')

      //     elem.textContent = item.value
      //     parent.classList.remove('empty')
      //   }
      // }
    }

    // calculate()
  }

  calculate() {
    this.getLinearExpansion()
  }

  getTempDiff() {
    const res = this.data.exploitation - this.data.mounting
    return res ? res : NaN;
  }

  getLinearExpansion() {
    const result = Math.round(this.data.ratio * (this.data.length / this.sep) * this.getTempDiff())
    // const elem = document.querySelector('[data-calc-value=expansion]')

    // if (elem) {
    //   const parent = elem.closest('[data-calc-parent]')
    //   if (result) {
    //     elem.textContent = result
    //     parent.classList.remove('empty')
    //   } else {
    //     parent.classList.add('empty')
    //   }
    // }

    return result;
  }

  getLength() {
    const result = this.data.type * Math.pow(Math.abs(this.data.diameter * this.getLinearExpansion()),0.5)

    return result;
  }

  getMinWidth() {
    const expan = this.getLinearExpansion()

    return expan < 0 ? 150 : !expan ? null : 2 * expan + 150;
  }

  getCompLength() {
    const result = 2 * Math.pow(this.data.compensatorLength / this.data.type, 2) / this.data.diameter / this.data.ratio / Math.abs(this.getTempDiff())

    return result;
  }

  getAmount() {
    let result
    if (document.querySelector('[data-calc-value=compensSkill]')) {
      result = Math.abs(Math.ceil(this.getLinearExpansion() / this.data.diameter))
    } else {
      result = Math.ceil(this.data.length / this.getCompLength())
    }

    return result;
  }
}
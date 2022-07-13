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
  }

  init() {

  }

  handleInputChange() {

  }

  handleRadionChange() {

  }

  calculate() {

  }

  getTempDiff() {
    const res = this.data.exploitation - this.data.mounting
    return res ? res : NaN;
  }

  getLinearExpansion() {
    const result = Math.round(this.data.ratio * (this.data.length / this.sep) * this.getTempDiff)
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
}
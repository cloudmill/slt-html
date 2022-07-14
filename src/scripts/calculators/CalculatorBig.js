// калькулятор на странице calculator-5
export class CalculatorBig {
  constructor() {
    this.data = []
    this.fields = []
    this.formData = {
      rate: NaN,
      temp: NaN
    }

    this.init()
    console.log(this.data);
  }

  init() {
    this.changeHandler()
    this.collectData()
    this.collectFields()
  }

  collectData() {
    const table = document.querySelector('.test-table')
    const columns = table.querySelectorAll('.test-col')

    for (let i = 0; i < columns.length; i++) {
      if (i === 8) {
        continue;
      }
      const arr = []
      for (let j = 2; j < 11; j++) {
        const cellValue = columns[i].querySelectorAll('.test-cell')[j].textContent
        arr.push(+cellValue)
      }
      this.data.push(arr)
    }
  }

  collectFields() {
    const grid = document.querySelector('[data-table]')
    const columns = grid.querySelectorAll('[data-table-col]')

    for (let i = 1; i < columns.length; i++) {
      const arr = []
      for (let j = 1; j < 10; j++) {
        const cell = columns[i].querySelectorAll('[data-table-cell]')
        arr.push(cell[j])
      }
      this.fields.push(arr)
    }
  }

  changeHandler() {
    const inputs = document.querySelectorAll('[data-calc-input]')

    inputs.forEach(item => {
      const property = item.getAttribute('data-calc-input')
      item.onchange = () => {
        this.data[property] = +item.value
        
        this.calculate()
      }
    })
  }

  calculate() {

  }

  // Удельные потери
  getLosses() {

  }
}

$(() => {
  
})
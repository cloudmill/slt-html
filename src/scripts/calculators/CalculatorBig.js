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
    console.log(this.fields);
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
        this.formData[property] = +item.value
        
        this.calculate()
      }
    })
  }

  calculate() {
    for (let i = 0; i < 9; i++) {
      this.getSpeed(i)
      this.getLosses(i)

      this.setSpeed(i)
      this.setLosses(i)
    }
  }

  // Удельные потери
  getLosses(i) {
    const G31 = this.data[6][i]
    const E18 = this.formData.temp
    const V31 = this.data[19][i]
    const zzz = G31/1000/((1.78*Math.pow(10, -6))/(1+0.0337*E18+0.000221*Math.pow(E18, 2)))
    const logs = 1 + ((Math.log((this.speed)*(zzz)) / Math.log(10)) / (Math.log(500 * V31) / Math.log(10)))
    this.losses = 
    Math.pow(0.5 / this.data[20][i] * ((logs) / 2 + (1.312*(2-(logs)))), 2) * 
    Math.pow(this.speed, 2)/2/9.81/G31 * 1000
  }

  setLosses(i) {
    if (this.losses) {
      this.fields[5][i].innerHTML = this.losses.toFixed(5)
    }
  }

  // Скорости
  getSpeed(i) {
    const G31 = this.data[6][i]
    this.speed = this.formData.rate / 1000 / (3.14*(Math.pow((G31/1000), 2)/4))
  }

  setSpeed(i) {
    if (this.speed) {
      const cells = this.fields[2]
      cells[i].innerHTML = this.speed.toFixed(4)

      if (this.speed > 0.5 && this.speed < 1) {
        cells[i].classList.add('active')
        this.fields[2+3][i].classList.add('active')
      } else {
        if (cells[i].classList.contains('active')) {
          cells[i].classList.remove('active')
          this.fields[2+3][i].classList.remove('active')
        }
      }
    }
  }
}

$(() => {
  
})
// калькулятор на странице calculator-5
export class CalculatorBig {
  constructor() {
    this.data = [];
    // this.data = {
    //   SDR6: [],
    //   SDR7: [],
    //   SDR11: [],
    // };
    this.fields = [];
    this.formData = {
      rate: NaN,
      temp: NaN,
    };

    this.init();
  }

  init() {
    this.changeHandler();
    this.collectData();
    this.collectFields();
  }

  collectData() {
    const tables = document.querySelectorAll(".test-table");

    tables.forEach((table) => {
      const columns = table.querySelectorAll(".test-col");
      const name = table.getAttribute("data-table-name");
      const arr = [];
      for (let i = 0; i < columns.length; i++) {
        if (i === 8) {
          continue;
        }
        const values = [];
        for (let j = 2; j < 11; j++) {
          const cellValue = columns[i]
            .querySelectorAll(".test-cell")
            [j].getAttribute("data-cell-value");
          values.push(+cellValue);
        }
        arr.push(values);
      }
      this.data.push(arr);
    });
  }

  collectFields() {
    const grid = document.querySelector("[data-table]");
    const columns = grid.querySelectorAll("[data-table-col]");

    for (let i = 1; i < columns.length; i++) {
      const arr = [];
      for (let j = 1; j < 10; j++) {
        const cell = columns[i].querySelectorAll("[data-table-cell]");
        arr.push(cell[j]);
      }
      this.fields.push(arr);
    }
  }

  changeHandler() {
    const inputs = document.querySelectorAll("[data-calc-input]");

    inputs.forEach((item) => {
      const property = item.getAttribute("data-calc-input");
      item.onchange = () => {
        this.formData[property] = +item.value;

        this.calculate();
      };
    });
  }

  calculate() {
    for (let x = 0; x < this.data.length; x++) {
      const data = this.data[x];

      for (let i = 0; i < 9; i++) {
        this.getSpeed(data, i);
        this.getLosses(data, i);

        this.setSpeed(x, i);
        this.setLosses(x, i);
      }
    }
  }

  // Удельные потери
  getLosses(data, i) {
    // Внутр. диаметр
    const x = data[6][i];
    const y = this.formData.temp;
    const logs =
      1 +
      Math.log(
        this.speed *
          (x /
            1000 /
            ((1.78 * Math.pow(10, -6)) /
              (1 + 0.0337 * y + 0.000221 * Math.pow(y, 2))))
      ) /
        Math.log(10) /
        (Math.log(500 * data[19][i]) / Math.log(10));
    const part =
      Math.log(
        this.speed *
          (x /
            1000 /
            ((1.78 * Math.pow(10, -6)) /
              (1 + 0.0337 * y + 0.000221 * Math.pow(y, 2))))
      ) /
        Math.log(10) -
      1;

    this.losses =
      ((Math.pow(
        (0.5 / data[20][i]) *
          (logs / 2 + (1.312 * (2 - logs) * data[20][i]) / part),
        2
      ) *
        Math.pow(this.speed, 2)) /
        2 /
        9.81 /
        x) *
      1000;
  }

  setLosses(x, i) {
    if (this.losses) {
      this.fields[x+3][i].innerHTML = this.losses.toFixed(5);
    }
  }

  // Скорости
  getSpeed(data, i) {
    // Внутр. диаметр
    const x = data[6][i];
    this.speed =
      this.formData.rate / 1000 / (3.14 * (Math.pow(x / 1000, 2) / 4));
  }

  setSpeed(x, i) {
    const cells = this.fields[x];
    if (this.speed) {
      cells[i].innerHTML = this.speed.toFixed(4);

      if (this.speed > 0.5 && this.speed < 1 && this.losses) {
        cells[i].classList.add("active");
        this.fields[x + 3][i].classList.add("active");
      } else {
        if (cells[i].classList.contains("active")) {
          cells[i].classList.remove("active");
          this.fields[x + 3][i].classList.remove("active");
        }
      }
    } else {
      cells[i].innerHTML =
        '<div class="calculator-page__grid-title">null</div>';
    }
  }
}

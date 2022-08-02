import { PdfDownloader } from "./PdfDownloader";

// калькулятор на странице calculator-5
export class CalculatorBig {
  constructor() {
    this.data = [];
    this.fields = [];
    this.formData = {
      rate: NaN,
      temp: NaN,
      diameter: NaN,
      length: NaN,
      percent: NaN,
    };
    this.pdfDownlaoder = new PdfDownloader(this);

    this.init();
  }

  init() {
    this.changeHandler();
    this.selectHandler();
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

        const isTableChange = property === "temp" || property === "rate";

        this.calculate(isTableChange);
      };
    });
  }

  selectHandler() {
    const selects = document.querySelectorAll("[data-calc-select]");

    selects.forEach((select) => {
      const property = select.getAttribute("data-calc-select");

      select.onchange = () => {
        this.formData[property] = select.value;

        this.calculate(false);
      };
    });
  }

  calculate(isTableChange) {
    if (isTableChange) {
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
    this.getSpecificLosses();
    this.getLocalLosses();
    this.getLengthLosses();
    this.pdfDownlaoder.checkIsDownloadable(
      this.specificLosses && this.localLosses && this.lengthLosses
    );
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
      this.fields[x + 3][i].innerHTML = this.losses.toFixed(5);
    } else {
      this.fields[x + 3][i].classList.remove("active");
      this.fields[x + 3][i].innerHTML =
        '<div class="calculator-page__grid-title">null</div>';
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
      cells[i].classList.remove("active");
      cells[i].innerHTML =
        '<div class="calculator-page__grid-title">null</div>';
    }
  }

  // Удельные потери по длине
  getSpecificLosses() {
    if (this.losses && this.formData.diameter) {
      const pos = JSON.parse(this.formData.diameter);
      const diameterValue = this.fields[pos[0] + 3][pos[1]].textContent;
      this.specificLosses = this.formData.length * +diameterValue;

      this.setElemValue(
        this.specificLosses,
        "[data-calc-value=specificLosses]"
      );
    }
  }

  // местные потери
  getLocalLosses() {
    if (this.specificLosses && this.formData.percent) {
      this.localLosses = (this.specificLosses / 100) * +this.formData.percent;

      this.setElemValue(this.localLosses, "[data-calc-value=localLosses]");
    }
  }

  // потери по длине
  getLengthLosses() {
    if (this.specificLosses && this.localLosses) {
      this.lengthLosses = this.specificLosses + this.localLosses;

      this.setElemValue(this.lengthLosses, "[data-calc-value=lengthLosses]");
    }
  }

  setElemValue(value, selector) {
    const element = document.querySelector(selector);
    if (value) {
      // const result = value.toFixed(4);
      const result = Math.round(value);

      element.textContent = result;
    } else {
      element.textContent = "null";
    }
  }
}

export class CalculatorAbstract {
  constructor() {
    this.data = {
      type: NaN,
      ratio: NaN,
      length: NaN,
      mounting: NaN,
      exploitation: NaN,
      diameter: NaN,
      compensatorLength: NaN,
    };
    this.sep = 1;

    this.init();
  }

  init() {
    const inputs = document.querySelectorAll("[data-calc-input]");
    inputs.forEach((item) => {
      item.onchange = () => {
        this.inputChangeHandler(item);
      };
    });
    const radioButtons = document.querySelectorAll("[data-calc-radio]");
    radioButtons.forEach((item) => {
      item.onchange = () => {
        this.radioChangeHandler(item);
      };
    });
  }

  inputChangeHandler(item) {
    const property = item.getAttribute("data-calc-input");

    this.data[property] = +item.value;

    this.calculate();
    this.setValues();
  }

  radioChangeHandler(item) {
    const property = item.getAttribute("data-calc-radio");
    const ratio = item.getAttribute("data-calc-ratio");

    if (item.checked) {
      this.data[property] = +item.value;

      if (ratio) {
        this.data.ratio = +ratio;
      }
    }

    this.calculate();
    this.setValues();
  }

  calculate() {
    this.getLinearExpansion();
  }

  getTempDiff() {
    const res = this.data.exploitation - this.data.mounting;
    // return res ? res : NaN;
    return res;
  }

  getLinearExpansion() {
    this.expansion = Math.round(
      this.data.ratio * (this.data.length / this.sep) * this.getTempDiff()
    );
  }

  getLength() {
    this.length =
      this.data.type *
      Math.pow(Math.abs(this.data.diameter * this.expansion), 0.5);
  }

  getMinWidth() {
    const expan = this.expansion;
    this.minWidth = expan < 0 ? 150 : !expan ? null : 2 * expan + 150;
  }

  getCompLength() {
    this.compLength =
      (2 * Math.pow(this.data.compensatorLength / this.data.type, 2)) /
      this.data.diameter /
      this.data.ratio /
      Math.abs(this.getTempDiff());
  }

  getAmount() {
    this.amount = Math.ceil(this.data.length / this.compLength);
  }

  setValues() {}

  setElemValue(value, selector) {
    const elem = document.querySelector(selector);
    const parent = elem.closest("[data-calc-parent]");

    if (Math.abs(value)) {
      elem.textContent = value;
      parent.classList.remove("empty");
    } else {
      parent.classList.add("empty");
    }
  }
}

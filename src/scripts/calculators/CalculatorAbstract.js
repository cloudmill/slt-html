import { PdfDownloader } from "./PdfDownloader";

export class CalculatorAbstract {
  constructor() {
    this.formData = {
      type: NaN,
      ratio: NaN,
      length: NaN,
      mounting: NaN,
      exploitation: NaN,
      diameter: NaN,
      compensatorLength: NaN,
    };
    this.sep = 1;
    // this.button = document.querySelector('[data-calc-download]')
    this.pdfDownlaoder = new PdfDownloader(this);

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

    // this.downloadClickHandler()
  }

  inputChangeHandler(item) {
    const property = item.getAttribute("data-calc-input");

    this.formData[property] = +item.value;

    this.calculate();
    this.setValues();
  }

  radioChangeHandler(item) {
    const property = item.getAttribute("data-calc-radio");
    const ratio = item.getAttribute("data-calc-ratio");

    if (item.checked) {
      this.formData[property] = +item.value;

      if (ratio) {
        this.formData.ratio = +ratio;
      }
    }

    this.calculate();
    this.setValues();
  }

  downloadClickHandler() {
    const pdf = document.querySelector("[data-pdf]");
    const introduced = pdf.querySelectorAll("[data-pdf-introduced]");
    const received = pdf.querySelectorAll("[data-pdf-received]");

    this.button.onclick = () => {
      this.setPdfFields(introduced, this.formData);
      this.setPdfFields(received, this);

      html2pdf()
        .from(pdf)
        .set({
          filename: pdf.getAttribute("data-pdf"),
        })
        .save();
    };
  }

  setPdfFields(items, data) {
    items.forEach((item) => {
      const property = item.getAttribute("data-pdf-field");

      item.textContent = Math.round(data[property]);
    });
  }

  calculate() {
    this.getLinearExpansion();
  }

  getTempDiff() {
    const res = this.formData.exploitation - this.formData.mounting;
    // return res ? res : NaN;
    return res;
  }

  getLinearExpansion() {
    this.expansion = Math.round(
      this.formData.ratio *
        (this.formData.length / this.sep) *
        this.getTempDiff()
    );
  }

  getLength() {
    this.length =
      this.formData.type *
      Math.pow(Math.abs(this.formData.diameter * this.expansion), 0.5);
  }

  getMinWidth() {
    const expan = this.expansion;
    this.minWidth = expan < 0 ? 150 : !expan ? null : 2 * expan + 150;
  }

  getCompLength() {
    this.compLength =
      (2 * Math.pow(this.formData.compensatorLength / this.formData.type, 2)) /
      this.formData.diameter /
      this.formData.ratio /
      Math.abs(this.getTempDiff());
  }

  getAmount() {
    this.amount = Math.ceil(this.formData.length / this.compLength);
  }

  setValues() {}

  setElemValue(value, selector) {
    const elem = document.querySelector(selector);
    const parent = elem.closest("[data-calc-parent]");

    if (Math.abs(value)) {
      elem.textContent = Math.round(value);
      parent.classList.remove("empty");
    } else {
      parent.classList.add("empty");
    }
  }

  checkIsDownloadable(boolean) {
    if (boolean) {
      this.button.classList.remove("disabled");
    } else {
      this.button.classList.add("disabled");
    }
  }
}

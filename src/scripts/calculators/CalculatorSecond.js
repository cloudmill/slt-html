import { CalculatorAbstract } from "./CalculatorAbstract";

// калькулятор на странице calculator-2
export class CalculatorSecond extends CalculatorAbstract {
  constructor() {
    super();
    this.sep = 2;
  }

  inputChangeHandler(item) {
    super.inputChangeHandler(item);

    if (item.getAttribute("data-calc-input") === "compensatorLength") {
      this.compensatorLength = +item.value;
      super.setElemValue(
        this.compensatorLength,
        "[data-calc-value=compensatorLength]"
      );
    }
  }

  calculate() {
    super.calculate();
    super.getLinearExpansion();
    super.getLength();
    super.getMinWidth();
    super.getCompLength();
    super.getAmount();
    this.pdfDownlaoder.checkIsDownloadable(
      this.expansion &&
        this.length &&
        this.minWidth &&
        this.compLength &&
        this.amount &&
        this.compensatorLength
    );
  }

  setValues() {
    super.setElemValue(this.length, "[data-calc-value=length]");
    super.setElemValue(this.compLength, "[data-calc-value=compLength]");
    super.setElemValue(this.amount, "[data-calc-value=amount]");
    this.setMultipleValues(this.minWidth, "[data-calc-value=minWidth]");
  }

  setMultipleValues(value, selector) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((item) => {
      const parent = item.closest("[data-calc-parent]");

      if (Math.abs(value)) {
        item.textContent = value;
        parent.classList.remove("empty");
      } else {
        parent.classList.add("empty");
      }
    });
  }
}

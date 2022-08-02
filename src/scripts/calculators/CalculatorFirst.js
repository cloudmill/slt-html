import { CalculatorAbstract } from "./CalculatorAbstract";

// калькулятора на странице calculate
export class CalculatorFirst extends CalculatorAbstract {
  calculate() {
    super.calculate();
    super.getLength();
    this.pdfDownlaoder.checkIsDownloadable(this.expansion && this.length);
  }

  setValues() {
    super.setElemValue(this.expansion, "[data-calc-value=expansion]");
    super.setElemValue(this.length, "[data-calc-value=length]");
  }
}

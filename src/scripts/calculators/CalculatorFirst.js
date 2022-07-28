import { CalculatorAbstract } from "./CalculatorAbstract";

// калькулятора на странице calculate
export class CalculatorFirst extends CalculatorAbstract {
  constructor() {
    super();
  }

  calculate() {
    super.calculate();
    super.getLength();
  }

  setValues() {
    super.setElemValue(this.expansion, "[data-calc-value=expansion]");
    super.setElemValue(this.length, "[data-calc-value=length]");
  }
}

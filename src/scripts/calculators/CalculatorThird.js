import { CalculatorAbstract } from "./CalculatorAbstract";

// калькулятор на страницах calculator-3/calculator-4
export class CalculatorThird extends CalculatorAbstract {
  constructor() {
    super();
  }

  radioChangeHandler(item) {
    super.radioChangeHandler(item);

    if (item.checked) {
      if (item.getAttribute("data-calc-radio") === "diameter") {
        const value = +item.value;
        super.setElemValue(value, "[data-calc-value=compensSkill]");
      }
    }
  }

  calculate() {
    super.calculate();
    super.getLinearExpansion();
    this.getAmount()
  }

  getAmount() {
    this.amount = Math.abs(Math.ceil(this.expansion / this.data.diameter));
  }

  setValues() {
    super.setElemValue(this.expansion, "[data-calc-value=expansion]");
    super.setElemValue(this.amount, '[data-calc-value=amount]')
  }
}
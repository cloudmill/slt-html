import { CalculatorAbstract } from "./CalculatorAbstract";

// калькулятор на страницах calculator-3/calculator-4
export class CalculatorThird extends CalculatorAbstract {
  radioChangeHandler(item) {
    super.radioChangeHandler(item);

    if (item.checked) {
      if (item.getAttribute("data-calc-radio") === "diameter") {
        this.compensSkill = +item.value;
        super.setElemValue(this.compensSkill, "[data-calc-value=compensSkill]");
      }
    }
  }

  calculate() {
    super.calculate();
    super.getLinearExpansion();
    this.getAmount();
    this.pdfDownlaoder.checkIsDownloadable(this.compensSkill && this.expansion && this.amount)
  }

  getAmount() {
    this.amount = Math.ceil(Math.abs(this.expansion / this.formData.diameter));
  }

  setValues() {
    super.setElemValue(this.expansion, "[data-calc-value=expansion]");
    super.setElemValue(this.amount, "[data-calc-value=amount]");
  }
}

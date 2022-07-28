import { CalculatorFirst } from "./calculators/CalculatorFirst";
import { CalculatorSecond } from "./calculators/CalculatorSecond";
import { CalculatorThird } from "./calculators/CalculatorThird";
import { CalculatorBig } from "./calculators/CalculatorBig";

document.addEventListener("DOMContentLoaded", () => {
  // calculators init 1/2/3/4 pages
  const calculator = document.querySelector("[data-calc]");

  if (calculator) {
    const id = calculator.getAttribute("data-calc");

    switch (id) {
      case "calcFirst":
        new CalculatorFirst();
        break;
      case "calculatorSecond":
        new CalculatorSecond();
        break;
      default:
        new CalculatorThird();
    }
  }

  // калькулятор на странице calculator-5 + расчет таблицы данных с excel
  const tables = document.querySelectorAll("[data-calc-table]");

  if (tables.length) {
    tables.forEach((table) => {
      const columns = table.querySelectorAll(".test-col");
      const data = JSON.parse(table.getAttribute("data-calc-table"));

      let i = 0;
      for (; i < data.length; i++) {
        for (let j = 0; j < data[0].length; j++) {
          const cell = createCell(data[i][j], data[i][j]);
          columns[i].append(cell);
        }
      }

      for (; i < columns.length; i++) {
        for (let j = 0; j < data[0].length; j++) {
          let value;

          if (i === 5) {
            value = (data[3][j] - data[4][j]) / (2 * data[4][j]);
          } else if (i === 6) {
            value = data[3][j] - 2 * data[4][j];
          } else if (i === 7) {
            const G =
              columns[6].querySelectorAll(".test-cell")[j + 2].textContent;
            value = (3.14 / 4000) * +G * +G;
          } else if (i === 8) {
            value = "";
          } else {
            const G =
              columns[6].querySelectorAll(".test-cell")[j + 2].textContent;
            const J = columns[i].querySelectorAll(".test-cell")[1].textContent;
            value = +G / 1000 / +J;
          }

          if (i === 21) {
            const V =
              columns[i - 1].querySelectorAll(".test-cell")[j + 2].textContent;
            value = Math.log(3.7 * +V) / Math.log(10);
          }

          const text = Math.round(value * 100) / 100;
          const cell = createCell(value, text);
          columns[i].append(cell);
        }
      }

      function createCell(value, text) {
        const cell = document.createElement("div");
        cell.classList.add("test-cell");
        cell.setAttribute("data-cell-value", value);
        cell.innerHTML = text;

        return cell;
      }
    });

    new CalculatorBig();
  }
});

import "./styles/app.scss";

import "./scripts/swipers";
import "./scripts/header";
import "./scripts/loader";
import "./scripts/accordion";
import "./scripts/fancybox";
import "./scripts/video-scroll";
import "./scripts/parallax";
import "./scripts/checkbox-reveal";
import "./scripts/page-fadeout";
import "./scripts/select";
import "./scripts/map";
import "./scripts/anchor-scroll";
import "./scripts/tooltip";
import "./scripts/objects-menu";
import "./scripts/catalog-category";
// import "./scripts/main-slider";
import "./scripts/about-slider";
import "./scripts/order-panel";
import "./scripts/scroll-decrease";
import "./scripts/catalog-spoilers";
import "./scripts/mobile-menu/MobileMenu";
import "./scripts/search-tabs";
import "./scripts/where-buy-filter";
import "./scripts/forms";
import "./scripts/form-response";
import "./scripts/catalog-table";
import "./scripts/main-map";
import "./scripts/backend";
import "./scripts/search-input";
// import "./scripts/file-input";
import "./scripts/Files";
import "./scripts/calculator";
// import "./scripts/calculators/CalculatorBig";
import { CalculatorBig } from "./scripts/calculators/CalculatorBig";
// import {CalculatorMain} from './scripts/calculators/CalculatorMain'

$(() => {
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

// $(() => {
//   const calculator = document.querySelector('[data-calc=calculatorMain]')

//   if (calculator) {
//     new CalculatorMain()
//   }
// })

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
// import "./scripts/calculator";
// import "./scripts/calculators/CalculatorBig";
import {CalculatorBig} from './scripts/calculators/CalculatorBig'
import {CalculatorMain} from './scripts/calculators/CalculatorMain'

$(() => {
  const table = document.querySelector('.test-table')

  if (table) {
    const columns = table.querySelectorAll('.test-col')
    // const data = [
    //   [20, 25, 32, 40, 50, 64, 75, 90, 110],
    //   [3.4, 4.2, 5.4, 6.7, 8.3, 10.5, 12.5, 15, 18.3],
    //   [6, 6, 6, 6, 6, 6, 6, 6, 6, ],
    //   [20.3, 25.3, 32.3, 40.3, 50.4, 63.4, 75.5, 90.7, 110.8],
    //   [3.8, 4.6, 5.7, 7.0, 8.9, 10.8, 12.8, 15.6, 19]
    // ]
    const data = [
      [20, 25, 32, 40, 50, 64, 75, 90, 110],
      [3.4, 4.2, 5.4, 6.7, 8.3, 10.5, 12.5, 15, 18.3],
      [6, 6, 6, 6, 6, 6, 6, 6, 6, ],
      [20.3, 25.3, 32.3, 40.4, 50.5, 63.5, 75.7, 90.8, 110.8],
      [3.8, 4.6, 5.8, 7.1, 9.0, 10.7, 12.8, 16, 19]
    ]

    let i = 0;

    for (; i < data.length; i++) {
      for (let j = 0; j < data[0].length; j++) {
        const cell = createCell(data[i][j])
        columns[i].append(cell)
      }
    }

    for (; i < columns.length; i++) {
      for (let j = 0; j < data[0].length; j++) {
        let content
        
        if (i === 5) {
          content = (data[3][j] - data[4][j]) / (2 * data[4][j])
          content = Math.round(content * 100) / 100
        } else if (i === 6) {
          content = data[3][j] - 2 * data[4][j]
          content = Math.round(content * 10) / 10
        } else if (i === 7) {
          const G = columns[6].querySelectorAll('.test-cell')[j+2].textContent
          content = 3.14 / 4000 * +G * +G
          content = Math.round(content * 1000) / 1000
        } else if (i === 8) {
          content = ""
        } else {
          const G = columns[6].querySelectorAll('.test-cell')[j+2].textContent
          const J = columns[i].querySelectorAll('.test-cell')[1].textContent
          content = +G / 1000 / +J
          content = Math.round(content * 10) / 10
        }

        if (i === 21) {
          const V = columns[i - 1].querySelectorAll('.test-cell')[j+2].textContent
          content = Math.log(3.7 * +V) / Math.log(10)
          content = Math.round(content * 100) / 100
        }

        const cell = createCell(content)
        columns[i].append(cell)
      }
    }

    function createCell(content) {
      const cell = document.createElement('div')
      cell.classList.add('test-cell')
      cell.innerHTML = content

      return cell;
    }

    new CalculatorBig()
  }
})

$(() => {
  const calculator = document.querySelector('[data-calc=calculatorMain]')

  if (calculator) {
    new CalculatorMain()
  }
})
import { mediaQuery } from './mediaQueries'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.main-map')
  
  if (container) {
    let lines

    if (mediaQuery.matches) {
      lines = document.querySelectorAll('.main-line')
    } else {
      lines = document.querySelectorAll('.main-line-mobile')
    }

    console.log(lines);

    lines.forEach(item => {
      let coords = {
        x1: item.getAttribute('x1'),
        x2: item.getAttribute('x2'),
        y1: item.getAttribute('y1'),
        y2: item.getAttribute('y2'),
      }
      const stepX = (coords.x1 - coords.x2) / 100
      const stepY = (coords.y1 - coords.y2) / 100


      linesIn(coords, item, stepX, stepY)
    })

    function linesIn(coords, item, stepX, stepY) {
      let currentX = coords.x1
      let currentY = coords.y1

      item.setAttribute('x1', coords.x1)
      item.setAttribute('y1', coords.y1)
      item.setAttribute('x2', coords.x1)
      item.setAttribute('y2', coords.y1)

      for (let i = 0; i < 100; i++) {
        setTimeout(() => {
          currentX = currentX - stepX
          currentY = currentY - stepY
          
          item.setAttribute('x2', currentX)
          item.setAttribute('y2', currentY)
        }, 10 * i);
      }

      setTimeout(() => {
        linesOut(coords, item, stepX, stepY)
      }, 1400);
    }

    function linesOut(coords, item, stepX, stepY) {
      let currentX = coords.x1
      let currentY = coords.y1

      for (let i = 0; i < 100; i++) {
        setTimeout(() => {
          currentX = currentX - stepX
          currentY = currentY - stepY
          
          item.setAttribute('x1', currentX)
          item.setAttribute('y1', currentY)
        }, 3 * i);
      }

      setTimeout(() => {
        linesIn(coords, item, stepX, stepY)
      }, 2300);
    }
  }
})
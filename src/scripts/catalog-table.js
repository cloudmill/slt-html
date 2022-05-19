// при клике на строку фокус на инпут, проверка на пустоту

document.addEventListener('DOMContentLoaded', () => {

  const catalogInputs = document.querySelectorAll('[data-table-input]');

  if (catalogInputs.length) {
    catalogInputs.forEach(input => {
      const item = input.closest('[data-table-item]')
      
      input.oninput = function() {
        if (this.value.length) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      }
    })
  }
})

// переключение активного цвета товара в каталоге

document.addEventListener('DOMContentLoaded', () => {

  const catalogColors = document.querySelector('.catalog-page__colors-item');

  if (catalogColors) {
    
    catalogColors.addEventListener('click', event => {

      const currentColor = event.target.closest('.catalog-page__colors-icon');

      if (currentColor) {

        catalogColors.querySelectorAll('.catalog-page__colors-icon').forEach(item => {
          item.classList.remove('active')
        });
        
        currentColor.classList.add('active');
      }
    })
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const catalogButton = document.querySelector('[data-catalog-button]')

  if (catalogButton) {
    window.addEventListener('click', event => {
      const target = event.target.closest('[data-catalog-button]')

      if (target) {
        const cell = target.closest('.catalog-page__table-cell')
        const text = target.querySelector('.catalog-page__table-add')
        const caption = cell.querySelector('[data-table-caption]')
        const input = cell.querySelector('[data-table-input]')

        if (cell.classList.contains('active')) {
          text.textContent = 'Добавить'
          cell.classList.remove('active')
        } else {
          text.textContent = 'Изменить'
          cell.classList.add('active')
          caption.textContent = `Добавлено: ${input.value}`
        }
      }
    })
  }
})
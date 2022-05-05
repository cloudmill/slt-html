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
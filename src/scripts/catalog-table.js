// при клике на строку фокус на инпут, проверка на пустоту

document.addEventListener('DOMContentLoaded', () => {

  const catalogTable = document.querySelector('.catalog-page__table-body');

  if (catalogTable) {
    catalogTable.addEventListener('click', event => {
      const currentRow = event.target.closest('.catalog-page__table-item');
      if (currentRow) {
        if (!Number(currentRow.querySelector('.catalog-page__table-input').value) == 0) {
          currentRow.classList.add('active')
        } else {
          currentRow.querySelector('.catalog-page__table-input').focus();
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
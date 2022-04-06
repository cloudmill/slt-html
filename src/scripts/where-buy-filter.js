import { mediaQuery } from "./mediaQueries";

const filtersPanel = document.querySelector('.where-buy__filters');

if (filtersPanel) {

  const filtersContainer = document.getElementById('filters-container');
  const resetBtn = document.querySelector('.where-buy__filters-reset');

  filtersContainer.addEventListener('click', (event) => {
    
    const currentFilter = event.target.closest('.filter-btn');

    if (currentFilter) {

      if (currentFilter.classList.contains('is-active')) {
        currentFilter.classList.remove('is-active')
      } else {
        currentFilter.classList.add('is-active')
      }
    }

    // if (mediaQuery.matches) {

    if (filtersContainer.querySelector('.is-active')) {
      resetBtn.classList.remove('reset-disabled');
    } else {
      resetBtn.classList.add('reset-disabled');
    }

    // }
  })

  resetBtn.addEventListener('click', () => {
    filtersContainer.querySelectorAll('.is-active').forEach(item => {
      item.classList.remove('is-active')
    });
    resetBtn.classList.add('reset-disabled');
  })
}
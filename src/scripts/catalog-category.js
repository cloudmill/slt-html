import { CategoriesList } from './CategoriesList'
import {InputsWatcher} from './InputsWatcher'

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.catalog-modal')

  if (modal) {
    // инпуты в модалке
    const watcher = new InputsWatcher('[data-catalog-item]', {
      onchange: function() {
        productMatch()
      }
    })
    // .category-list на странице catalog-category
    const list = new CategoriesList('[data-list-container]')

    function productMatch() {
      const panel = document.querySelector('.catalog-modal__panel')

      if (watcher.selectedItems.length) {
        panel.classList.remove('hidden')
      } else {
        panel.classList.add('hidden')
      }
    }

    window.addEventListener('click', event => {
      const target = event.target

      if (target.closest('[data-catalog-show]')) {
        event.preventDefault();
        list.showItems(watcher.selectedItems);
        $.fancybox.close(target.closest('[data-fancy-modal]'))
      }

      if (target.closest('[data-delete-category]')) {
        watcher.selectedItems = list.deleteItem(target, watcher.selectedItems)
        productMatch()
      }

      if (target.closest('[data-clear-categories]')) {
        watcher.clearItems()
        list.clearItems()
        productMatch()
      }
    })
  }
})
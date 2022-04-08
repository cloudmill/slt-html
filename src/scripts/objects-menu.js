import { CategoriesList } from "./CategoriesList"
import { InputsWatcher } from "./InputsWatcher"
import { mediaQuery } from "./mediaQueries"
import { MobileMenu } from "./mobile-menu/MobileMenu"

document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.querySelector('[data-objects-menu]')

  if (menuContainer && !mediaQuery.matches) {
    const menu = new MobileMenu('[data-objects-menu]', '[data-menu-button]')
    const list = new CategoriesList('[data-list-container]')
    const watcher = new InputsWatcher('[data-objects-item]', {
      onchange: function() {
        getCheckedCount()
      }
    })

    function getCheckedCount() {
      const panel = document.querySelector('[data-menu-panel]')
      const text = panel.querySelector('[data-menu-clear]')

      if (watcher.selectedItems.length) {
        panel.classList.add('active')
        text.textContent = `Сбросить (${watcher.selectedItems.length})`
      } else {
        panel.classList.remove('active')
      }
    }

    window.addEventListener('click', event => {
      const target = event.target

      if (target.closest('[data-menu-close]')) {
        menu.closeMenu()
      }

      if (target.closest('[data-menu-clear]')) {
        watcher.clearItems()
        list.clearItems()
        getCheckedCount()
      }

      if (target.closest('[data-menu-accept]')) {
        event.preventDefault()
        list.showItems(watcher.selectedItems)
        menu.closeMenu()
      }

      if (target.closest('[data-delete-category]')) {
        watcher.selectedItems = list.deleteItem(target, watcher.selectedItems)
        getCheckedCount()
      }

      if (target.closest('[data-clear-categories]')) {
        watcher.clearItems()
        list.clearItems()
        getCheckedCount()
      }
    })
  }
})
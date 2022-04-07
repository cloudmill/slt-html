class CatalogModal {
  constructor() {
    this.root = document.querySelector('.catalog-modal')

    if (this.root) {
      this.selectedItems = []
      this.categoriesContainer = document.querySelector('.category-list')
      this.categoriesList = this.categoriesContainer.querySelector('[data-catalog-list]')

      this.onSelect()
      this.clickHandler()
    }
  }

  onSelect() {
    const items = document.querySelectorAll('[data-catalog-item]')

    items.forEach(item => {
      const checkbox = item.querySelector('.catalog-modal__input')
      const text = item.querySelector('.catalog-modal__text').textContent

      checkbox.onchange = () => {
        if (checkbox.checked) {
          this.selectedItems.push({text: text, element: item})
          item.classList.add('active')
        } else {
          this.selectedItems = this.selectedItems.filter(item => item.text !== text)
          item.classList.remove('active')
        }

        this.checkProductMatch()
      }
    })
  }

  checkProductMatch() {
    const panel = this.root.querySelector('.catalog-modal__panel')

    if (this.selectedItems.length) {
      panel.classList.remove('hidden')
    } else {
      panel.classList.add('hidden')
    }
  }

  clickHandler() {
    window.addEventListener('click', event => {
      const target = event.target

      if (target.closest('[data-catalog-show]')) {
        event.preventDefault();

        this.show(target)
      }

      if (target.closest('[data-delete-category]')) {
        this.deleteCategory(target)
      }

      if (target.closest('[data-clear-categories]')) {
        this.clearCategories()
      }
    })
  }

  show(target) {
    this.selectedItems.forEach(item => {
      const clone = document.querySelector('[data-catalog-template]').content.firstElementChild.cloneNode(true)
      
      clone.querySelector('.category-list__text').textContent = item.text
      this.categoriesList.append(clone)
    })

    this.categoriesContainer.classList.add('active')
    $.fancybox.close(target.closest('[data-fancy-modal]'))
  }

  deleteCategory(target) {
    const parent = target.closest('[data-category]')
    const text = parent.querySelector('.category-list__text').textContent

    this.selectedItems.forEach(item => {
      if (item.text === text) {
        item.element.classList.remove('active')
        item.element.querySelector('.catalog-modal__input').checked = false
      }
    })
    this.selectedItems = this.selectedItems.filter(item => item.text != text)
    parent.remove()

    if (!this.selectedItems.length) {
      this.categoriesContainer.classList.remove('active')
    }
    this.checkProductMatch()
  }

  clearCategories() {
    this.selectedItems.forEach(item => {
      item.element.querySelector('.catalog-modal__input').checked = false
      item.element.classList.remove('active')
    })
    this.selectedItems = []
    this.categoriesList.querySelectorAll('[data-category]').forEach(item => item.remove())
    this.categoriesContainer.classList.remove('active')
    
    this.checkProductMatch()
  }
}


document.addEventListener('DOMContentLoaded', () => {
  new CatalogModal();
})
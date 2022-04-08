export class CategoriesList {
  constructor(root) {
    this.root = document.querySelector(root)

    if (this.root) {
      this.list = this.root.querySelector('[data-catalog-list]')
    }
  }

  showItems(items) {
    items.forEach(item => {
      const clone = this.root.querySelector('[data-catalog-template]').content.firstElementChild.cloneNode(true)
      
      clone.querySelector('.category-list__text').textContent = item.text
      this.list.append(clone)
    })

    this.root.classList.add('active')
  }

  deleteItem(target, items) {
    const parent = target.closest('[data-category]')
    const text = parent.querySelector('.category-list__text').textContent

    items.forEach(item => {
      if (item.text === text) {
        item.element.classList.remove('active')
        item.element.querySelector('[data-item-checkbox]').checked = false
      }
    })

    items = items.filter(item => item.text != text)
    parent.remove()

    if (!items.length) {
      this.root.classList.remove('active')
    }

    return items
  }

  clearItems() {
    this.list.querySelectorAll('[data-category]').forEach(item => item.remove())
    this.root.classList.remove('active')
  }
}
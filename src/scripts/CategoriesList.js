export class CategoriesList {
  constructor(root) {
    this.root = document.querySelector(root)

    if (this.root) {
      this.list = this.root.querySelector('[data-catalog-list]')
      this.currentItems = []
    }
  }

  showItems(items) {
    items.forEach(item => {
      if (!this.currentItems.includes(item)) {
        const clone = this.root.querySelector('[data-catalog-template]').content.firstElementChild.cloneNode(true)
        
        clone.querySelector('.category-list__text').textContent = item.text
        this.list.append(clone)
        this.currentItems.push(item)
      }
    })

    if (!items.length) {
      this.root.classList.remove('active')
    } else {
      this.root.classList.add('active')
    }
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

    $(items[0].element.querySelector('[data-item-checkbox]')).trigger('change')

    items = items.filter(item => item.text != text)
    this.currentItems = this.currentItems.filter(item => item.text != text)
    parent.remove()

    if (!items.length) {
      this.root.classList.remove('active')
    }
    
    return items
  }

  clearItems() {
    this.list.querySelectorAll('[data-category]').forEach(item => item.remove())
    this.root.classList.remove('active')
    this.currentItems = []
  }
}
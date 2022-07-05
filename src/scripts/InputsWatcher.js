export class InputsWatcher {
  constructor(root, params) {
    this.items = document.querySelectorAll(root)
    
    if (this.items.length) {
      this.selectedItems = []

      this.init(params)
    }
  }

  init(params) {
    this.items.forEach(item => {
      const checkbox = item.querySelector('[data-item-checkbox]')
      const text = item.querySelector('[data-item-text]').textContent

      checkbox.onchange = () => {
        if (checkbox.checked) {
          this.selectedItems.push({text: text, element: item})
          item.classList.add('active')
        } else {
          this.selectedItems = this.selectedItems.filter(item => item.text !== text)
          item.classList.remove('active')
        }

        if (params.onchange) {
          params.onchange()
        }
      }
    })
  }

  clearItems() {
    this.selectedItems.forEach(item => {
      item.element.querySelector('[data-item-checkbox]').checked = false
      item.element.classList.remove('active')
    })
    
    $(this.selectedItems[0].element.querySelector('[data-item-checkbox]')).trigger('change')
    this.selectedItems = []
  }
}
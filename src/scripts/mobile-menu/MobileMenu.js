
export class MobileMenu {
  constructor(selector, button) {
    this.root = document.querySelector(selector)
    this.isOpen = false

    this.clickHander(button)
  } 

  clickHander(button) {

    window.addEventListener('click', event => {
      const target = event.target

      if (target.closest(button)) {

        if (this.isOpen) {
          this.closeMenu()
        } else {
          this.root.classList.add('menu')
          document.body.classList.add('body--hidden')
        }

        this.isOpen = !this.isOpen
      }

      if (target.closest('[data-modal-btn]')) {
        this.findId('data-modal-btn', target)

        this.modal.classList.add('active')
      }

      if (target.closest('[data-modal-close]')) {
        this.findId('data-modal-close', target)

        this.modal.classList.remove('active')
      }
    })
  }

  findId(attribute, target) {
    this.id = target.closest(`[${attribute}]`).getAttribute(attribute)
    this.modal = document.querySelector(`[data-modal-menu="${this.id}"]`)
  }

  closeMenu() {
    const modals = document.querySelectorAll('[data-modal-menu]')

    this.root.classList.remove('menu')
    document.body.classList.remove('body--hidden')

    modals.forEach(item => {
      item.classList.remove('active')
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MobileMenu('.header', '.header__menu')
})
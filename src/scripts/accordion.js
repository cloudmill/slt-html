
function accordionDropdown(e, root) {
  const accordion = $(root)
  const target = $(e.target)

  if (target.closest('[data-accordion-button]').length) {
    target.closest(accordion).toggleClass('active');
    target.closest(accordion).find('[data-accordion-dropdown]').eq(0).slideToggle()
  }
}

$(() => {
  if ($('[data-accordion]').length) {
    window.addEventListener('click', (e) => {
      accordionDropdown(e, '[data-accordion]')
    })
  }
})

$(() => {
  if ($('[data-objects-accordion]')) {

    window.addEventListener('click', (e) => {
      accordionDropdown(e, '[data-objects-accordion]')

      const target = $(e.target).closest('[data-objects-accordion]')

      if (!target.length) {
        $('[data-objects-accordion]').find('[data-accordion-dropdown]').slideUp()
        $('[data-objects-accordion]').removeClass('active')
      }
    })
  }
})

$(() => {
  if ($('[data-accordion]').length) {
    window.addEventListener('click', (e) => {
      const accordion = $('[data-accordion]')
      const target = $(e.target)

      if (target.closest('[data-accordion-button]').length) {
        target.closest(accordion).toggleClass('active');
        target.closest(accordion).find('[data-accordion-dropdown]').eq(0).slideToggle()
      }
    })
  }
})
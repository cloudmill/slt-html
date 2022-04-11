
// filters
{
  $(() => {
    const filters = $('.filters')

    if (filters.length) {
      const filtersTop = filters.find('.filters__headings')

      window.addEventListener('click', event => {
        const button = $(event.target).closest('[data-filters-button]')

        if (button.length) {
          const id = button.closest('[data-filters-button]').attr('data-filters-button')

          button.toggleClass('visible')
          filtersTop.toggleClass('darken')
          $(`[data-filters-dropdown=${id}]`).slideToggle()
        }
      })
    }
  })
}
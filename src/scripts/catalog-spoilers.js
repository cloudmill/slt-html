
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
          const item = button.closest('.filters__headings-item')

          if (item.hasClass('visible')) {
            item.removeClass('visible')
            filtersTop.removeClass('darken')
            $(`[data-filters-dropdown=${id}]`).slideUp()
          } else {
            filtersTop.find('.visible').removeClass('visible')
            $('[data-filters-dropdown]').slideUp()

            item.addClass('visible')
            filtersTop.addClass('darken')
            $(`[data-filters-dropdown=${id}]`).slideDown()
          }
        }
      })
    }
  })
}
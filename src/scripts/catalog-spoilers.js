
{
  $(() => {
    const spoiler = $('.spoiler')

    if (spoiler.length) {
      const dropdown = spoiler.find('.spoiler__dropdown')
      const items = spoiler.find('[data-spoiler-item]')
      let isClose = true
      let attrValue

      $('.spoiler__button').on('click', function() {
        dropdown.slideToggle()
        spoiler.toggleClass('active')

        if (isClose) {
          attrValue = spoiler.attr('data-spoiler-color')
          spoiler.removeAttr('data-spoiler-color')
          isClose = false
        } else {
          spoiler.attr('data-spoiler-color', attrValue)
          isClose = true
        }
      })

      items.on('click', function() {
        const value = $(this).data('spoiler-item')

        spoiler.attr('data-spoiler-color', value)
        $('.spoiler__title').text($(this).text())
        spoiler.removeClass('active')
        dropdown.slideUp()
        isClose = true
      })
    }
  })
}

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
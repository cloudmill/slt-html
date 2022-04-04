
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
        spoiler.removeClass('active')
        dropdown.slideUp()
        isClose = true
      })
    }
  })
}
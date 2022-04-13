{
  $(() => {
    // anchor scroll
    if ($('[data-scroll]').length) {
      $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        const elementId = $(this).data('scroll');
        const elementOffset = $(elementId).offset().top;

        $('html, body').animate({
          scrollTop: elementOffset - 120
        }, 700);
      })
    }
  })
}
// parallax
{
  $(() => {
    const parallaxItem = $('[data-parallax]');

    if (parallaxItem.length !== 0) {

      parallaxItem.each(function () {
        const parallaxElem = $(this);
        const parallaxElemOffset = parallaxElem.offset().top;
        const parallaxId = parallaxElem.data('parallax');
        const parallaxContainer = $(`[data-parallax-container='${parallaxId}']`)

        $(window).on('scroll', function () {
          const scrollPos = this.pageYOffset;

          if (scrollPos < parallaxContainer.offset().top &&
            (scrollPos + $(window).height() / 2) > parallaxElemOffset) {
            const parallax = ((scrollPos + $(window).height() / 2) - parallaxElemOffset) * 0.1;

            requestAnimationFrame(() => {
              parallaxElem.css('transform', `translateY(${parallax}px)`);
            })
          }
        });
      });
    };
  });
}
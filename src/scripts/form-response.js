$(() => {
  const form = $('[data-form]');

  if (form.length !== 0) {

    form.each(function() {
      const ths = $(this)
      const id = ths.data('form')

      ths.on('submit', (e) => {
        e.preventDefault()
        $.fancybox.defaults.closeExisting = true;
        $.fancybox.defaults.touch = false;
        $.fancybox.defaults.hideScrollbar = false;
        $.fancybox.defaults.baseTpl = (
          '<div class="fancybox-container" role="dialog" tabindex="-1">' +
          '<div class="fancybox-bg"></div>' +
          '<div class="fancybox-stage"></div>' +
          '</div>'
        );
        $.fancybox.defaults.animationEffect = 'zoom'
        $.fancybox.defaults.animationDuration = 500
        $.fancybox.defaults.afterShow = function(instance, slide) {}
        $.fancybox.defaults.beforeClose = function(instance, slide) {
          ths[0].reset()

          // const file = ths.find('[data-files-input]')

          // if (file.length) {
          //   window.dispatchEvent(new CustomEvent('clearFiles'))
          // }
        }
        $.fancybox.open($(`[data-response=${id}]`))
      })
    })
  }
});
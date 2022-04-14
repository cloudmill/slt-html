import '@fancyapps/fancybox';

// fancybox
{
  $(() => {
    $.fancybox.defaults.closeExisting = true;
    $.fancybox.defaults.touch = false;
    $.fancybox.defaults.hideScrollbar = false;
    $.fancybox.defaults.baseTpl = (
      '<div class="fancybox-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg"></div>' +
      '<div class="fancybox-stage"></div>' +
      '</div>'
    );
    

    $('[data-fancy-button]').on('click', function (event) {
      event.preventDefault();
      const id = $(this).data('fancy-button');
      const modal = $(`[data-fancy-modal="${id}"]`);

      switch (id) {
        case 'work1':
          $.fancybox.defaults.animationEffect = 'left'
          $.fancybox.defaults.animationDuration = 800
          $.fancybox.defaults.afterShow = function(instance, slide) {
            $(slide.src).closest('.fancybox-container').addClass('open')
            $(slide.src).addClass('active')
          }
          $.fancybox.defaults.beforeClose = function(instance, slide) {
            $(slide.src).removeClass('active')
          }
          break
        case 'c1':
          $.fancybox.defaults.animationEffect = 'left'
          $.fancybox.defaults.animationDuration = 800
          $.fancybox.defaults.afterShow = function(instance, slide) {
            $(slide.src).closest('.fancybox-container').addClass('open')
            $(slide.src).addClass('active')
          }
          $.fancybox.defaults.beforeClose = function(instance, slide) {
            $(slide.src).removeClass('active')
          }
          break
        case 'call':
          $.fancybox.defaults.animationEffect = 'left'
          $.fancybox.defaults.animationDuration = 800
          $.fancybox.defaults.afterShow = function(instance, slide) {
            $(slide.src).closest('.fancybox-container').addClass('open')
            $(slide.src).addClass('active')
          }
          $.fancybox.defaults.beforeClose = function(instance, slide) {
            $(slide.src).removeClass('active')
          }
          break
        case 'search':
          $.fancybox.defaults.animationEffect = 'top'
          $.fancybox.defaults.animationDuration = 800
          $.fancybox.defaults.afterShow = function(instance, slide) {
            $(slide.src).closest('.fancybox-container').addClass('open')
            $(slide.src).addClass('active')
          }
          $.fancybox.defaults.beforeClose = function(instance, slide) {
            $(slide.src).removeClass('active')
          }
          break
        default:
          $.fancybox.defaults.closeExisting = true;
          $.fancybox.defaults.touch = false;
          $.fancybox.defaults.hideScrollbar = false;
          $.fancybox.defaults.baseTpl = (
            '<div class="fancybox-container" role="dialog" tabindex="-1">' +
            '<div class="fancybox-bg"></div>' +
            '<div class="fancybox-stage"></div>' +
            '</div>'
          )
          $.fancybox.defaults.animationEffect = 'zoom'
          $.fancybox.defaults.animationDuration = 500
      }

      $.fancybox.open(modal);
    });
  });
}
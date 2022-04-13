import tippy from 'tippy.js';


$(() => {
  $('.tooltip').each(function() {
    const tooltipContent = $(this).find('.tooltip__container').text().trim();
    const tooltipMark = $(this).find('.tooltip__icon');

    tippy(tooltipMark[0],  {
      content: tooltipContent,
      // trigger: 'click',
      appendTo: $('.main')[0],
      offset: [0, 6],
      zIndex: 999999,
    });
  });
});
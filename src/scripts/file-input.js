$(() => {
  if ($('.file').length) {
    const inputFile = $('.file__input');
    const filesContainer = $('.file__container');
    let files = [];

    inputFile.on('change', function () {
      const newFiles = [];

      for (let index = 0; index < inputFile[0].files.length; index++) {
        const file = inputFile[0].files[index];
        newFiles.push(file);
        files.push(file);
      }

      newFiles.forEach(file => {
        const fileElement = $(
          `<div class=file__item><p class=file__name>${file.name}</p><div class=file__mark></div></div>`
        );
        fileElement.data('fileData', file);
        filesContainer.append(fileElement);

        fileElement.on('click', function (event) {
          const target = $(event.target);
          const fileMark = target.closest('.file__mark')
          const indexToRemove = files.indexOf($(this).data('fileData'));

          if (fileMark.length === 1) {
            $(this).remove();
            files.splice(indexToRemove, 1);
          }
        });
      });
    });
  }
});
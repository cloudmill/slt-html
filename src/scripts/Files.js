class Id {
  constructor() {
    this.symbol = Symbol();
    this.freeId = 0;
  }

  create() {
    return this.freeId++;
  }
}

export class Files {
  // input - <input />
  // container - <div> с контролами
  // render - callback, принимает имя файла, возвращает верстку
  constructor(input, container, render) {
    this.input = input;
    this.container = container;
    this.render = render;

    this.init();
  }

  init() {
    this.id = new Id();

    this.dataTransfer = new DataTransfer();

    this.handleChange = this.handleChange.bind(this);
    this.input.addEventListener("change", this.handleChange);

    this.handleClick = this.handleClick.bind(this);
    window.addEventListener("click", this.handleClick);

    this.clearFiles = this.clearFiles.bind(this)
    window.addEventListener("clearFiles", this.clearFiles);
  }

  handleClick(event) {
    const remove = event.target.closest("[data-files-remove]");

    if (remove) {
      const id = remove.dataset.filesRemove;

      this.removeFile(id);
    }
  }

  handleChange(event) {
    const files = event.target.files;
    
    this.addFiles(files);

    this.update();
  }

  getFiles() {
    return this.dataTransfer.files;
  }

  addFiles(files) {
    for (const file of files) {
      this.addFile(file);
    }
  }

  addFile(file) {
    file[this.id.symbol] = this.id.create();

    this.dataTransfer.items.add(file);
  }

  removeFile(id) {
    let removeIndex = null;

    Array.from(this.dataTransfer.items).forEach((item, index) => {
      if (removeIndex === null) {
        const file = item.getAsFile();
        const fileId = String(file[this.id.symbol]);

        if (fileId === id) {
          removeIndex = index;
        }
      }
    });

    if (removeIndex !== null) {
      this.dataTransfer.items.remove(removeIndex);
    }

    this.update();
  }

  update() {
    const files = this.getFiles();

    this.input.files = files;

    let containerHTML = "";
    for (const file of files) {
      containerHTML += this.render(file.name, file[this.id.symbol]);
    }

    this.container.innerHTML = containerHTML;
  }

  clearFiles() {
    this.dataTransfer.clearData()
    this.container.innerHTML = "";
  }
}

// export { Files, Id };

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector("[data-files-input]");

  if (input) {
    const container = document.querySelector("[data-files-container]");

    const files = new Files(
      input,
      container,
      (fileName, fileId) => `
      <div class=file__item>
      <p class=file__name>${fileName}</p>
      <div class=file__mark data-files-remove=${fileId}></div>
      </div>
      `
    );
  }
})

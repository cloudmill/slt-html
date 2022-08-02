
export class PdfDownloader {
  constructor(calculator) {
    this.button = document.querySelector("[data-calc-download]");
    this.calculator = calculator

    this.init();
  }

  init() {}

  downloadClickHandler() {
    const pdf = document.querySelector("[data-pdf]");
    const introduced = pdf.querySelectorAll("[data-pdf-introduced]");
    const received = pdf.querySelectorAll("[data-pdf-received]");

    this.button.onclick = () => {
      this.setPdfFields(introduced, this.calculator.data);
      this.setPdfFields(received, this.calculator);

      html2pdf()
        .from(pdf)
        .set({
          filename: pdf.getAttribute("data-pdf"),
        })
        .save();
    };
  }

  setPdfFields(items, data) {
    items.forEach((item) => {
      const property = item.getAttribute("data-pdf-field");

      item.textContent = Math.round(data[property]);
    });
  }

  checkIsDownloadable(boolean) {
    if (boolean) {
      this.button.classList.remove("disabled");
    } else {
      this.button.classList.add("disabled");
    }
  }
}
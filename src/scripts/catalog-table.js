// при клике на строку фокус на инпут, проверка на пустоту

document.addEventListener("DOMContentLoaded", () => {
  const catalogInputs = document.querySelectorAll("[data-table-input]");

  if (catalogInputs.length) {
    document.addEventListener('input', event => {
      const target = event.target

      if (target.hasAttribute('data-table-input')) {
        const item = target.closest("[data-table-item]");

        if (Number(target.value) > 0) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      }
    })
  }
});

// переключение активного цвета товара в каталоге

document.addEventListener("DOMContentLoaded", () => {
  const catalogColors = document.querySelector(".catalog-page__colors-item");

  if (catalogColors) {
    catalogColors.addEventListener("click", (event) => {
      const currentColor = event.target.closest(".catalog-page__colors-icon");

      if (currentColor) {
        catalogColors
          .querySelectorAll(".catalog-page__colors-icon")
          .forEach((item) => {
            item.classList.remove("active");
          });

        currentColor.classList.add("active");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const catalogButton = document.querySelector("[data-catalog-button]");

  if (catalogButton) {
    window.addEventListener("click", (event) => {
      const target = event.target;

      if (target.closest("[data-catalog-button]")) {
        const cell = target.closest("[data-table-cell]");
        const caption = cell.querySelector("[data-table-caption]");
        const input = cell.querySelector("[data-table-input]");

        cell.classList.add("active");
        caption.textContent = `${input.value}`;
      }

      if (target.closest("[data-catalog-change]")) {
        const cell = target.closest("[data-table-cell]");

        cell.classList.remove("active");
      }
      if (target.closest("[data-catalog-remove]")) {
        const cell = target.closest("[data-table-cell]");
        const input = cell.querySelector("[data-table-input]");

        target.closest("[data-table-item]").classList.remove("active");
        cell.classList.remove("active");
        input.value = "";
      }
    });
  }
});

const searchTabs = document.querySelector('.search-page-tabs');
const searchContainer = document.querySelector('.search-body-container');
const searchGroups = searchContainer.querySelectorAll('.search-body-item');

if (searchTabs) {

  searchTabs.querySelectorAll('.search-page-tabs__item').forEach((item, index) => {

    item.addEventListener('click', () => {
      searchTabs.querySelector('.is-active').classList.remove('is-active');
      item.classList.add('is-active');

      searchContainer.querySelector('.is-active').classList.remove('is-active');
      searchGroups[index].classList.add('is-active');
    })
  })

}


import AOS from 'aos';

document.body.classList.add('body--hidden')

window.addEventListener("load", () => {
  const loader = document.querySelector('.loader')

  if (loader) {
    const DELAY = 1000
    const layers = document.querySelectorAll('.loader__layer')

    layers.forEach((item, i) => {
      setTimeout(() => {
        item.classList.add('active')
      }, DELAY * i);
    })

    setTimeout(() => {
      loader.classList.add('loader--hidden')
      document.body.classList.remove('body--hidden')
      window.scrollTo(0, 0);
      AOS.init({
        once: true,
        offset: 0,
        duration: 1000,
      });
      document.querySelector('.main-page__video').play()
    }, DELAY * layers.length);
  } else {
    document.body.classList.remove('body--hidden')
  }
})

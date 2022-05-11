import AOS from 'aos';

document.body.classList.add('body--hidden')

window.addEventListener("load", () => {
  document.body.classList.remove('body--unvisible')
  const loader = document.querySelector('.loader')

  if (loader) {
    const DELAY = 800
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
      setTimeout(() => {
        AOS.init({
          once: true,
          offset: 0,
          duration: 1200,
        });
        document.querySelector('.main-page__video-player').play()
      }, 1100);
    }, DELAY * layers.length - 200);
  } else {
    document.body.classList.remove('body--hidden')
    AOS.init({
      once: true,
      offset: 0,
      duration: 1200,
    });
  }
})

import { mediaQuery } from "./mediaQueries"

document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.main-page__video')
  
  if (video && mediaQuery.matches) {
    const left = document.querySelector('.main-page__video-left')
    const right = document.querySelector('.main-page__video-right')
  
    window.addEventListener('scroll', function() {
      const scrollPos = this.pageYOffset
      const step = Math.round(((video.offsetTop + video.clientHeight) - (scrollPos + window.innerHeight)) * 0.1)
  
      if (scrollPos + window.innerHeight < video.offsetTop + video.clientHeight) {
        left.style.width = `${step}px`
        right.style.width = `${step}px`
      } else {
        left.style.width = 0
        right.style.width = 0
      }
    })
  }
})
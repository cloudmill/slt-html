(()=>{var e,a={266:(e,a,t)=>{"use strict";var o=t(592),n=t(638);n(window).on("load",(function(){var e=n("[data-slider-id]");0!==e.length&&e.each((function(){var e=n(this),a=e.data("slider-id"),t=e.data("slider-prev"),d=e.data("slider-next"),i=n('[data-slider-button="'.concat(t,'"]')),c=n('[data-slider-button="'.concat(d,'"]')),s={slidesPerView:"auto",spaceBetween:20};switch(a){case 3:s={loop:!0,slidesPerView:"auto",spaceBetween:12,centeredSlides:!0};break;case 10:s={slidesPerView:"auto",spaceBetween:150,loop:!0,centeredSlides:!0};break;case 21:s={slidesPerView:"auto",spaceBetween:20,loop:!0}}var l=new o.Z(e[0],s);i.on("click",(function(){l.slidePrev()})),c.on("click",(function(){l.slideNext()}))}))}));var d=1280,i=768,c=window.matchMedia("(min-width: ".concat(d,"px)")),s=(window.matchMedia("(min-width: ".concat(i,"px)")),t(638));s((function(){if(c.matches){var e=s(".header"),a=e.find("[data-accordion-header]"),t=e.find("[data-header-modal]"),o={closeAll:function(){t.slideUp(),a.removeClass("active")},classRemove:function(){s(".body").removeClass("body--hidden"),s(".header__panel").removeClass("header__panel--active"),s(".header__nav").removeClass("header__nav--active")}};window.addEventListener("click",(function(e){var a=e.target.closest("[data-accordion-header]");if(a){var t=a.getAttribute("data-accordion-header");a.classList.contains("active")?(a.classList.remove("active"),s("[data-header-modal=".concat(t,"]")).slideUp(),o.classRemove()):(o.closeAll(),a.classList.add("active"),s(".body").addClass("body--hidden"),s(".header__panel").addClass("header__panel--active"),s("[data-header-modal=".concat(t,"]")).slideDown(),s(".header__nav").addClass("header__nav--active"))}e.target.classList.contains("header__panel-overlay")&&(o.closeAll(),o.classRemove())}))}}));var l=t(566),r=t.n(l);document.body.classList.add("body--hidden"),window.addEventListener("load",(function(){var e=document.querySelector(".loader");if(e){var a=document.querySelectorAll(".loader__layer");a.forEach((function(e,a){setTimeout((function(){e.classList.add("active")}),1e3*a)})),setTimeout((function(){e.classList.add("loader--hidden"),document.body.classList.remove("body--hidden"),window.scrollTo(0,0),r().init({once:!0,offset:0,duration:1e3}),document.querySelector(".main-page__video").play()}),1e3*a.length)}else document.body.classList.remove("body--hidden"),r().init({once:!0,offset:0,duration:1e3})}));t(378),t(917);var f=t(638);f((function(){f.fancybox.defaults.closeExisting=!0,f.fancybox.defaults.touch=!1,f.fancybox.defaults.hideScrollbar=!1,f.fancybox.defaults.baseTpl='<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',f("[data-fancy-button]").on("click",(function(e){e.preventDefault();var a=f(this).data("fancy-button"),t=f('[data-fancy-modal="'.concat(a,'"]'));switch(a){case 10:case"p1":f.fancybox.defaults.animationEffect="slide-in-out",f.fancybox.defaults.animationDuration=500;break;default:f.fancybox.defaults.closeExisting=!0,f.fancybox.defaults.touch=!1,f.fancybox.defaults.hideScrollbar=!1,f.fancybox.defaults.baseTpl='<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',f.fancybox.defaults.animationEffect="zoom",f.fancybox.defaults.animationDuration=500}f.fancybox.open(t)}))}))},378:(e,a,t)=>{var o=t(638);o((function(){o("[data-accordion]").length&&window.addEventListener("click",(function(e){var a=o("[data-accordion]"),t=o(e.target);t.closest("[data-accordion-button]").length&&(t.closest(a).toggleClass("active"),t.closest(a).find("[data-accordion-dropdown]").eq(0).slideToggle())}))}))}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var d=t[e]={exports:{}};return a[e].call(d.exports,d,d.exports,o),d.exports}o.m=a,e=[],o.O=(a,t,n,d)=>{if(!t){var i=1/0;for(r=0;r<e.length;r++){for(var[t,n,d]=e[r],c=!0,s=0;s<t.length;s++)(!1&d||i>=d)&&Object.keys(o.O).every((e=>o.O[e](t[s])))?t.splice(s--,1):(c=!1,d<i&&(i=d));if(c){e.splice(r--,1);var l=n();void 0!==l&&(a=l)}}return a}d=d||0;for(var r=e.length;r>0&&e[r-1][2]>d;r--)e[r]=e[r-1];e[r]=[t,n,d]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a}),a},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={143:0,532:0};o.O.j=a=>0===e[a];var a=(a,t)=>{var n,d,[i,c,s]=t,l=0;if(i.some((a=>0!==e[a]))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(s)var r=s(o)}for(a&&a(t);l<i.length;l++)d=i[l],o.o(e,d)&&e[d]&&e[d][0](),e[i[l]]=0;return o.O(r)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var n=o.O(void 0,[439,532],(()=>o(266)));n=o.O(n)})();
(()=>{var e,t={9492:(e,t,a)=>{"use strict";var n=a(5440),o=a(5638);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}o(window).on("load",(function(){var e=o("[data-slider-id]");0!==e.length&&e.each((function(){var e=o(this),t=e.data("slider-id"),a=e.data("slider-prev"),c=e.data("slider-next"),r=o('[data-slider-button="'.concat(a,'"]')),l=o('[data-slider-button="'.concat(c,'"]')),d={slidesPerView:"auto",spaceBetween:20,speed:500};switch(t){case"main":d=i(i({},d),{},{centeredSlides:!1,loop:!0,spaceBetween:20,breakpoints:s({},1280,{spaceBetween:172,centeredSlides:!0})});break;case 3:d={loop:!0,slidesPerView:"auto",spaceBetween:12,centeredSlides:!0};break;case 5:d={speed:500,slidesPerView:"auto",spaceBetween:0,pagination:{el:".swiper-pagination"}};break;case 10:d={slidesPerView:"auto",spaceBetween:150,loop:!0,centeredSlides:!0};break;case 21:d={slidesPerView:"auto",spaceBetween:20,allowTouchMove:!1,loop:!0,speed:300}}var u=new n.Z(e[0],d);r.on("click",(function(){u.slidePrev()})),l.on("click",(function(){u.slideNext()}))}))}));var r=1280,l=768,d=window.matchMedia("(min-width: ".concat(r,"px)")),u=(window.matchMedia("(min-width: ".concat(l,"px)")),a(5638));u((function(){if(d.matches){var e=function(){var e=u(window).scrollTop();Math.abs(n-e)>=1&&(e>n?t.addClass("header--up"):t.removeClass("header--up")),n<1&&t.removeClass("header--up"),u("[data-header-transparent]").length&&(n<1?t.addClass("header--transparent"):t.removeClass("header--transparent")),n=e},t=u(".header"),a=120,n=u(window).scrollTop();u(window).one("scroll",(function t(){e(),setTimeout((function(){e(),u(window).one("scroll",t)}),1e3/a)}))}})),u((function(){u(".catalog-card").each((function(){var e,t=null,a=u(this).find("[data-category-img]");u(this).on("mouseover",(function(n){if(!t){var o=u(n.target).closest("[data-header-category]");o.length&&(e=o.closest("[data-category-item]").index(),t=o,a.eq(e).addClass("active"))}})),u(this).on("mouseout",(function(n){t&&(u(n.relatedTarget).closest("[data-header-category]")[0]!==t[0]&&(t.removeClass("active"),a.eq(e).removeClass("active")),t=null)}))}))})),u((function(){if(d.matches){var e=u(".header"),t=e.find("[data-accordion-header]"),a=e.find("[data-header-modal]"),n={closeAll:function(){a.removeClass("active"),t.removeClass("active"),a.slideUp(500)},classRemove:function(){u(".body").removeClass("body--hidden"),u(".header__panel").removeClass("header__panel--active"),u(".header__nav").removeClass("header__nav--active")}};window.addEventListener("click",(function(e){var o=e.target.closest("[data-accordion-header]");if(o){var c=o.getAttribute("data-accordion-header"),i=u("[data-header-modal=".concat(c,"]"));o.classList.contains("active")?(o.classList.remove("active"),setTimeout((function(){i.slideUp(500)}),500),i.removeClass("active"),n.classRemove()):(n.closeAll(),o.classList.add("active"),u(".body").addClass("body--hidden"),u(".header__panel").addClass("header__panel--active"),i.slideDown(500),i.addClass("active"),"cards"!==c&&"service"!==c?u(".header__nav").addClass("header__nav--active"):u(".header__nav").removeClass("header__nav--active"))}e.target.classList.contains("header__panel-overlay")&&(setTimeout((function(){a.slideUp(500)}),500),a.removeClass("active"),t.removeClass("active"),n.classRemove())}))}})),u((function(){var e=u("[data-feedback-btn]"),t=e.find("[data-feedback-dropdown]");e.on("click",(function(){e.toggleClass("active"),t.slideToggle(400)}))}));var f=a(5566),v=a.n(f);document.body.classList.add("body--hidden"),window.addEventListener("load",(function(){document.body.classList.remove("body--unvisible");var e=document.querySelector(".loader");if(e){var t=document.querySelectorAll(".loader__layer");t.forEach((function(e,t){setTimeout((function(){e.classList.add("active")}),800*t)})),setTimeout((function(){e.classList.add("loader--hidden"),document.body.classList.remove("body--hidden"),window.scrollTo(0,0),setTimeout((function(){v().init({once:!0,offset:0,duration:1200}),document.querySelector(".main-page__video-player").play()}),1100)}),800*t.length-200)}else document.body.classList.remove("body--hidden"),v().init({once:!0,offset:0,duration:1200})}));a(3378),a(8917);var m=a(5638);m((function(){m.fancybox.defaults.closeExisting=!0,m.fancybox.defaults.touch=!1,m.fancybox.defaults.hideScrollbar=!1,m.fancybox.defaults.baseTpl='<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',m("[data-fancy-button]").on("click",(function(e){e.preventDefault();var t=m(this).data("fancy-button"),a=m('[data-fancy-modal="'.concat(t,'"]'));switch(t){case"work1":m.fancybox.defaults.animationEffect="left",m.fancybox.defaults.animationDuration=800,m.fancybox.defaults.afterShow=function(e,t){t.src.querySelector("form").reset(),m(t.src).closest(".fancybox-container").addClass("open"),m(t.src).addClass("active")},m.fancybox.defaults.beforeClose=function(e,t){m(t.src).removeClass("active")};break;case"c1":case"call":m.fancybox.defaults.animationEffect="left",m.fancybox.defaults.animationDuration=800,m.fancybox.defaults.afterShow=function(e,t){m(t.src).closest(".fancybox-container").addClass("open"),m(t.src).addClass("active")},m.fancybox.defaults.beforeClose=function(e,t){m(t.src).removeClass("active")};break;case"search":m.fancybox.defaults.animationEffect="top",m.fancybox.defaults.animationDuration=800,m.fancybox.defaults.afterShow=function(e,t){m(t.src).closest(".fancybox-container").addClass("open"),m(t.src).addClass("active")},m.fancybox.defaults.beforeClose=function(e,t){m(t.src).removeClass("active")};break;default:m.fancybox.defaults.closeExisting=!0,m.fancybox.defaults.touch=!1,m.fancybox.defaults.hideScrollbar=!1,m.fancybox.defaults.baseTpl='<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',m.fancybox.defaults.animationEffect="zoom",m.fancybox.defaults.animationDuration=500}m.fancybox.open(a)}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".main-page__video");if(e&&d.matches){var t=document.querySelector(".main-page__video-left"),a=document.querySelector(".main-page__video-right");window.addEventListener("scroll",(function(){var n=this.pageYOffset,o=Math.round(.1*(e.offsetTop+e.clientHeight-(n+window.innerHeight)));n+window.innerHeight<e.offsetTop+e.clientHeight?(t.style.width="".concat(o,"px"),a.style.width="".concat(o,"px")):(t.style.width=0,a.style.width=0)}))}}));a(791),a(6560),a(744),a(9490);var h=a(5638);h((function(){h(".select__select").each((function(){var e=h(this),t=e.closest(".select-wrapper"),a=getComputedStyle(t[0]),n=h(this).data("select-placeholder");"static"===a.position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:n}),e.on("select2:open",(function(){t.css("z-index","100000");var e=t.find(".select2-dropdown");e.hide();var a=setTimeout((function(){e.slideDown({duration:500}),clearTimeout(a)}),0)})),e.on("select2:closing",(function(a){a.preventDefault();var o=t.find(".select2-dropdown"),c=setTimeout((function(){t.css("z-index","");var a=t.find(".select2");a.addClass("closing"),a.removeClass("select2-container--open"),o.slideUp(500,(function(){var a=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:n}),e.removeClass("closing"),t.css("z-index",""),clearTimeout(a)}),300)})),clearTimeout(c)}),0)}))}))})),h((function(){var e=h(".select");e.length&&!d.matches&&e.each((function(){var e=h(this).find(".select__mobile"),t=h(this).find(".select2-selection__placeholder");e.on("change",(function(){t.text(this.value)}))}))}));var p=a(5638);function y(){if(p("#map").length)try{ymaps.ready((function(){var e=new ymaps.Map("map",{center:[55.749175531624125,37.61820806388663],zoom:15,controls:["zoomControl","geolocationControl"]},{maxZoom:22}),t=new ymaps.Clusterer({clusterIconLayout:ymaps.templateLayoutFactory.createClass('<div class="cluster">{{ properties.geoObjects.length }}</div>'),clusterIconShape:{type:"Rectangle",coordinates:[[0,0],[50,50]]}});e.behaviors.disable("scrollZoom");var a=[],n=[];p(".placemarks__address").each((function(){n.push(ymaps.geocode(p(this).text().trim()))})),Promise.all(n).then((function(n){n.forEach((function(e,t){var n=e.geoObjects.get(0).geometry.getCoordinates(),o=p(".placemarks__item").eq(t).data("modal-id"),c=p(".placemarks__item").eq(t).data("item"),i=new ymaps.Placemark(n,{},{iconLayout:"default#image",iconImageHref:"assets/images/svg/placemark.svg",iconImageSize:[33,45],iconImageOffset:[-16.5,-80],balloonPanelMaxMapArea:0,hideIconOnBalloonOpen:!1});i.events.add(["click"],(function(){window.dispatchEvent(new CustomEvent("mapModalOpen",{detail:{modalId:c}})),p.fancybox.defaults.animationEffect="left",p.fancybox.defaults.animationDuration=800,p.fancybox.defaults.afterShow=function(e,t){p(t.src).closest(".fancybox-container").addClass("open"),p(t.src).addClass("active")},p.fancybox.defaults.beforeClose=function(e,t){p(t.src).removeClass("active")},p.fancybox.open(p("[data-map-modal=".concat(o,"]")))})),a.push(i)})),t.add(a),e.geoObjects.add(t),e.setBounds(t.getBounds(),{zoomMargin:Math.max(33,45)}).then((function(){1===a.length&&e.setZoom(12)}))}))}))}catch(e){console.error(e)}}y();a(9846);var g=a(6206),b=a(5638);function w(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}b((function(){b(".tooltip").each((function(){var e=b(this).find(".tooltip__container").text().trim(),t=b(this).find(".tooltip__icon");(0,g.ZP)(t[0],{content:e,appendTo:b(".main")[0],offset:[0,14],delay:0,zIndex:999999})}))}));var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=document.querySelector(t),this.root&&(this.list=this.root.querySelector("[data-catalog-list]"),this.currentItems=[])}var t,a,n;return t=e,(a=[{key:"showItems",value:function(e){var t=this;e.forEach((function(e){if(!t.currentItems.includes(e)){var a=t.root.querySelector("[data-catalog-template]").content.firstElementChild.cloneNode(!0);a.querySelector(".category-list__text").textContent=e.text,t.list.append(a),t.currentItems.push(e)}})),e.length?this.root.classList.add("active"):this.root.classList.remove("active")}},{key:"deleteItem",value:function(e,t){var a=e.closest("[data-category]"),n=a.querySelector(".category-list__text").textContent;return t.forEach((function(e){e.text===n&&(e.element.classList.remove("active"),e.element.querySelector("[data-item-checkbox]").checked=!1)})),t=t.filter((function(e){return e.text!=n})),this.currentItems=this.currentItems.filter((function(e){return e.text!=n})),a.remove(),t.length||this.root.classList.remove("active"),t}},{key:"clearItems",value:function(){this.list.querySelectorAll("[data-category]").forEach((function(e){return e.remove()})),this.root.classList.remove("active"),this.currentItems=[]}}])&&w(t.prototype,a),n&&w(t,n),e}();function L(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var C=function(){function e(t,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.items=document.querySelectorAll(t),this.items.length&&(this.selectedItems=[],this.init(a))}var t,a,n;return t=e,(a=[{key:"init",value:function(e){var t=this;this.items.forEach((function(a){var n=a.querySelector("[data-item-checkbox]"),o=a.querySelector("[data-item-text]").textContent;n.onchange=function(){n.checked?(t.selectedItems.push({text:o,element:a}),a.classList.add("active")):(t.selectedItems=t.selectedItems.filter((function(e){return e.text!==o})),a.classList.remove("active")),e.onchange&&e.onchange()}}))}},{key:"clearItems",value:function(){this.selectedItems.forEach((function(e){e.element.querySelector("[data-item-checkbox]").checked=!1,e.element.classList.remove("active")})),this.selectedItems=[]}}])&&L(t.prototype,a),n&&L(t,n),e}();function k(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var S=function(){function e(t,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=document.querySelector(t),this.isOpen=!1,this.clickHander(a)}var t,a,n;return t=e,(a=[{key:"clickHander",value:function(e){var t=this;window.addEventListener("click",(function(a){var n=a.target;n.closest(e)&&(t.isOpen?t.closeMenu():(t.root.classList.add("menu"),document.body.classList.add("body--hidden")),t.isOpen=!t.isOpen),n.closest("[data-modal-btn]")&&(t.findId("data-modal-btn",n),t.modal.classList.add("active")),n.closest("[data-modal-close]")&&(t.findId("data-modal-close",n),t.modal.classList.remove("active"))}))}},{key:"findId",value:function(e,t){this.id=t.closest("[".concat(e,"]")).getAttribute(e),this.modal=document.querySelector('[data-modal-menu="'.concat(this.id,'"]'))}},{key:"closeMenu",value:function(){var e=document.querySelectorAll("[data-modal-menu]");this.root.classList.remove("menu"),document.body.classList.remove("body--hidden"),e.forEach((function(e){e.classList.remove("active")}))}}])&&k(t.prototype,a),n&&k(t,n),e}();document.addEventListener("DOMContentLoaded",(function(){new S(".header",".header__menu")})),document.addEventListener("DOMContentLoaded",(function(){if(document.querySelector("[data-objects-menu]")){var e,t=new S("[data-objects-menu]","[data-menu-button]"),a=new x("[data-list-container]"),n=new C("[data-objects-item]",{onchange:function(){e()}});e=d.matches?function(){a.clearItems(),a.showItems(n.selectedItems)}:function(){var e=document.querySelector("[data-menu-panel]"),t=e.querySelector("[data-menu-clear]");n.selectedItems.length?(e.classList.add("active"),t.textContent="Сбросить (".concat(n.selectedItems.length,")")):e.classList.remove("active")},window.addEventListener("click",(function(o){var c=o.target;c.closest("[data-menu-close]")&&(t.closeMenu(),t.isOpen=!1),c.closest("[data-menu-clear]")&&(n.clearItems(),a.clearItems(),e()),c.closest("[data-menu-accept]")&&(o.preventDefault(),a.showItems(n.selectedItems),t.closeMenu()),c.closest("[data-delete-category]")&&(n.selectedItems=a.deleteItem(c,n.selectedItems),e()),c.closest("[data-clear-categories]")&&(n.clearItems(),a.clearItems(),e())}))}}));var _=a(5638);document.addEventListener("DOMContentLoaded",(function(){if(document.querySelector(".catalog-modal")){var e=function(){var e=document.querySelector(".catalog-modal__panel");t.selectedItems.length?e.classList.remove("hidden"):e.classList.add("hidden")},t=new C("[data-catalog-item]",{onchange:function(){e()}}),a=new x("[data-list-container]");window.addEventListener("click",(function(n){var o=n.target;o.closest("[data-catalog-show]")&&(n.preventDefault(),a.showItems(t.selectedItems),_.fancybox.close(o.closest("[data-fancy-modal]"))),o.closest("[data-delete-category]")&&(t.selectedItems=a.deleteItem(o,t.selectedItems),e()),o.closest("[data-clear-categories]")&&(t.clearItems(),a.clearItems(),e())}))}}));var E=a(5191),O=a(5638);O(window).on("load",(function(){var e=O("[data-about-slider]");if(e.length){var t,a;if(d.matches){t=e.find("[data-slider-desktop]");var n=e.find("[data-about-next]"),o=e.find("[data-about-prev]");a=new E.ZP(t[0],{slidesPerView:"auto",spaceBetween:20,slidesPerGroup:2,allowTouchMove:!1,speed:500}),n.on("click",(function(){a.slideNext()})),o.on("click",(function(){a.slidePrev()}));var c,i=null,s=O("[data-slider-parent]");t.on("mouseover",(function(e){if(!i){var t=O(e.target).closest(".about-page__slider-slide");t.length&&(5===(c=t.closest(".swiper-slide").index()-a.activeIndex)?s.addClass("left"):c&&s.addClass("center"),(i=t).addClass("active"))}})),t.on("mouseout",(function(e){i&&(O(e.relatedTarget).closest(".about-page__slider-slide")[0]!==i[0]&&i.removeClass("active"),5===c?s.removeClass("left"):c&&s.removeClass("center"),i=null)}))}else t=e.find("[data-slider-mobile]"),a=new E.ZP(t[0],{slidesPerView:"auto",spaceBetween:12,centeredSlides:!0});var r,l=t.find(".swiper-slide"),u=O("[data-slider-progress]");if(d.matches){var f=l.length%2;r=100/((l.length-6+f)/2+1)}else r=100/l.length;u.css("width","".concat(r,"%"));var v=a.progress,m=0;a.on("slideChange",(function(){var e=a.progress;v<e&&(m+=100),v>e&&(m-=100),u.css("transform","translateX(".concat(m,"%)")),v=e}))}}));a(8408),a(8163),a(278),a(5123),a(2137),a(4563);function q(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return i=e.done,e},e:function(e){s=!0,c=e},f:function(){try{i||null==a.return||a.return()}finally{if(s)throw c}}}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a(5638)((function(){Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Обязательное поле",pattern:"Это значение некорректно",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Это значение должно содержать не менее %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Это значение должно совпадать"}),Parsley.setLocale("ru")})),document.addEventListener("DOMContentLoaded",(function(){var e,t=document.querySelectorAll("input[data-tel-input]"),a=function(e){return e.value.replace(/\D/g,"")},n=function(e){var t=e.target,n=a(t),o=e.clipboardData||window.clipboardData;if(o){var c=o.getData("Text");if(/\D/g.test(c))return void(t.value=n)}},o=function(e){var t=e.target,n=a(t),o=t.selectionStart,c="";if(!n)return t.value="";if(t.value.length==o){if(["7","8","9"].indexOf(n[0])>-1){"9"==n[0]&&(n="7"+n);var i="8"==n[0]?"8":"+7";c=t.value=i+" ",n.length>1&&(c+="("+n.substring(1,4)),n.length>=5&&(c+=") "+n.substring(4,7)),n.length>=8&&(c+="-"+n.substring(7,9)),n.length>=10&&(c+="-"+n.substring(9,11))}else c="+"+n.substring(0,16);if(/^\+0+/g.test(c)){var s=c.replace(/^\+0+/g,"");s.length>0?t.value="+".concat(s):t.value=""}else t.value=c.replace(/^\+0+/g,"")}else e.data&&/\D/g.test(e.data)&&(t.value=n)},c=function(e){var t=e.target.value.replace(/\D/g,"");8==e.keyCode&&1==t.length&&(e.target.value="")},i=q(t);try{for(i.s();!(e=i.n()).done;){var s=e.value;s.addEventListener("keydown",c),s.addEventListener("input",o,!1),s.addEventListener("paste",n,!1)}}catch(e){i.e(e)}finally{i.f()}})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("#input");e&&(e.forEach((function(t){t.addEventListener("click",(function(t){var a=t.target.closest("#input");e.forEach((function(e){e.classList.remove("is-active")})),a.classList.add("is-active")}))})),window.addEventListener("click",(function(t){t.target.closest("#input")||e.forEach((function(e){e.classList.remove("is-active")}))})))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("#radio-group");e&&e.forEach((function(e){e.addEventListener("click",(function(t){e.querySelectorAll(".radio").forEach((function(e){e.classList.remove("active")})),t.target.closest(".radio").classList.add("active")}))}))}));a(9415),a(7166);var j=a(5638);j((function(){j(document).on("change","[data-type=js-filter-change]",(function(e){e.preventDefault();var t=j(this).val(),a=[],n=0;console.log("filter change  "+t),j(document).find("[data-type=js-filter-list]").each((function(){if(j(this).hasClass("is-active")){var e=j(this).attr("data-value");a[n]=e,n++}})),console.log(a),console.log(t),j(this).addClass("active-city"),j.ajax({method:"POST",url:window.location.href,data:{ajax:1,city:t,tags:a},success:function(e){j(document).find("[data-type=items-container-full]").empty(),j(document).find("[data-type=items-container-full]").append(j(e)),y()},error:function(e){console.debug(e)}})})),j(document).on("click","[data-type=js-filter-checkbox]",(function(e){console.log("filter checkbox ");var t=j(this),a=[],n=t.parents("[data-type=filter-parent]"),o=0;a={ajax:1},n.find("[data-type=js-filter-checkbox]").each((function(){var e=j(this).attr("data-code");a[e]=[]})),n.find("[data-type=js-filter-checkbox]").each((function(){if(j(this).is(":checked")){var e=j(this).attr("data-code"),t=j(this).val();a[e][o]=t,o++}})),console.log(a),j.ajax({type:"POST",url:window.location.href,data:a,success:function(e){j(document).find("[data-type=items-container-full]").empty(),j(document).find("[data-type=items-container-full]").append(j(e))},error:function(e){console.debug(e)}})})),j(document).on("click","[data-type=js-filter-list]",(function(e){e.preventDefault();var t=j(this).parents("#filters-container"),a=0,n=[],o="",c=j(document).find(".active-city");console.log("filter list "),t.find("[data-type=js-filter-list]").each((function(){if(j(this).hasClass("is-active")){var e=j(this).attr("data-value");n[a]=e,a++}})),c&&(o=c.val()),console.log(n),console.log(o),j.ajax({method:"POST",url:window.location.href,data:{ajax:1,tags:n,city:o},success:function(e){j(document).find("[data-type=items-container-full]").empty(),j(document).find("[data-type=items-container-full]").append(j(e)),y()},error:function(e){console.debug(e)}})})),j(document).on("click","[data-type=js-filter-color]",(function(e){e.preventDefault();var t=j(this).attr("data-color");console.log("filter color - "+t),j.ajax({method:"POST",url:window.location.href,data:{ajax:1,color:t},success:function(e){j(document).find("[data-type=items-container-full]").empty(),j(document).find("[data-type=items-container-full]").append(j(e))},error:function(e){console.debug(e)}})})),j(document).ready((function(){var e=j(document).find("[data-type=snippet-img-hide]");j(document).find("[data-type=snippet-img-show]").html(e)})),j(document).on("submit","[data-type=js-form]",(function(e){console.log("form submit"),e.preventDefault();var t=j(this),a=t.attr("data-url"),n=0,o=!!t.find("[data-type=get-field-file]").length&&t.find("[data-type=get-field-file]"),c=!o&&"application/x-www-form-urlencoded; charset=UTF-8",i=!o,s=o?new FormData:{};o&&(j.each(o.files,(function(e,t){s.append("file[]",t)})),s.append("file",o[0].files[0])),t.find("[data-type=get-field]").each((function(){var e=j(this).attr("data-uf"),t=j(this).val();o?s.append(e,t):s[e]=t})),t.find("[data-type=get-field-multi]").each((function(){var e=j(this).attr("data-uf");s[e]=[]})),t.find("[data-type=get-field-multi]").each((function(){if(j(this).is(":checked")){var e=j(this).attr("data-uf"),t=j(this).attr("text");s[e][n]=t,n++}})),t.find("[data-type=get-field-radio]").each((function(){if(j(this).is(":checked")){var e=j(this).attr("data-uf"),t=j(this).attr("data-value");s[e]=t}})),j.ajax({type:"POST",url:a,dataType:"json",contentType:c,processData:i,data:s,success:function(e){console.log(e)}})})),j(document).on("click","[data-fancy-button=video]",(function(e){var t=j(this).attr("data-video");j(document).find("[data-type=iframe-video-modal]").attr("src",t)})),j(document).on("click","[data-type=work-modal]",(function(e){var t=j(this),a=t.attr("data-text"),n=t.attr("data-id"),o=t.attr("data-fancy-button"),c=j(document).find("[data-fancy-modal="+o+"]"),i=c.find("[data-type=ttl]"),s=c.find("[data-uf=UF_VAC_ID]");i.html(a),s.val(n)}))}))},3378:(e,t,a)=>{var n=a(5638);function o(e,t){var a=n(t),o=n(e.target);o.closest("[data-accordion-button]").length&&(o.closest(a).toggleClass("active"),o.closest(a).find("[data-accordion-dropdown]").eq(0).slideToggle())}n((function(){n("[data-accordion]").length&&window.addEventListener("click",(function(e){o(e,"[data-accordion]")}))})),n((function(){n("[data-objects-accordion]")&&window.addEventListener("click",(function(e){o(e,"[data-objects-accordion]"),n(e.target).closest("[data-objects-accordion]").length||(n("[data-objects-accordion]").find("[data-accordion-dropdown]").slideUp(),n("[data-objects-accordion]").removeClass("active"))}))}))},9846:(e,t,a)=>{var n=a(5638);n((function(){n("[data-scroll]").length&&n("[data-scroll]").on("click",(function(e){e.preventDefault();var t=n(this).data("scroll"),a=n(t).offset().top;n("html, body").animate({scrollTop:a-120},700)}))}))},278:(e,t,a)=>{var n=a(5638);n((function(){var e=n(".filters");if(e.length){var t=e.find(".filters__headings");window.addEventListener("click",(function(e){var a=n(e.target).closest("[data-filters-button]");if(a.length){var o=a.closest("[data-filters-button]").attr("data-filters-button");a.closest(".filters__headings-item").toggleClass("visible"),t.toggleClass("darken"),n("[data-filters-dropdown=".concat(o,"]")).slideToggle()}}))}}))},7166:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-table-input]");e.length&&e.forEach((function(e){var t=e.closest("[data-table-item]");e.oninput=function(){this.value.length?t.classList.add("active"):t.classList.remove("active")}}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".catalog-page__colors-item");e&&e.addEventListener("click",(function(t){var a=t.target.closest(".catalog-page__colors-icon");a&&(e.querySelectorAll(".catalog-page__colors-icon").forEach((function(e){e.classList.remove("active")})),a.classList.add("active"))}))})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector("[data-catalog-button]")&&window.addEventListener("click",(function(e){var t=e.target.closest("[data-catalog-button]");if(t){var a=t.closest("[data-table-cell]"),n=t.querySelector(".catalog-page__table-add"),o=a.querySelector("[data-table-caption]"),c=a.querySelector("[data-table-input]");a.classList.contains("active")?(n.textContent="Добавить",a.classList.remove("active")):(n.textContent="Изменить",a.classList.add("active"),o.textContent="Добавлено: ".concat(c.value))}}))}))},6560:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-checkbox-reveal]");if(e){var t=document.querySelector("[data-container-reveal]");e.onchange=function(){this.checked?(t.classList.add("active"),t.querySelectorAll("input").forEach((function(e){e.setAttribute("required","required")}))):(t.classList.remove("active"),t.querySelectorAll("input").forEach((function(e){e.removeAttribute("required")})))}}}))},9415:(e,t,a)=>{var n=a(5638);n((function(){var e=n("[data-form]");0!==e.length&&e.each((function(){var e=n(this),t=e.data("form");e.on("submit",(function(e){e.preventDefault(),n.fancybox.defaults.closeExisting=!0,n.fancybox.defaults.touch=!1,n.fancybox.defaults.hideScrollbar=!1,n.fancybox.defaults.baseTpl='<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',n.fancybox.defaults.animationEffect="zoom",n.fancybox.defaults.animationDuration=500,n.fancybox.defaults.afterShow=function(e,t){},n.fancybox.open(n("[data-response=".concat(t,"]")))}))}))}))},8408:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-order-card]");if(e.length){var t=document.querySelector("[data-order-panel]"),a=t.querySelector(".order-page__panel-title");a.textContent="".concat(a.textContent," ").concat(e.length),t.classList.remove("hidden"),document.querySelector(".footer").classList.add("footer--order")}}))},744:()=>{document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("click",(function(e){var t=e.target.closest("[data-link]");if(t){e.preventDefault();var a=t.getAttribute("href");document.body.classList.add("fade-out"),setTimeout((function(){window.location.assign(a)}),500)}}))}))},791:(e,t,a)=>{var n=a(5638);n((function(){var e=n("[data-parallax]");0!==e.length&&e.each((function(){var e=n(this),t=e.offset().top,a=e.data("parallax"),o=n("[data-parallax-container='".concat(a,"']")),c=n(this).data("parallax-type");n(window).on("scroll",(function(){var a=this.pageYOffset;if(a<o.offset().top&&a+n(window).height()/2>t){var i=.1*(a+n(window).height()/2-t);"up"===c?requestAnimationFrame((function(){e.css("transform","translateY(-".concat(i,"px)"))})):requestAnimationFrame((function(){e.css("transform","translateY(".concat(i,"px)"))}))}}))}))}))},8163:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-decrease]");if(e){var t=e.closest("[data-decrease-container]"),a=e.offsetWidth;window.addEventListener("scroll",(function(){var n=window.pageYOffset+window.innerHeight/3,o=t.offsetTop-n;n<t.offsetTop&&a>o&&(e.style.width="".concat(o,"px")),o<0&&(e.style.width="1px")}))}}))},5123:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".search-page-tabs");e&&e.querySelectorAll(".search-page-tabs__item").forEach((function(t,a){t.addEventListener("click",(function(){e.querySelector(".is-active").classList.remove("is-active"),t.classList.add("is-active")}))}))}))},2137:()=>{if(document.querySelector(".where-buy__filters")){var e=document.getElementById("filters-container"),t=document.querySelector(".where-buy__filters-reset");e.addEventListener("click",(function(a){var n=a.target.closest(".filter-btn");n&&(n.classList.contains("is-active")?n.classList.remove("is-active"):n.classList.add("is-active")),e.querySelector(".is-active")?t.classList.remove("reset-disabled"):t.classList.add("reset-disabled")})),t.addEventListener("click",(function(){e.querySelectorAll(".is-active").forEach((function(e){e.classList.remove("is-active")})),t.classList.add("reset-disabled")}))}}},a={};function n(e){var o=a[e];if(void 0!==o)return o.exports;var c=a[e]={exports:{}};return t[e].call(c.exports,c,c.exports,n),c.exports}n.m=t,e=[],n.O=(t,a,o,c)=>{if(!a){var i=1/0;for(d=0;d<e.length;d++){for(var[a,o,c]=e[d],s=!0,r=0;r<a.length;r++)(!1&c||i>=c)&&Object.keys(n.O).every((e=>n.O[e](a[r])))?a.splice(r--,1):(s=!1,c<i&&(i=c));if(s){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[a,o,c]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0,532:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var o,c,[i,s,r]=a,l=0;if(i.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(r)var d=r(n)}for(t&&t(a);l<i.length;l++)c=i[l],n.o(e,c)&&e[c]&&e[c][0](),e[i[l]]=0;return n.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=n.O(void 0,[326,532],(()=>n(9492)));o=n.O(o)})();
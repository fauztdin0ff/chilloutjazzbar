"use strict"

//------------------------Плавный скролл-------------------------
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.test').offsetHeight;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
};

//------------------------Кнопка вверх------------------------
window.addEventListener('scroll', function () {
   var scroll = document.querySelector('.upbutton');
   scroll.classList.toggle("active", window.scrollY > 500)
});
function scrollTopTop() {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   })
}

//------------------------Бургер меню-------------------------

let iconMenu = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');

if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
};
menuBody.addEventListener('click', function (e) {
   if (e.target.matches('a')) {
      menuBody.classList.remove('_active');
      iconMenu.classList.remove('_active');
      document.body.classList.remove('_lock');
   }
});


//------------------------Табы меню-------------------------
let tab = function () {
   let tabNav = document.querySelectorAll('.tabs-nav__item'),
      tabContent = document.querySelectorAll('.tab'),
      tabName;

   tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav)
   });

   function selectTabNav() {
      tabNav.forEach(item => {
         item.classList.remove('is-active');
      });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
   }

   function selectTabContent(tabName) {
      tabContent.forEach(item => {
         item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
      })
   }
};

tab();


//------------------------Табы подменю-------------------------
let tab1 = function () {
   let tabNav = document.querySelectorAll('.tabs1-nav1__item1'),
      tabContent = document.querySelectorAll('.tab1'),
      tabName;

   tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav)
   });

   function selectTabNav() {
      tabNav.forEach(item => {
         item.classList.remove('is-active');
      });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
   }

   function selectTabContent(tabName) {
      tabContent.forEach(item => {
         item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
      })
   }
};

tab1();


//------------------------Увеличение фото-------------------------

let allGalleries = document.querySelectorAll('.aniimated-thumbnials');
allGalleries.forEach(item => lightGallery(item))


//------------------------Слайдер блюд-------------------------
const swiper = new Swiper('.image-slider', {
   loop: false,
   scrollbar: {
      el: '.swiper-scrollbar',
      //Возможность перетаскивать скроллбар
      draggable: true,
   },
   grabCursor: true,
   slideToClickedSlide: false,
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },
   mousewheel: false,
   watchOverflow: true,
   spaceBetween: 10,
   slidesPerGroup: 1,
   centeredSlides: false,
   initialSlide: 0,
   freeMode: true,
   breakpoints: {
      320: {
         slidesPerView: 3,
      },
      480: {
         slidesPerView: 4,
      },
      992: {
         slidesPerView: 5,
      }
   },
   preloadImages: false,
   lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: false,
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: false,
});

//------------------------Слайдер интерьер-----------------------------------

const swiperIn = new Swiper('.content-interior__gallery', {
   loop: true,
   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
   },
   simulateTouch: true,
   touchRatio: 1,
   touchAngle: 45,
   grabCursor: true,
   mousewheel: false,
   watchOverflow: false,
   slidesPerGroup: 1,
   centeredSlides: true,
   initialSlide: 0,
   loopedSlides: 0,
   freeMode: false,
   autoplay: {
      delay: 1000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
   },
   speed: 2000,
   effect: 'cube',
   preloadImages: false,
   lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: true,
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: false,
});
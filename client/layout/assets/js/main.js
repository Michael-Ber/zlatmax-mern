'use strict';

import Swiper, {Pagination, Navigation, Autoplay} from 'swiper';
import {telSpread} from './phoneSpread';
import burger from './burger';
import tabs from './tab';
import scrollBar from './sliderBar';
import inputModify from './inputModif';
import accordeon from './accordeon';
import stars from './starsAnimation';

window.addEventListener('DOMContentLoaded', () => {

   
    //  // image on main resize
    
    //     window.addEventListener('resize', () => {
    //         try {
    //             const benefitsElement = document.querySelector('.main__benefits');
    //             const screenWidth = window.screen.availWidth;
    //             if(screenWidth < 768) {
    //                 benefitsElement.style.marginTop = `${screenWidth}px`;
    //             }else if(screenWidth > 767 && screenWidth < 992){
    //                 benefitsElement.style.marginTop = `50px`;
    //             }else {
    //                 benefitsElement.style.marginTop = `200px`;
    //             }
    //         }catch(e) {console.log(e)}
    //     })
    
    // // end image on main resize
   
    // PHONE SPREAD ON HEADER

    try{telSpread({
        parentSelector: '.header__recall',
        btnSelector: '.recall-header__arrow',
        telsArray: ['8-123-4567-890', '8-890-1234-567', '8-456-1237-890'],
        classes: {
            listClass: 'recall-header__list', 
            itemClass: 'recall-header__item', 
            linkClass: 'recall-header__sublink', 
            listActiveClass: 'recall-header__list_active', 
            arrowActiveClass: 'recall-header__arrow_active'
        }
    })}catch(e){console.log(e)};

    // END PHONE SPREAD ON HEADER

    //BURGER MENU
    try{burger()}catch(e){console.log(e)};
    //END BURGER MENU

    //MAIN TABS
    
    try{
        tabs('.btns-tab-main__list', '.contents-tab-main__wrapper', 'btns-tab-main__item_active', 'contents-tab-main__content_active', 'data-tab');
    }catch(e) {
        console.log(e);
    }
    
    //END MAIN TABS

    // CARD TABS

    try{
        tabs('.card-item__tab-btns', '.card-item__tab-contents', 'card-item__tab-btn_active', 'card-item__tab-content_active', 'data-tab', false);
    }catch(e) {
        console.log(e);
    }

    // END CARD TABS

    // MAIN CAROUSEL

    const mainSwiper = new Swiper('.main__carousel', {
        loop: false,
        slideClass: 'carousel-main__slide',
        slideActiveClass: 'carousel-main__slide_active',
        wrapperClass: 'carousel-main__wrapper',
        modules: [Pagination, Autoplay],
        // slidesPerView: 1,
        spaceBetween: 30,
        // autoplay: {
        //     delay: 2000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: '.carousel-main__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return `<div class="pagination-slider-common__bullet"><span class="pagination-slider-common__line"></span></div>`
            },
            bulletClass: 'pagination-slider-common__bullet',
            bulletActiveClass: 'pagination-slider-common__bullet_active'
        },
        on: {
            init: function(swiper) {
                const activeFraction = document.querySelector('.carousel-main__current'),
                      totalFraction = document.querySelector('.carousel-main__total');
                activeFraction.innerHTML = swiper.slides.length < 10 ?`0${swiper.activeIndex+1}` : swiper.activeIndex;
                totalFraction.innerHTML = swiper.slides.length;
            },
            slideChange: function(swiper) {
                const activeFraction = document.querySelector('.carousel-main__current');
                activeFraction.innerHTML = swiper.slides.length < 10 ?`0${swiper.activeIndex+1}`: swiper.activeIndex;
                
            }
        }
    });

    // END MAIN CAROUSEL

    // BESTSELLERS SLIDER

    const bestsellersSwiper = new Swiper('.bestsellers__slider', {
        spaceBetween: 30,
        slidesPerView: 4,
        modules: [Pagination, Autoplay],
        autoplay: {
            delay: 2000
        },
        pagination: {
            el: '.slider-bestsellers__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="pagination-slider-common__bullet"><span class="pagination-slider-common__line"></span></div>'
            },
            bulletClass: 'pagination-slider-common__bullet',
            bulletActiveClass: 'pagination-slider-common__bullet_active'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1609: {
                slidesPerView: 4,
            },
        }
    });

    // END BESTSELLERS SLIDER

    // NOVELTY SLIDER
    const noveltySwiper = new Swiper('.novelty__slider', {
        modules: [Pagination, Autoplay],
        spaceBetween: 30,
        slidesPerView: 1,
        autoplay: {
            delay: 2000
        },
        pagination: {
            el: '.slider-novelty__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="pagination-slider-novelty__bullet"><span class="pagination-slider-novelty__line"></span></div>'
            },
            bulletClass: 'pagination-slider-novelty__bullet',
            bulletActiveClass: 'pagination-slider-novelty__bullet_active'
        },
        breakpoints: {
            992: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 2,
            },
            1610: {
                slidesPerView: 3,
            }
        }
    });

    // END NOVELTY SLIDER

    // STOCK SLIDER
    const stockSwiper = new Swiper('.stock__slider', {
        modules: [Pagination, Autoplay],
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 2000
        },
        pagination: {
            el: '.slider-stock__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="pagination-slider-common__bullet"><span class="pagination-slider-common__line"></span></div>'
            },
            bulletClass: 'pagination-slider-common__bullet',
            bulletActiveClass: 'pagination-slider-common__bullet_active'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1610: {
                slidesPerView: 4,
            }
        }
    });

    // END STOCK SLIDER

    // FLASHLIGHTS SLIDER
    const flashlightsSwiper = new Swiper('.flashlights__slider', {
        modules: [Pagination, Autoplay],
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 2000
        },
        pagination: {
            el: '.slider-flashlights__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="pagination-slider-common__bullet"><span class="pagination-slider-common__line"></span></div>'
            },
            bulletClass: 'pagination-slider-common__bullet',
            bulletActiveClass: 'pagination-slider-common__bullet_active'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1610: {
                slidesPerView: 4,
            }
        }
    });

    // END FLASHLIGHTS SLIDER

    // CARD PAGE SIMILAR SLIDER

    const similarSwiper = new Swiper('.similar__carousel', {
        modules: [Pagination, Autoplay],
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.similar__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="pagination-slider-common__bullet"><span class="pagination-slider-common__line"></span></div>'
            },
            bulletClass: 'pagination-slider-common__bullet',
            bulletActiveClass: 'pagination-slider-common__bullet_active'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1609: {
                slidesPerView: 4,
            },
        }
    });

    // END SIMILAR SLIDER

    // CARD PAGE SIMILAR SLIDER

    const recomendSwiper = new Swiper('.recomendated__carousel', {
        modules: [Pagination, Autoplay],
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.recomendated__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="pagination-slider-common__bullet"><span class="pagination-slider-common__line"></span></div>'
            },
            bulletClass: 'pagination-slider-common__bullet',
            bulletActiveClass: 'pagination-slider-common__bullet_active'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1609: {
                slidesPerView: 4,
            },
        }
    });

    // END SIMILAR SLIDER

    //CATEGORY SLIDER

    const categorySwiper = new Swiper('.products-category__carousel', {
        modules: [Pagination, Autoplay, Navigation],
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        navigation: {
            nextEl: '.navigation-products-category__next',
            prevEl: '.navigation-products-category__prev',
        },
        pagination: {
            el: '.products-category__pagination-wrapper',
            clickable: true,
            renderBullet: function(index, className) {
                const slides = document.querySelectorAll('.products-category__slide');
                
                if(slides.length > 5) {
                    if(index < 3) {
                        if(index == 0) {
                            return `<span class="products-category__item products-category__item_active">${index+1}</span>`;
                        }else {
                            return `<span class="products-category__item">${index+1}</span>`;
                        }
                    }else if(index >=3 && index < slides.length-2){
                        return `<span class="products-category__item products-category__item_disabled">${index+1}</span>`;
                    }else if(index == slides.length-2){
                        return `<span class="products-category__item products-category__item_disabled">${index+1}</span> <span class="products-category__dots">...</span>`;
                    }else {
                        return `<span class="products-category__item">${index+1}</span>`;
                    }
                }else {
                    return `<span class="products-category__item">${index+1}</span>`
                }
            },
            bulletClass: 'products-category__item',
            bulletActiveClass: 'products-category__item_active'
        },
        on: {
            slideChange: function(swiper) {
                const wrapper = document.querySelector('.products-category__pagination-wrapper');
                const items = document.querySelectorAll('.products-category__item');
                const dots = document.querySelector('.products-category__dots');
                const itemWidth = window.getComputedStyle(items[0]).width.slice(0, -2);
                const prev = document.querySelector('.navigation-products-category__prev svg');
                const next = document.querySelector('.navigation-products-category__next svg');


                let actIndex = swiper.activeIndex;
                let offset = (actIndex-1) * (Number(itemWidth) + 12);
                
                if(swiper.activeIndex >=1 && swiper.activeIndex <= items.length-1) {
                    
                    if(swiper.previousIndex > swiper.activeIndex && (items.length - swiper.previousIndex) > 2) {                              //prev
                        items[swiper.activeIndex + 2].classList.add('products-category__item_disabled');
                        wrapper.style.transform = `translateX(-${offset}px)`;
                    }else if(swiper.activeIndex < items.length-1){     //next
                        items[swiper.activeIndex + 1].classList.remove('products-category__item_disabled');
                        wrapper.style.transform = `translateX(-${offset}px)`;
                    }else if(swiper.activeIndex == items.length-1) {   //click to last slide
                        items.forEach(item => {
                            item.classList.remove('products-category__item_disabled');
                            wrapper.style.transform = `translateX(-${(items.length-3)*(Number(itemWidth) + 12)}px)`;
                        })
                    }
                    
                }else {
                    wrapper.style.transform = `translateX(${0}px)`;
                }
                // Remove or add dots
                if(items.length - swiper.activeIndex <= 4) {
                    dots.classList.add('products-category__dots_disabled');
                    items[items.length - 2].classList.remove('products-category__item_disabled');
                }else {
                    dots.classList.remove('products-category__dots_disabled');
                    items[items.length - 2].classList.add('products-category__item_disabled');
                }

                //navigation arrows change color

                if(swiper.activeIndex > 0 && swiper.activeIndex < items.length - 1) {
                    prev.style.fill = '#e8aa31';
                    next.style.fill = '#e8aa31';
                }else if(swiper.activeIndex == 0) {
                    prev.style.fill = '#ababab';
                }else if(swiper.activeIndex == items.length - 1) {
                    next.style.fill = '#ababab';
                }
            }
        }
    });

    //END CATEGORY SLIDER

    // CATEGORY COST SCROLL(SLIDER) ========================================>
    
    try{scrollBar('.slider-1', 20000,'#e8aa31', '#141414', '.slider-cost__val', 10, 25)}catch(e){console.log(e)};

    // END CATEGORY COST SCROLL(SLIDER) ========================================>

    // CATEGORY LENGTH MAIN SCROLL(SLIDER) ========================================>
    
    try{scrollBar('.slider-2', 20000,'#e8aa31', '#141414', '.slider-length__val', 10, 25)}catch(e){console.log(e)};

    // END CATEGORY LENGTH MAIN SCROLL(SLIDER) ========================================>

    // CATEGORY LENGTH BLADE SCROLL(SLIDER) ========================================>
    
    try{scrollBar('.slider-3', 20000,'#e8aa31', '#141414', '.slider-blade__val', 10, 25)}catch(e){console.log(e)};

    // END CATEGORY LENGTH BLADE SCROLL(SLIDER) ========================================>

    // CATEGORY WIDTH BLADE SCROLL(SLIDER) ========================================>
    
    try{scrollBar('.slider-4', 20000,'#e8aa31', '#141414', '.slider-width__val', 10, 25)}catch(e){console.log(e)};

    // END CATEGORY WIDTH BLADE SCROLL(SLIDER) ========================================>

    // ACCORDEON CATEGORY PAGE

    try {accordeon('.filter-category__accordeon', 'filter-category__accordeon_active')}catch(e){console.log(e)};

    // END ACCORDEON CATEGORY PAGE

    // INPUT MODIFICATION

    try{inputModify('.order-content-card-item__input', '.order-content-card-item__input-minus', '.order-content-card-item__input-plus')}catch(e){console.log(e)} ;

    // END INPUT MODIFICATION

    //STARS RATING
    stars('.stars-wrapper', '.star-item');
    //END STARS RATING


});
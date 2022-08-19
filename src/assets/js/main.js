'use strict';

import './catalog'; 
import './cort';
import './good';


import Swiper, {Navigation, Pagination} from 'swiper';


window.addEventListener('DOMContentLoaded', () => {
    
    
    
    try {
        // CATALOG BURGER
        function burger(trig, menu, trigActive, menuActive, closeTrig) {
            const trigger = document.querySelector(trig);
            const popup = document.querySelector(menu);
            const close = document.querySelector(closeTrig);
            
            trigger.addEventListener('click', function() {
                if(!this.classList.contains(trigActive)) {
                    this.classList.add(trigActive);
                    popup.classList.add(menuActive);
                    trigger.style.paddingLeft = '5px';
                    // overlay.classList.add('overlay__burger_active');
                    // body.style.overflow = "hidden";
                    // body.style.paddingRight = `${offset}px`;
                }else {
                    this.classList.remove(trigActive);
                    popup.classList.remove(menuActive);
                    trigger.style.paddingLeft = '0';
                    // overlay.classList.remove('overlay__burger_active');
                    // body.style.overflow = 'unset';
                    // body.style.paddingRight = 'unset';
                }
            });
            if(close) {
                close.addEventListener('click', () => {
                    trigger.classList.remove(trigActive);
                    popup.classList.remove(menuActive);
                    trigger.style.paddingLeft = '0';
                });
            }
        }
    
        burger('.catalog__burger', '.catalog__list', 'catalog__burger_active', 'catalog__list_active');
        burger('.burger-btn', '.burger-menu', 'burger-btn_active', 'burger-menu_active');
        //END CATALOG BURGER

        //CATALOG ITEMS POPUP

        function togglePopup(trigSelector, popupSelector, popupActive, closeTrig) {
            const trig = document.querySelectorAll(trigSelector);
            const popup = document.querySelectorAll(popupSelector);

            trig.forEach(btn => {
                btn.addEventListener('click', () => {
                    const btnAttr = btn.getAttribute('data-popup');
                    popup.forEach(menu => {
                        if(menu.getAttribute('data-popup') === btnAttr) {
                            menu.classList.add(popupActive);
                        }
                        menu.querySelector(closeTrig).addEventListener('click', () => {
                            menu.classList.remove(popupActive);
                        });
                    });
                });
            });
        }
        togglePopup('.catalog__item_parent', '.main__popup', 'main__popup_active', '.main__popup-close');
        //ENDCATALOG ITEMS POPUP

        //SLIDER MAIN
    
        function mainSlider() {
            const slider = tns({
                container: '.main__slider',
                items: 1,
                slideBy: 1,
                mouseDrag: true,
                nav: true,
                navContainer: '.slider__photos',
                controls: false
            });
        }
        mainSlider();
    
        //END SLIDER MAIN
    
        //SLIDER POPULAR
        
        function popularSlider() {
            const swiperPopular = new Swiper('.popular__list-wrapper', {
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                modules: [Navigation, Pagination],
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
            });
        }
        popularSlider();
    
        //END SLIDER POPULAR
    
        //SLIDER SPONSORS
    
        function sponsorsSlider() {
            const slider = tns({
                container: '.sponsors__slider',
                items: 5,
                slideBy: 1,
                mouseDrag: false,
                nav: false,
                controlsContainer: '.sponsors__arrows',
                responsive: {
                    992: {
                      items: 4
                    },
                    768: {
                    items: 3
                    },
                    576: {
                      items: 2
                    },
                    320: {
                        items: 1
                    }
                  }
            });
        }
        sponsorsSlider();
    
        //END SLIDER SPONSORS
        
    } catch {
        console.log('error');
    }
    
});

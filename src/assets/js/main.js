'use strict';

import './catalog'; 
import './cort';
import './good';

window.addEventListener('DOMContentLoaded', () => {
    
    // CATALOG BURGER
    
    try {
        function burger(trig, menu, trigActive, menuActive, closeTrig) {
            const trigger = document.querySelector(trig);
            const popup = document.querySelector(menu);
            const close = document.querySelector(closeTrig);
            const body = document.querySelector('body');
            
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
    
        burger('.catalog__burger', '.main__popup', 'catalog__burger_active', 'main__popup_active', '.main__popup-close');
        burger('.burger-btn', '.burger-menu', 'burger-btn_active', 'burger-menu_active');
    
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
            const slider = tns({
                container: '.popular__list-slider',
                items: 1,
                slideBy: 1,
                mouseDrag: true,
                nav: false,
                controlsContainer: '.popular__arrows'
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
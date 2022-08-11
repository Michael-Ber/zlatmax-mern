'use strict';



window.addEventListener('DOMContentLoaded', () => {

    //CORT TABS=======================================================>

    function tabs(tabsSelector, tabsContentSelector, tabsActive, contentActive) {
        const tabs = document.querySelectorAll(tabsSelector);
        const content = document.querySelectorAll(tabsContentSelector);
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                const target = e.target;
                const targetAttr = target.getAttribute('data-order');
                tabs.forEach(elem => {
                    elem.classList.remove(tabsActive);
                });
                tab.classList.add(tabsActive);
                content.forEach(item => {
                    item.classList.remove(contentActive);
                    if(item.getAttribute('data-order') === targetAttr) {
                        item.classList.add(contentActive);
                    }
                });
            });
        });
    }
    tabs('.tabs-order__btn', '.order-main__form', 'tabs-order__btn_active', 'order-main__form_active');

    //END CORT TABS=======================================================>

    //YOUR ORDER CHANGING WIDTH BECAUSE OF MEDIA=========================>

    

    function changeWidth() {
        const parent = document.querySelector('.wrapper-cort');
        const oldWrapper = document.querySelector('.order-main__content');
        const yourOrderWrapper = document.querySelectorAll('.yourOrder-main');
        const toParentOrder = yourOrderWrapper[0];

        function init () {
            if(window.matchMedia('(max-width: 991px)').matches && window.screen.availWidth) {
                Array.from(oldWrapper.children).forEach((item, i) => {
                    if(item.contains(yourOrderWrapper[i])) {
                        item.removeChild(yourOrderWrapper[i]);
                    }
                })
                parent.insertAdjacentElement('beforeend', yourOrderWrapper[0]);

            }else if(parent.children.length > 2 && window.matchMedia('(min-width: 992px)').matches){
                Array.from(oldWrapper.children).forEach((item, i) => {
                    item.insertAdjacentElement('beforeend', yourOrderWrapper[i]);
                })
            }
        }
        window.addEventListener('resize', () => {
            if(window.matchMedia('(max-width: 991px)').matches && window.screen.availWidth) {
                Array.from(oldWrapper.children).forEach((item, i) => {
                    if(item.contains(yourOrderWrapper[i])) {
                        item.removeChild(yourOrderWrapper[i]);
                    }
                })
                parent.insertAdjacentElement('beforeend', yourOrderWrapper[0]);

            }else if(parent.children.length > 2 && window.matchMedia('(min-width: 992px)').matches){
                Array.from(oldWrapper.children).forEach((item, i) => {
                    item.insertAdjacentElement('beforeend', yourOrderWrapper[i]);
                })
            }
        });
        init();
    }

    changeWidth();

    //END YOUR ORDER CHANGING WIDTH BECAUSE OF MEDIA=========================>
});
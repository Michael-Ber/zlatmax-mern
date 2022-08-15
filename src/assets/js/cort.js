'use strict';

import {changeInput} from './good';

//YOUR ORDER CHANGING WIDTH BECAUSE OF MEDIA=========================>
function changeWidth(parentSelector, oldWrapperSelector, elemSelector, maxWidth, minWidth) {
    const parent = document.querySelector(parentSelector);
    const oldWrapper = document.querySelector(oldWrapperSelector);
    const yourOrderWrapper = document.querySelectorAll(elemSelector);

    function init () {
        if(window.matchMedia(maxWidth).matches && window.screen.availWidth) {
            Array.from(oldWrapper.children).forEach((item, i) => {
                if(item.contains(yourOrderWrapper[i])) {
                    item.removeChild(yourOrderWrapper[i]);
                }
            })
            parent.insertAdjacentElement('beforeend', yourOrderWrapper[0]);

        }else if(parent.children.length > 2 && window.matchMedia(minWidth).matches){
            Array.from(oldWrapper.children).forEach((item, i) => {
                item.insertAdjacentElement('beforeend', yourOrderWrapper[i]);
            })
        }
    }
    window.addEventListener('resize', () => {
        try{
            if(window.matchMedia(maxWidth).matches && window.screen.availWidth) {
                Array.from(oldWrapper.children).forEach((item, i) => {
                    if(item.contains(yourOrderWrapper[i])) {
                        item.removeChild(yourOrderWrapper[i]);
                    }
                })
                parent.insertAdjacentElement('beforeend', yourOrderWrapper[0]);

            }else if(parent.children.length > 2 && window.matchMedia(minWidth).matches){
                Array.from(oldWrapper.children).forEach((item, i) => {
                    item.insertAdjacentElement('beforeend', yourOrderWrapper[i]);
                })
            }
        }catch(e) {console.log(e)}
    });
    init();
}

//END YOUR ORDER CHANGING WIDTH BECAUSE OF MEDIA=========================>


//CORT TABS=======================================================>
function tabs(tabsSelector, tabsContentSelector, tabsActive, contentActive, dataAttr) {
    const tabs = document.querySelectorAll(tabsSelector);
    const content = document.querySelectorAll(tabsContentSelector);
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const target = e.target.hasAttribute(dataAttr) ? e.target : e.target.parentNode;
            const targetAttr = target.getAttribute(dataAttr);
            tabs.forEach(elem => {
                elem.classList.remove(tabsActive);
            });
            tab.classList.add(tabsActive);
            content.forEach(item => {
                item.classList.remove(contentActive);
                if(item.getAttribute(dataAttr) === targetAttr) {
                    item.classList.add(contentActive);
                }
            });
        });
    });
}
//END CORT TABS=======================================================>

window.addEventListener('DOMContentLoaded', () => {

    try {
    //CORT TABS=======================================================>

    tabs('.tabs-order__btn', '.order-main__form', 'tabs-order__btn_active', 'order-main__form_active', 'data-order');

    //END CORT TABS=======================================================>

    //YOUR ORDER CHANGING WIDTH BECAUSE OF MEDIA=========================>
    changeWidth('.wrapper-cort', '.order-main__content', '.yourOrder-main', '(max-width: 991px)', '(min-width: 992px)');
    //END YOUR ORDER CHANGING WIDTH BECAUSE OF MEDIA=========================>

    //CHANGE INPUT ON CORT
    changeInput('.amount-item__input', '.amount-item__sub', '.amount-item__add');
    //END CHANGE INPUT ON CORT
}catch(e) {console.log(e)};
});
export {tabs};


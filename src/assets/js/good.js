'use strict';
import {tabs} from './cort';

// CHANGE NUMBER OF ITEMS ON INPUT
function changeInput(inputSelector, arrowSub, arrowAdd) {
    const input = document.querySelectorAll(inputSelector);
    const sub = document.querySelectorAll(arrowSub);
    const add = document.querySelectorAll(arrowAdd);

    input.forEach(item => {
        item.value = 1;
    })

    sub.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            if(input[i].value < 2) {
                input[i].value = 1;
            }else {
                input[i].value--;
            }
        });
    })

    add.forEach((item, i) => {
        item.addEventListener('click', () => {
            input[i].value++;
        });
    });
    
}
// END CHANGE NUMBER OF ITEMS ON INPUT

//YOUR ORDER CHANGING WIDTH BECAUSE OF MEDIA=========================>
function changeWidth(parentSelector, oldWrapperSelector, elemSelector, maxWidth, minWidth) {
    const parent = document.querySelector(parentSelector);
    const oldWrapper = document.querySelector(oldWrapperSelector);
    const element = document.querySelector(elemSelector);
    function init () {
        if(window.matchMedia(maxWidth).matches && window.screen.availWidth) {
            if(oldWrapper.contains(element)) {
                oldWrapper.removeChild(element);
            }
            parent.insertAdjacentElement('beforeend', element);

        }else if(parent.children.length > 2 && window.matchMedia(minWidth).matches){
            oldWrapper.insertAdjacentElement('beforeend', element);
        }
    }
    window.addEventListener('resize', () => {
        try{
            if(window.matchMedia(maxWidth).matches && window.screen.availWidth) {
                if(oldWrapper.contains(element)) {
                    oldWrapper.removeChild(element);
                }
                parent.insertAdjacentElement('beforeend', element);
    
            }else if(parent.children.length > 2 && window.matchMedia(minWidth).matches){
                oldWrapper.insertAdjacentElement('beforeend', element);
            }
        }catch(e) {console.log(e)}
    });
    init();
}

//END YOUR ORDER CHANGING WIDTH BECAUSE OF MEDIA=========================>

window.addEventListener('DOMContentLoaded', () => {
    // GOOD PAGE TABS ===============================================>
    try {
        tabs('.btns-good-tabs--main__btn', '.contents-good-tabs--main__content', 'btns-good-tabs--main__btn_active', 'contents-good-tabs--main__content_active', 'data-tab');
    
        // END GOOD PAGE TABS ===============================================>
    
        // CHANGE NUMBER OF ITEMS ON INPUT
    
        
        changeInput('.amount-order-info-good-main__input', '.amount-order-info-good-main__sub', '.amount-order-info-good-main__add');
        // END CHANGE NUMBER OF ITEMS ON INPUT

        //CHANGE WIDTH BECAUSE OF MEDIA

        changeWidth('.wrapper-good', '.main__right', '.similar-main', '(max-width: 767px)', '(min-width: 768px)');


        //END CHANGE WIDTH BECAUSE OF MEDIA
    }catch(e) {
        console.log(e);
    }
    

});
export {changeInput};
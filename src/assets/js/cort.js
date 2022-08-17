'use strict';

import {changeInput} from './good';
import {getResource, deleteData} from './services/requests';

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

//ADD ITEM TO CORT====================================================>

function addToCort() {
    const wrappers = document.querySelectorAll('.yourOrder-main');
    const uls = document.querySelectorAll('.yourOrder-main__list');
    getResource().then(data => {
        if(data.length < 1) {
            wrappers.forEach(wrapper => {
                wrapper.getElementsByClassName.display = 'none';
            })
        }else {
            wrappers.forEach(wrapper => {
                wrapper.getElementsByClassName.display = 'block';
            })
            data.forEach(li => {
                uls.forEach(ul => {
                    ul.innerHTML += `
                        <li class="yourOrder-main__item item-yourOrder">
                            <div class="item-yourOrder__img">
                                <img src=${li.img} alt="order-image">
                            </div>
                            <div class="item-yourOrder__descr descr-item">
                                <p class="descr-item__name">
                                    <span>${li.name}</span> ${li.type}
                                </p>
                                <p class="descr-item__price">${li.price} <span>&#8381</span></p>
                            </div>
                            <div class="item-yourOrder__amount amount-item">
                                <img src="./assets/icons/order/sub.png" alt="arrow-sub" class="amount-item__sub">
                                <input value="1" type="number" class="amount-item__input">
                                <img src="./assets/icons/order/add.png" alt="arrow-add" class="amount-item__add">
                            </div>
                            <div class="item-yourOrder__cost cost-item">
                                <p class="cost-item__header">Всего:</p>
                                <p class="cost-item__total">${li.price} <span>&#8381</span></p>
                            </div>
                            <div class="item-yourOrder__delete" data-id="${li.id}">&#10006</div>
                        </li>
                        `
                });
            });
        }
    });
    //TOTAL SUM

    calculateSum();
    //END TOTAL SUM
}


//END ADD ITEM TO CORT==============================================>

//DELETE ITEM TO CORT==============================================>

function deleteFromCort() {
    const wrappers = document.querySelectorAll('.yourOrder-main__list');
    wrappers.forEach(wrapper => {
        wrapper.addEventListener('click', (e) => {
            const attr = e.target.hasAttribute('data-id') ? e.target.getAttribute('data-id'): null;
            deleteData(`http://localhost:3000/items/${attr}`)
                .then(() => 
                    Array.from(wrapper.children).forEach(child => {
                        child.remove();
                    }))
                .then(addToCort)
            
        });
    });
    //TOTAL SUM

    calculateSum();
    //END TOTAL SUM
}

//END DELETE ITEM TO CORT==============================================>


//TOTAL SUM

function calculateSum() {
    const totals = document.querySelectorAll('.yourOrder-main__sum strong');
    let totalSum = 0;
    getResource()
        .then(data => {
            data.forEach(item=> {
                totalSum += Number(item.price);
            })
        })
        .then(() => {
            totals.forEach(item => {
                item.textContent = totalSum;
            });
        })
}

//END TOTAL SUM
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

    //ADD ITEM TO CORT=======================================================>
    addToCort();
    //END ADD ITEM TO CORT=======================================================>
    
    //DELETE ITEM TO CORT==============================================>
    deleteFromCort();
    //END DELETE ITEM TO CORT==============================================>

    //TOTAL SUM

    calculateSum();
    //END TOTAL SUM
}catch(e) {console.log(e)};
});
export {tabs};


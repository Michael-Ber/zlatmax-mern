'use strict';
import { postData, getResource, deleteData } from "./services/requests";

const slidersToZero = {
    enable: true
};

if (window.performance) {
    changeCortCount('.counts-subheader__count', '.subheader__counts', '.cort-trigger');
}

function changeCortCount(countSelector, countWrapper, cortTrigger) {
    const wrapper = document.querySelector(countWrapper);
    const count = document.querySelector(countSelector);
    const addToCortBtn = document.querySelectorAll(cortTrigger);
    // let countValue = localStorage.getItem('count');

    init();
    addToCortBtn.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.closest('.popular__item');
            const obj = {};
            obj.img = parent.querySelector('.item__img img').src;
            obj.name = parent.querySelector('.item__descr .item__name').textContent;
            obj.type = parent.querySelector('.item__descr .item__type').textContent;
            obj.price = parent.querySelector('.item__descr .item__order .item__new-cost').textContent.slice(0, -2);
            obj.id = Date.now();
            postData('http://localhost:3000/items', JSON.stringify(obj));
            
            count.textContent = Number(count.textContent) + 1;
            if(Number(count.textContent) > 0) {
                wrapper.style.display = 'flex';
            }
            
        });
    });
    function init() {
        getResource().then(data => {
            if(data.length < 1) {
                wrapper.style.display = 'none';
            }else {
                count.textContent = data.length;
            }
        })
    }
}

export default slidersToZero;
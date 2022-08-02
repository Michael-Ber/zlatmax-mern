'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // PRICE SCROLL BAR
    
    function scrollBar() {
        const scrollWrapper = document.querySelector('.main__subwrapper');
        const scrollTracks = Array.from(scrollWrapper.children);
        scrollTracks.forEach(item => {
            item.insertAdjacentHTML('afterend', `<span class=" main__actual">${item.value}</span>`);
        });
        let average1 = 0;
        let average2 = 50;
        let average1perc = average1 + '%';
        let average2perc = average2 + '%';

        scrollTracks[0].style.background = `linear-gradient(90deg, #eaeaea 0% ${average1perc}, #ffcda5 ${average1perc} ${average2perc}, #eaeaea ${average2perc} 100%)`;

        scrollTracks[0].addEventListener('input', (e) => {
            const elem = e.target;
            const actual = document.querySelectorAll('.main__actual')[0];
            const max = 200000;
            average1 = Math.floor(elem.value * 100 / max);
            average1perc = average1 + '%';
            average2perc = average2 + '%';
            actual.innerHTML = elem.value;

            elem.style.background = `linear-gradient(90deg, #eaeaea 0% ${average1 > average2 ? average2perc : average1perc}, #ffcda5 ${average1 > average2 ? average2perc : average1perc} ${average2 < average1 ? average1perc : average2perc}, #eaeaea ${average2 < average1 ? average1perc : average2perc} 100%)`;
        })

        scrollTracks[1].addEventListener('input', (e) => {
            const elem = e.target;
            const actual = document.querySelectorAll('.main__actual')[1];
            const max = 200000;
            average2 = Math.floor(elem.value * 100 / max);
            average1perc = average1 + '%';
            average2perc = average2 + '%';
            actual.innerHTML = elem.value;

            scrollTracks[0].style.background = `linear-gradient(90deg, #eaeaea 0% ${average1 > average2 ? average2perc : average1perc}, #ffcda5 ${average1 > average2 ? average2perc : average1perc} ${average2 < average1 ? average1perc: average2perc}, #eaeaea ${average2 < average1 ? average1perc : average2perc} 100%)`;
        })

    }

    scrollBar();

    function setInputsToZero() {
        const inputs = document.querySelectorAll('.main__filter-input');
        window.addEventListener('click', (e) => {
            if(!e.target.classList.contains('main__filter-input')) {
                inputs.forEach(input => {
                    input.value = '';
                });
            }else {

            }
        });
    }
    setInputsToZero();

    // END PRICE SCROLL BAR

    // CATALOG ACCORDEON

    function accordeon() {
        const trig = document.querySelectorAll('.main__accordeon-accord-btn');

        trig.forEach(item => {
            item.addEventListener('click', (e) => {
                const btnACtive = e.target.classList.contains('main__accordeon-accord-btn_active') || e.target.parentNode.parentNode.classList.contains('main__accordeon-accord-btn_active');


                if(e.target.classList.contains('main__accordeon-accord-btn_active') || e.target.parentNode.parentNode.classList.contains('main__accordeon-accord-btn_active')) {
                    item.parentNode.nextElementSibling.style.display = 'none';
                    item.classList.remove('main__accordeon-accord-btn_active');
                }else {
                    item.parentNode.nextElementSibling.style.display = 'block';
                    item.classList.add('main__accordeon-accord-btn_active');
                }
            });
        })

    }
    accordeon();

    // END CATALOG ACCORDEON

    // CATALOG SORT ITEMS

    function sortItems() {
        const trig = document.querySelectorAll('.popular__sort-btn');
        const contentTile = document.querySelector('.popular__list-slider-tile');
        const contentList = document.querySelector('.popular__list-slider-list');

        function clearBtns() {
            trig.forEach(item => {
                item.classList.remove('popular__sort-btn_active');
            });
        }
        
        trig.forEach(item => {
            item.addEventListener('click', () => {
                clearBtns();
                item.classList.add('popular__sort-btn_active');

                if(item.classList.contains('popular__sort-btn_tile')) {
                    contentTile.style.display = 'flex';
                    contentList.style.display = 'none';
                }else if(item.classList.contains('popular__sort-btn_list')) {
                    contentList.style.display = 'block';
                    contentTile.style.display = 'none';
                }
            });
        });
    }

    sortItems();

    // END CATALOG SORT ITEMS
});
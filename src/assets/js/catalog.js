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

    // CATALOG CHANGE LOCATION ITEMS

    function changeLocationItems() {
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
                    contentList.style.display = 'flex';
                    contentTile.style.display = 'none';
                }
            });
        });
    }

    changeLocationItems();

    // END CATALOG CHANGE LOCATION ITEMS

    // SELECT NUMBER OF ELEMENTS ON CATALOG SLIDER

    function selectNumberOfElements() {
        const selectElements = document.querySelectorAll('.popular__pagination-catalog-select');
        const maxItemsOnPage = 9;
        selectElements.forEach((item, i, arr) => {
            item.addEventListener('input', () => {
                const slideItemsParent = document.querySelectorAll('.popular__list-item_page-catalog_active');
                
                slideItemsParent.forEach(parent => {
                    for(let i = 0; i < item.value; i++) {
                        Array.from(parent.children)[i].style.display = 'flex';
                    }
                    for(let i = item.value; i < maxItemsOnPage; i++) {
                        Array.from(parent.children)[i].style.display = 'none';
                    }
                })
                arr.forEach(elem => elem.value = item.value);
            });
        });
        
    }
    selectNumberOfElements();
    // END SELECT NUMBER OF ELEMENTS ON CATALOG SLIDER

    // CATALOG POPULAR SLIDER

    function mainCatalogSlider() {
        // set amount of slides on pagination numbers
        const navContainer = document.querySelectorAll('.popular__nav-container');
        const amountOfItems = document.querySelectorAll('.popular__list-item-tile').length;
        
        for(let i = 1; i <= amountOfItems; i++) {
            navContainer.forEach(container => {
                container.innerHTML += `<li class="popular__pagination-catalog-number">${i}</li>`
            });
        }



        const arrowsContainer = document.querySelectorAll('.popular__arrows_page-catalog');

        const arrowsPrev = document.querySelectorAll('.popular__prev_page-catalog');
        const arrowsNext = document.querySelectorAll('.popular__next_page-catalog');

        // const sliderTile = tns({
        //     container: '.popular__list-slider-tile',
        //     items: 1,
        //     slideBy: 1,
        //     mouseDrag: false,
        //     nav: false,
        //     // controlsContainer: arrowsContainer[0],
        //     prevButton: "#arrow-left-tile",
        //     nextButton: "#arrow-right-tile",
        //     // nav: true,
        //     // navContainer: navContainer[0],
        // });

        // const sliderTList = tns({
        //     container: '.popular__list-slider-list',
        //     items: 1,
        //     slideBy: 1,
        //     mouseDrag: false,
        //     nav: false,
        //     // controlsContainer: arrowsContainer[1],
        //     prevButton: "#arrow-left-list",
        //     nextButton: "#arrow-right-list",
        //     // nav: true,
        //     // navContainer: navContainer[0],
        // });

        

    }
    mainCatalogSlider();

    // END CATALOG POPULAR SLIDER
});
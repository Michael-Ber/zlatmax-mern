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
});
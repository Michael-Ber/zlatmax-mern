// CATEGORY COST SCROLL (SLIDER) =======================================>

function scrollBar(wrapper, maximum, colorTrack, colorActiveTrack, valClass, minScale, maxScale) {
    const scrollWrapper = document.querySelector(wrapper);
    const scrollTracks = Array.from(scrollWrapper.children);
    // scrollTracks.forEach(item => {
    //     item.insertAdjacentHTML('afterend', `<span class=" slider-main__actual">${item.value}</span>`);
    // });
    let average1 = minScale;
    let average2 = maxScale;
    let average1perc = average1 + '%';
    let average2perc = average2 + '%';

    scrollTracks[0].style.background = `linear-gradient(90deg, ${colorTrack} 0% ${average1perc}, ${colorActiveTrack} ${average1perc} ${average2perc}, ${colorTrack} ${average2perc} 100%)`;

    scrollTracks[0].addEventListener('input', (e) => {
        const elem = e.target;
        const actual = document.querySelectorAll(valClass)[0];
        const max = maximum;
        average1 = Math.floor(elem.value * 100 / max);
        average1perc = average1 + '%';
        average2perc = average2 + '%';
        actual.innerHTML = elem.value + ' руб.';

        elem.style.background = `linear-gradient(90deg, ${colorTrack} 0% ${average1 > average2 ? average2perc : average1perc}, ${colorActiveTrack} ${average1 > average2 ? average2perc : average1perc} ${average2 < average1 ? average1perc : average2perc}, ${colorTrack} ${average2 < average1 ? average1perc : average2perc} 100%)`;
    })

    scrollTracks[1].addEventListener('input', (e) => {
        const elem = e.target;
        const actual = document.querySelectorAll(valClass)[1];
        const max = maximum;
        average2 = Math.floor(elem.value * 100 / max);
        average1perc = average1 + '%';
        average2perc = average2 + '%';
        actual.innerHTML = elem.value + ' руб.';

        scrollTracks[0].style.background = `linear-gradient(90deg, ${colorTrack} 0% ${average1 > average2 ? average2perc : average1perc}, ${colorActiveTrack} ${average1 > average2 ? average2perc : average1perc} ${average2 < average1 ? average1perc: average2perc}, ${colorTrack} ${average2 < average1 ? average1perc : average2perc} 100%)`;
    })

}

export default scrollBar;

// END CATEGORY COST SCROLL (SLIDER) =======================================>
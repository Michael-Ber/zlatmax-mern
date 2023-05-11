// CATALOG ACCORDEON

function accordeon(btnSelector,activeBtnSelector) {
    const trig = document.querySelectorAll(btnSelector);

    trig.forEach(item => {
        item.addEventListener('click', (e) => {
            const btnACtive = e.target.classList.contains(activeBtnSelector) || e.target.parentNode.parentNode.classList.contains(activeBtnSelector);
            if(btnACtive) {
                item.nextElementSibling.style.display = 'none';
                item.parentNode.style.paddingBottom = '0px';
                item.classList.remove(activeBtnSelector);
            }else {
                item.nextElementSibling.style.display = 'block';
                item.parentNode.style.paddingBottom = '40px';
                item.classList.add(activeBtnSelector);
            }
        });
    })

}

export default accordeon;

// END CATALOG ACCORDEON
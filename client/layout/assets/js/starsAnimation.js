const stars = (wrapperSelector, starSelector) => {
    const wrapper = document.querySelectorAll(wrapperSelector);

    wrapper.forEach(elem => {
        const starNode = elem.children;
        const starArray = Array.from(starNode);

        starArray.forEach(item => {
            item.addEventListener('click', () => {
                const {itemVal} = item.dataset;
                elem.dataset.totalVal = itemVal;
            })
        });
    })
};
export default stars;
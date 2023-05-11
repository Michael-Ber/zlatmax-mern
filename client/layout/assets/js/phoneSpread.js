const telSpread = ({parentSelector, btnSelector, classes: {listClass, itemClass, linkClass, listActiveClass, arrowActiveClass}, telsArray} = {}) => {
    const parent = document.querySelector(parentSelector),
          btn = document.querySelector(btnSelector);

    const subList = document.createElement('ul');
    subList.classList.add(listClass);
    telsArray.forEach(tel => {
        subList.innerHTML += `
            <li class="${itemClass}">
                <a href="tel:${tel}" class="${linkClass}">${tel}</a>
            </li>
        `;
    })
    parent.append(subList);

    btn.addEventListener('click', () => {
        if(!subList.classList.contains(listActiveClass)) {
            subList.classList.add(listActiveClass);
            btn.classList.add(arrowActiveClass);
            subList.style.maxHeight = subList.scrollHeight + 'px';
        }else {
            subList.classList.remove(listActiveClass);
            subList.style.maxHeight = 0 + 'px';
            btn.classList.remove(arrowActiveClass);
        }
    });
}

export {telSpread};
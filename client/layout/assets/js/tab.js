//TABS FUNCTION =================================================

function tabs(tabsSelector, tabsContentSelector, tabsActive, contentActive, dataAttr, withOverlay=true) {
    const tabsWrapper = document.querySelector(tabsSelector);
    const contentWrapper = document.querySelector(tabsContentSelector);
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    
    function resetTabs() {
        Array.from(tabsWrapper.children).forEach(item => {
            item.classList.remove(tabsActive);
        })
        Array.from(contentWrapper.children).forEach(item => {
            item.classList.remove(contentActive);
        });
    }
    function activateOverlay() {
        overlay.classList.add('overlay_active');
        overlay.style.height = `${body.scrollHeight}px`; 
    }
    tabsWrapper.addEventListener('click', (e) => {
        const target = e.target.hasAttribute(dataAttr) ? e.target : e.target.parentNode;
        if(!target.hasAttribute(dataAttr)) {
            return;
        }
        const targetAttr = target.getAttribute(dataAttr);
        resetTabs();
        if(withOverlay) {
            activateOverlay();
        }
        target.classList.add(tabsActive);
        Array.from(contentWrapper.children).forEach(item => {
            if(item.getAttribute(dataAttr) === targetAttr) {
                item.classList.add(contentActive);
            }
        });
    });
    if(withOverlay) {
        window.addEventListener('click', (e) => {
            if(e.target.classList.contains('overlay_active')) {
                e.target.classList.remove('overlay_active');
                resetTabs();
            }
        });
    }
    
}

export default tabs;

//END TABS FUNCTION ==============================================
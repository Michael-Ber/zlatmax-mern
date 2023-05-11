//BURGER FUNCTION =============================================
function burger() {
    const burgerBtn = document.querySelector('.header__burger');
    const burgerMenu = document.querySelector('.header__burger-menu');
    const closeMenu = document.querySelectorAll('.close-nav');
    const nextMenuBtns = document.querySelectorAll('.next');
    const backBtn = document.querySelectorAll('.back-nav');

    closeMenu.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            burgerMenu.classList.remove('header__burger-menu_active');
        });
    });

    burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle('header__burger-menu_active');
    });

    nextMenuBtns.forEach(nextBtn => {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const btn = e.target;
            btn.nextElementSibling.classList.add('burger-menu-header__nextlists_active');
        });
    });

    backBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentNode.parentNode.classList.remove('burger-menu-header__nextlists_active');
        });
    })
}

export default burger;

//END BURGER FUNCTION ==========================================
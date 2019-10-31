const menuSlide = () => {
    const burger = document.querySelector('.burger-menu');
    const menu = document.querySelector('.header-menu');
    const links = document.querySelectorAll('.header-menu__links');

    burger.addEventListener('click', () => {

        menu.classList.toggle('header-menu-active');

        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `linkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });

        burger.classList.toggle('toogle');
    });

};

menuSlide();
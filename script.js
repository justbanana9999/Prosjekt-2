const navbar = document.querySelector('.navbar')
const indicator = document.querySelector('.indicator')
const navItems = document.querySelectorAll('nav a')

navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const itemLeft = item.offsetLeft;
        const itemWidth = item.offsetWidth;

        navbar.style.setProperty('--indicator-left', `${itemLeft}px`)
        navbar.style.setProperty('--indicator-width', `${itemWidth}px`)
    });
});

navbar.addEventListener('mouseleave', () => {
    indicator.style.opacity = '0';
});

navbar.addEventListener('mouseenter', () => {
    indicator.style.opacity = '1';
});
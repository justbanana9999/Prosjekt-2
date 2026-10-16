const navbar = document.querySelector('.navbar')
const indicator = document.querySelector('.indicator')
const navItems = document.querySelectorAll('nav a')

navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const itemLeft = item.offsetLeft;
        const itemWidth = item.offsetWidth;

        // --indicator-left og --indicator-width er variabler declared/erklært i style.css.
        // left- og width-egenskapene er bundet til variablene, så hvis jeg oppdaterer de her, så oppdateres egenskapene i style.css. 

        navbar.style.setProperty('--indicator-left', `${itemLeft}px`)
        navbar.style.setProperty('--indicator-width', `${itemWidth}px`)
    });
});

navbar.addEventListener('mouseleave', () => {
    indicator.style.opacity = '0';
    // indicator.style.setProperty('width','20vw')
});

navbar.addEventListener('mouseenter', () => {
    indicator.style.opacity = '1';
    // indicator.style.setProperty('width','25vw')
});

navbar.addEventListener('click', () => {
    // indicator.style.setProperty('margin','20px')
    // indicator.style.setProperty('width','20vw')
    // indicator.style.setProperty('height','90%')
    // indicator.style.setProperty('flex-grow','10')
    // indicator.style.setProperty('flex-shrink','2')
    // indicator.style.setProperty('flex','2')
})

// const img = document.querySelectorAll('img')

// try {
// img.forEach(item => {
//     item.addEventListener('mouseenter', () => {
//         alert();
//         item.style.setProperty('width','600px');
//     })
// })
// } catch(e) {
//     alert(e)
// }
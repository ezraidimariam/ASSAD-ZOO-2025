// Menu burger responsive
const navToggle = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.navbar-collapse');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// Exemple animation simple pour hero
const hero = document.querySelector('.hero');
if(hero){
    hero.style.opacity = 0;
    window.addEventListener('load', () => {
        hero.style.transition = 'opacity 1s';
        hero.style.opacity = 1;
    });
}

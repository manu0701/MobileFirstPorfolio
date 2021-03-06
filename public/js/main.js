const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close');


let form = document.getElementById('formulario');

    form.addEventListener('submit', e => {
        e.preventDefault();
        console.log('Submitido');
    })


function submitir () {
    e.preventDefault();
    console.log('Formulario submitido');
}
//Mostrar
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

//Ocultar
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

//Remover menu
const navLink = document.querySelectorAll('.nav__link');

function linkAction () {
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//Scroll section active link

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight) {
            document.querySelector('.nav__ a[href*='+ sectionId +']').classList.add('active');
        } else {
            document.querySelector('.nav__ a[href*='+ sectionId +']').classList.remove('active');
        }
    })
}
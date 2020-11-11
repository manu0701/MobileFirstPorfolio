const nav = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

//Mostrar
toggleMenu.addEventListener('click', () => {
    nav.classList.toggle('show')
})

//Ocultar
closeMenu.addEventListener('click', () => {
    nav.classList.remove('show')
})

//Remover menu
const navLink = document.querySelectorAll('.nav__link')

function linkAction () {
    nav.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)
function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAnimations('id')
        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight) {
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')
        }
    })
}
const hamburguer = document.querySelector('.hamburger')
const ul = document.querySelector('.menu-principal ul')

hamburguer.addEventListener('click', ()=> {
    ul.classList.toggle('active')
})
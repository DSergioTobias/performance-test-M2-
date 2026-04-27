const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

// Write your Js code here 

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Cierra el menú al hacer clic en un enlace
document.querySelectorAll('.nav__list a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
});


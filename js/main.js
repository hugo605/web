
// Menú móvil
const menuBtn = document.getElementById('menuBtn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Cerrar menú al hacer clic en enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Funcionalidade do Carrossel Simples
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Troca de slide a cada 5 segundos
setInterval(nextSlide, 5000);

// Menu Sticky com efeito
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.padding = window.scrollY > 50 ? '10px 0' : '20px 0';
});

// Suavização de scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Añadir animaciones de desplazamiento suave a los enlaces de navegación
    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Evitar el comportamiento por defecto
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
        });
    });

    // Efecto de desvanecimiento en las secciones al cargar
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.style.opacity = 0; // Inicialmente invisible
        section.style.transition = 'opacity 1s'; // Transición suave
    });

    let fadeIn = 0;
    const fadeInInterval = setInterval(() => {
        if (fadeIn < sections.length) {
            sections[fadeIn].style.opacity = 1; // Desvanecer la sección
            fadeIn++;
        } else {
            clearInterval(fadeInInterval); // Detener la animación
        }
    }, 500); // Tiempo entre desvanecimientos
});

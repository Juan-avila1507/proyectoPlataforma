document.addEventListener('DOMContentLoaded', () => {
    console.log("¡JavaScript cargado! Aplicando animaciones.");

    // Selecciona todos los elementos con la clase 'section-content' (tus cuadros de contenido)
    const sectionContents = document.querySelectorAll('.section-content');

    // Opciones para el Intersection Observer
    const observerOptions = {
        root: null, // El viewport (ventana del navegador) es el área de detección
        rootMargin: '0px',
        threshold: 0.1 // Un elemento es "visible" cuando el 10% de él entra en el viewport
    };

    // Crea un nuevo Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si la sección es visible
            if (entry.isIntersecting) {
                // Añade la clase 'is-visible' para activar la animación CSS
                entry.target.classList.add('is-visible');
                // Deja de observar esta sección una vez que se ha animado
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa cada 'section-content'
    sectionContents.forEach(content => {
        observer.observe(content);
    });

    // Opcional: Para el efecto de "pulso" en el título principal al cargar la página
    // No es estrictamente necesario con la animación CSS directamente en h1,
    // pero si quisieras controlarlo con JS o activarlo en un evento específico:
    const mainTitle = document.querySelector('.intro h1');
    if (mainTitle) {
        // Puedes añadir una clase que active la animación solo después de cargar
        // mainTitle.classList.add('animate-on-load');
    }
});
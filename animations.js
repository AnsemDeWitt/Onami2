// Registro del plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Configuración global para GSAP
gsap.config({
    force3D: true,
    nullTargetWarn: false
});

// Animaciones al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== ANIMACIONES DE ENTRADA =====
    
    // Animación del navbar - fade in desde arriba
    gsap.from(".navbar", {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: "power2.out"
    });

    // Animación del carrusel principal - fade in con escala
    gsap.from("#heroCarousel", {
        duration: 1.2,
        scale: 0.95,
        opacity: 0,
        ease: "power2.out",
        delay: 0.3
    });

    // Animación de los indicadores del carrusel
    gsap.from(".carousel-indicators button", {
        duration: 0.8,
        scale: 0,
        opacity: 0,
        ease: "back.out(1.7)",
        stagger: 0.1,
        delay: 1
    });

    // ===== ANIMACIONES CON SCROLL TRIGGER =====
    
    // Animación de los títulos de secciones
    gsap.from("h4", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "h4",
            start: "top 90%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
        }
    });

    // Animación de las tarjetas de recomendaciones
    gsap.from(".recommendation-card", {
        duration: 0.8,
        y: 80,
        opacity: 0,
        scale: 0.9,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#recommendationsCarousel",
            start: "top 85%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });

    // Animación de las tarjetas del segundo carrusel
    gsap.from("#continueWatchingCarousel .recommendation-card", {
        duration: 0.8,
        y: 80,
        opacity: 0,
        scale: 0.9,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#continueWatchingCarousel",
            start: "top 85%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });

    // Animación de la tabla de series
    gsap.from(".series-table", {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".series-section",
            start: "top 80%",
            end: "bottom 40%",
            toggleActions: "play none none reverse"
        }
    });

    // Animación de las filas de la tabla con stagger
    gsap.from(".series-table tbody tr", {
        duration: 0.6,
        x: -50,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".series-table tbody",
            start: "top 85%",
            end: "bottom 40%",
            toggleActions: "play none none reverse"
        }
    });

    // Animación del footer
    gsap.from("footer", {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "footer",
            start: "top 95%",
            end: "bottom 50%",
            toggleActions: "play none none reverse"
        }
    });

    // ===== ANIMACIONES INTERACTIVAS =====
    
    // Hover animado para las tarjetas
    const cards = document.querySelectorAll('.recommendation-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                y: -10,
                scale: 1.02,
                ease: "power2.out"
            });
            
            // Animación de la imagen dentro de la tarjeta
            const img = card.querySelector('.recommendation-img');
            if (img) {
                gsap.to(img, {
                    duration: 0.3,
                    scale: 1.1,
                    ease: "power2.out"
                });
            }
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                y: 0,
                scale: 1,
                ease: "power2.out"
            });
            
            const img = card.querySelector('.recommendation-img');
            if (img) {
                gsap.to(img, {
                    duration: 0.3,
                    scale: 1,
                    ease: "power2.out"
                });
            }
        });
    });

    // Animación para los botones de play
    const playButtons = document.querySelectorAll('.btn-primary');
    playButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                duration: 0.2,
                scale: 1.1,
                ease: "back.out(1.7)"
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                duration: 0.2,
                scale: 1,
                ease: "power2.out"
            });
        });
    });

    // ===== ANIMACIONES DE CARRUSEL PERSONALIZADAS =====
    
    // Animación cuando cambia de slide en el carrusel principal
    const heroCarousel = document.getElementById('heroCarousel');
    if (heroCarousel) {
        heroCarousel.addEventListener('slid.bs.carousel', (event) => {
            const activeSlide = event.target.querySelector('.carousel-item.active');
            const caption = activeSlide.querySelector('.carousel-caption');
            const image = activeSlide.querySelector('.carousel-img');
            
            // Animación del caption
            if (caption) {
                gsap.from(caption, {
                    duration: 0.8,
                    y: 50,
                    opacity: 0,
                    ease: "power2.out"
                });
            }
            
            // Animación de la imagen
            if (image) {
                gsap.from(image, {
                    duration: 1,
                    scale: 1.1,
                    ease: "power2.out"
                });
            }
        });
    }

    // ===== ANIMACIONES DE SCROLL PARALLAX =====
    
    // Efecto parallax en las imágenes del carrusel
    gsap.to(".carousel-img", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: "#heroCarousel",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // ===== ANIMACIONES DE FOCUS MEJORADAS =====
    
    // Animación de focus para elementos interactivos
    const focusableElements = document.querySelectorAll('button, a, input, [tabindex]');
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            gsap.to(element, {
                duration: 0.2,
                scale: 1.05,
                ease: "power2.out"
            });
        });
        
        element.addEventListener('blur', () => {
            gsap.to(element, {
                duration: 0.2,
                scale: 1,
                ease: "power2.out"
            });
        });
    });

    console.log('🎬 GSAP Animations loaded successfully!');
});

// ===== FUNCIONES AUXILIARES =====

// Función para crear animaciones de texto letra por letra
function animateText(selector, delay = 0) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = text.split('').map(char => 
            char === ' ' ? ' ' : `<span style="display: inline-block;">${char}</span>`
        ).join('');
        
        gsap.from(`${selector} span`, {
            duration: 0.6,
            y: 50,
            opacity: 0,
            ease: "back.out(1.7)",
            stagger: 0.02,
            delay: delay
        });
    });
}

// Función para animar elementos cuando entran en viewport
function animateOnScroll(selector, animation = {}) {
    const defaultAnimation = {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out"
    };
    
    const finalAnimation = { ...defaultAnimation, ...animation };
    
    gsap.from(selector, {
        ...finalAnimation,
        scrollTrigger: {
            trigger: selector,
            start: "top 85%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });
}
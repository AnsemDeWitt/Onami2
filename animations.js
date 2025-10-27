// Mis animaciones GSAP
gsap.registerPlugin(ScrollTrigger);

// Animación navbar al cargar
gsap.from(".navbar", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out"
});

// Animación carrusel principal
gsap.from("#heroCarousel", {
    duration: 1.2,
    scale: 0.9,
    opacity: 0,
    ease: "power2.out",
    delay: 0.3
});

// Animación títulos de secciones (excepto recomendaciones, novetats y catáleg)
gsap.utils.toArray("h4").forEach((title, index) => {
    // Saltar el título de recomendaciones ya que tiene su propia animación
    if (title.closest('.recommendations-section')) return;
    
    // Saltar títulos de novetats y catáleg para que permanezcan sin animación
    if (title.closest('#novetats') || title.closest('#cataleg')) return;
    
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 0.8,
        x: -50,
        opacity: 0,
        ease: "power2.out",
        delay: index * 0.1
    });
});

// Animación cartas de recomendaciones (se inicia al cargar)
gsap.utils.toArray(".recommendation-card").forEach((card, index) => {
    gsap.from(card, {
        duration: 0.8,
        y: 40,
        opacity: 0,
        ease: "back.out(1.7)",
        delay: 1.5 + (index * 0.1) // Delay después del carrusel
    });
});

// Animación título recomendaciones (se inicia al cargar)
gsap.from(".recommendations-section h4", {
    duration: 0.8,
    x: -50,
    opacity: 0,
    ease: "power2.out",
    delay: 1.2
});

// Animación listas personalizadas
gsap.utils.toArray(".list-card").forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
        },
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        rotation: 5,
        ease: "back.out(1.7)",
        delay: index * 0.15
    });
});

// Animación tabla de series
gsap.from(".series-table", {
    scrollTrigger: {
        trigger: ".series-table",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power2.out"
});

// Hover para cartas con GSAP
document.querySelectorAll('.recommendation-card, .list-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.3,
            y: -8,
            scale: 1.02,
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.3,
            y: 0,
            scale: 1,
            ease: "power2.out"
        });
    });
});

// Parallax suave para el fondo
gsap.to("body", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
    },
    backgroundPosition: "50% 100%",
    ease: "none"
});

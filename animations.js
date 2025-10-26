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

// Animación títulos de secciones
gsap.utils.toArray("h4").forEach((title, index) => {
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

// Animación cartas de recomendaciones
gsap.utils.toArray(".recommendation-card").forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
        },
        duration: 0.6,
        y: 30,
        opacity: 0,
        ease: "back.out(1.7)",
        delay: index * 0.1
    });
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

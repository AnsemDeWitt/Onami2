gsap.registerPlugin(ScrollTrigger);
const ANIMATION_CONFIG = {
    duration: { fast: 0.3, normal: 0.8, slow: 1.2 },
    ease: { smooth: "power2.out", bounce: "back.out(1.7)" },
    triggers: { start: "top 80%", end: "bottom 20%", actions: "play none none reverse" }
};
const initPageAnimations = () => {
    gsap.from(".navbar", { duration: ANIMATION_CONFIG.duration.normal, y: -100, opacity: 0, ease: ANIMATION_CONFIG.ease.smooth });
    gsap.from("#heroCarousel", { duration: ANIMATION_CONFIG.duration.slow, scale: 0.9, opacity: 0, ease: ANIMATION_CONFIG.ease.smooth, delay: 0.3 });
};
const animateSectionTitles = () => {
    const excludeSelectors = ['.recommendations-section', '#novetats', '#cataleg'];
    gsap.utils.toArray("h4").forEach((title, index) => {
        const shouldSkip = excludeSelectors.some(selector => title.closest(selector));
        if (shouldSkip) return;
        gsap.from(title, {
            scrollTrigger: { trigger: title, start: ANIMATION_CONFIG.triggers.start, end: ANIMATION_CONFIG.triggers.end, toggleActions: ANIMATION_CONFIG.triggers.actions },
            duration: ANIMATION_CONFIG.duration.normal, x: -50, opacity: 0, ease: ANIMATION_CONFIG.ease.smooth, delay: index * 0.1
        });
    });
};
const animateCards = () => {
    gsap.from(".recommendations-section h4", { duration: ANIMATION_CONFIG.duration.normal, x: -50, opacity: 0, ease: ANIMATION_CONFIG.ease.smooth, delay: 1.2 });
    gsap.utils.toArray(".list-card").forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: { trigger: card, start: "top 85%", end: "bottom 15%", toggleActions: ANIMATION_CONFIG.triggers.actions },
            duration: ANIMATION_CONFIG.duration.normal, scale: 0.8, opacity: 0, rotation: 5, ease: ANIMATION_CONFIG.ease.bounce, delay: index * 0.15
        });
    });
};
const animateKimetsuImage = () => {
    gsap.from(".kimetsu-image", {
        scrollTrigger: { trigger: ".kimetsu-image", start: ANIMATION_CONFIG.triggers.start, end: ANIMATION_CONFIG.triggers.end, toggleActions: ANIMATION_CONFIG.triggers.actions },
        duration: ANIMATION_CONFIG.duration.slow, x: "100%", opacity: 0, ease: ANIMATION_CONFIG.ease.smooth
    });
};
const initParallaxEffect = () => {
    gsap.to("body", { scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 1 }, backgroundPosition: "50% 100%", ease: "none" });
};
const init = () => { initPageAnimations(); animateSectionTitles(); animateCards(); animateKimetsuImage(); initParallaxEffect(); };
document.addEventListener('DOMContentLoaded', init);

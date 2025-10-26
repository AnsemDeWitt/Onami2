# 🎬 GSAP Implementation Guide

## 📦 Instalación
GSAP se ha implementado via CDN en el proyecto. Los siguientes scripts están incluidos:

```html
<!-- GSAP Core -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<!-- ScrollTrigger Plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

## 📁 Archivos Creados

### 1. `animations.js` - Archivo principal de animaciones
- Contiene todas las animaciones GSAP del proyecto
- Animaciones de entrada, scroll y interactivas
- Funciones auxiliares reutilizables

### 2. `gsap-optimizations.css` - Optimizaciones de rendimiento
- Mejoras de hardware acceleration
- Estados iniciales para animaciones
- Reducción de repaints y reflows

## 🎯 Animaciones Implementadas

### Animaciones de Entrada (Al cargar la página)
- **Navbar**: Fade in desde arriba
- **Carrusel Principal**: Fade in con escala
- **Indicadores**: Aparición con bounce effect

### Animaciones con Scroll Trigger
- **Títulos de Secciones**: Slide up al entrar en viewport
- **Tarjetas de Recomendaciones**: Stagger animation (una tras otra)
- **Tabla de Series**: Slide desde la izquierda
- **Footer**: Slide up desde abajo

### Animaciones Interactivas
- **Hover en Tarjetas**: Elevación y escala de imagen
- **Hover en Botones**: Escala con bounce effect
- **Focus**: Animación de escala para accesibilidad

### Animaciones de Carrusel
- **Cambio de Slide**: Caption y imagen animados
- **Parallax**: Efecto parallax en imágenes durante scroll

## 🛠 Cómo Usar GSAP en tu Proyecto

### Ejemplo 1: Animación Básica
```javascript
// Animar un elemento
gsap.to(".mi-elemento", {
    duration: 1,
    x: 100,
    opacity: 0.5,
    ease: "power2.out"
});
```

### Ejemplo 2: Animación con ScrollTrigger
```javascript
gsap.from(".mi-seccion", {
    duration: 1,
    y: 50,
    opacity: 0,
    scrollTrigger: {
        trigger: ".mi-seccion",
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none reverse"
    }
});
```

### Ejemplo 3: Timeline (Secuencia de Animaciones)
```javascript
const tl = gsap.timeline();
tl.from(".elemento1", { duration: 0.5, x: -50, opacity: 0 })
  .from(".elemento2", { duration: 0.5, y: 50, opacity: 0 }, "-=0.2")
  .to(".elemento3", { duration: 0.5, scale: 1.2, ease: "back.out(1.7)" });
```

## 🎨 Funciones Auxiliares Incluidas

### `animateText(selector, delay)`
Anima texto letra por letra:
```javascript
animateText('.mi-titulo', 0.5);
```

### `animateOnScroll(selector, animation)`
Crea animaciones personalizadas en scroll:
```javascript
animateOnScroll('.mi-elemento', {
    duration: 1,
    x: 100,
    rotation: 360
});
```

## 🎯 Propiedades GSAP Más Comunes

### Transformaciones
- `x`, `y`, `z` - Posición
- `scale`, `scaleX`, `scaleY` - Escala
- `rotation`, `rotationX`, `rotationY` - Rotación
- `skew`, `skewX`, `skewY` - Inclinación

### Estilos
- `opacity` - Transparencia
- `backgroundColor` - Color de fondo
- `color` - Color de texto
- `width`, `height` - Dimensiones

### Configuraciones
- `duration` - Duración en segundos
- `delay` - Retraso antes de iniciar
- `ease` - Tipo de transición
- `stagger` - Retraso entre elementos múltiples

## 🚀 Tipos de Ease Recomendados

```javascript
// Naturales
"power1.out", "power2.out", "power3.out"

// Con rebote
"back.out(1.7)", "bounce.out"

// Elásticos
"elastic.out(1, 0.3)"

// Suaves
"sine.inOut", "circ.out"
```

## 📱 Optimizaciones Incluidas

### Rendimiento
- Hardware acceleration habilitada
- `will-change` aplicado a elementos animados
- Reducción de repaints/reflows

### Accesibilidad
- Respeta `prefers-reduced-motion`
- Animaciones de focus para navegación por teclado
- Duraciones ajustadas para dispositivos móviles

### Compatibilidad
- Funciona en todos los navegadores modernos
- Fallbacks para dispositivos de bajo rendimiento
- Detección automática de capacidades del dispositivo

## 🎮 Controles de Desarrollo

### Debug Mode
Para activar el modo debug de ScrollTrigger:
```javascript
ScrollTrigger.batch(".elemento", {
    onEnter: (elements) => console.log("Elementos entraron:", elements),
    onLeave: (elements) => console.log("Elementos salieron:", elements)
});
```

### Refresh ScrollTrigger
Si cambias el contenido dinámicamente:
```javascript
ScrollTrigger.refresh();
```

## 🔧 Personalización

Para añadir nuevas animaciones, edita `animations.js`:

1. **Animaciones de entrada**: Añade en el `DOMContentLoaded`
2. **Animaciones de scroll**: Usa `ScrollTrigger`
3. **Animaciones interactivas**: Añade event listeners

## 📊 Monitoreo de Rendimiento

Las animaciones están optimizadas para 60 FPS. Para monitorear:
```javascript
// En DevTools Console
console.log(gsap.ticker.fps); // FPS actual
```

¡GSAP está listo para usar! 🎉
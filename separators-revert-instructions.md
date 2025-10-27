# INSTRUCCIONES PARA REVERTIR SEPARADORES

## Si no te gustan los separadores visuales, sigue estos pasos:

### 1. ELIMINAR CSS DE SEPARADORES
En el archivo `style.css`, elimina estas líneas (aproximadamente líneas 8-32):

```css
/* ====== SEPARADORES DE SECCIÓN (FÁCIL DE REVERTIR) ====== */
.section-divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.1) 20%, 
        rgba(255, 255, 255, 0.3) 50%, 
        rgba(255, 255, 255, 0.1) 80%, 
        transparent 100%);
    margin: 40px 0;
    opacity: 0.8;
}

.section-divider-dots {
    text-align: center;
    margin: 30px 0;
    opacity: 0.6;
}

.section-divider-dots::before {
    content: "• • •";
    color: rgba(255, 255, 255, 0.4);
    font-size: 18px;
    letter-spacing: 10px;
}

.section-divider-subtle {
    width: 60%;
    height: 1px;
    background: rgba(255, 255, 255, 0.15);
    margin: 35px auto;
    opacity: 0.7;
}
/* ====== FIN SEPARADORES ====== */
```

### 2. ELIMINAR HTML DE SEPARADORES
En el archivo `index.html`, busca y elimina estas líneas:

```html
<!-- Separador visual -->
<div class="section-divider"></div>

<!-- Separador visual -->
<div class="section-divider-dots"></div>

<!-- Separador visual -->
<div class="section-divider-subtle"></div>

<!-- Separador visual -->
<div class="section-divider"></div>
```

### 3. UBICACIONES EXACTAS DE LOS SEPARADORES A ELIMINAR:
- Entre "Recomendaciones" y "Listas personalizadas"
- Entre "Listas personalizadas" y "Series más vistas"  
- Entre "Series más vistas" y "Novetats"
- Entre "Novetats" y "Catáleg"

### 4. RESULTADO
Después de eliminar estos elementos, las secciones volverán a estar sin separadores visuales, como estaban originalmente.

## TIPOS DE SEPARADORES AÑADIDOS:

1. **`.section-divider`**: Línea degradada horizontal sutil
2. **`.section-divider-dots`**: Tres puntos centrados
3. **`.section-divider-subtle`**: Línea simple más discreta

Cada uno tiene un estilo diferente para variar visualmente entre secciones.
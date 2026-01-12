# EstrategIA — sitio estático

Sitio estático compatible con GitHub Pages y listo para incrustar en Google Sites.

## Estructura

- index.html — Dashboard
- estrategias.html — Gestión y formulario
- finanzas.html, produccion.html, marketing.html, rrhh.html, innovacion.html, cumplimiento.html — Módulos
- css/styles.css — Estilos globales (tarjetas degradadas, botones, sidebar, modo oscuro)
- js/main.js — Funciones generales (sidebar, modo oscuro, alertas)
- js/estrategias.js — Formulario dinámico, validación, recomendación IA, exportación PDF (print)
- assets/logo.svg — Logo vector
- assets/logo.png — Placeholder (reemplazar por tu PNG)

## Publicación en GitHub Pages

1. En GitHub: Settings → Pages.
2. Selecciona `main` como branch y `/root` como folder.
3. URL esperada: https://fabianco-ux.github.io/Estrategia-profesional-con-IA/

## Enlaces relativos
Todos los enlaces navegan con rutas relativas (ej: `estrategias.html`), compatibles con Pages.

## Embed en Google Sites

- En Google Sites, usa Insert → Embed → By URL e ingresa:
  - https://fabianco-ux.github.io/Estrategia-profesional-con-IA/
- Opcional (copia y pega como HTML):

```html
<iframe src="https://fabianco-ux.github.io/Estrategia-profesional-con-IA/" style="width:100%;height:800px;border:0;" allowfullscreen loading="lazy"></iframe>
```

- También puedes usar el archivo `embed.html` en la raíz de este repositorio para copiar la URL o el iframe con un botón.

## Personalización
- Reemplaza `assets/logo.png` por tu logo institucional y actualiza las referencias si lo deseas.
- Tipografía: Google Fonts — Inter.
- Colores: tarjetas con degradado violeta → azul.
- Modo oscuro: toggle en la barra lateral.

## Nota
Este proyecto es 100% estático, sin rutas internas; usa páginas `.html` con navegación por enlaces.

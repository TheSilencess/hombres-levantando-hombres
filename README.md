# Hombres Levantando Hombres

Landing estática React + TypeScript + Vite + Tailwind CSS 4 + Lucide + Motion. HTML prerenderizado: el contenido, los metadatos y Organization están disponibles antes de ejecutar JavaScript. No hay backend ni panel administrativo.

## Instalación y uso local

Requiere Node.js 22.12 o posterior compatible con Vite 7.

```bash
npm ci
cp .env.example .env
npm run dev
```

El modo desarrollo necesita generar primero el HTML de producción para ver una versión prerenderizada. Para revisar el resultado final:

```bash
npm run build
npm run preview
```

La carpeta `dist/` contiene el sitio desplegable. `.prerender/` es un artefacto interno de la compilación.

## Configuración

`src/config/site.ts` centraliza nombre, dirección, frecuencia, horario, WhatsApp, próxima reunión, redes, Google Maps, URL pública y textos. `src/data/content.ts` contiene misión, experiencias y preguntas. Cambios requieren nueva compilación y despliegue.

### WhatsApp

Definir `VITE_WHATSAPP` en `.env` o en las variables del servicio de compilación. Usar únicamente dígitos, incluyendo 502 y el número confirmado de Guatemala. Nunca incluir espacios o `+`. El mensaje está en `whatsappMessage`. Sin número válido, los enlaces llevan a la sección de contacto y muestran que el contacto está pendiente; no se abre un número ficticio. Es una variable pública, no un secreto.

### Próxima reunión

Actualizar `nextMeeting` con un texto confirmado por los organizadores. Con cadena vacía se solicita consultar la próxima fecha. No hay cálculo automático cada 15 días.

### Fotografías

Guardar fotos reales en `public/images/gallery/` y añadir objetos en `src/data/gallery.ts` con `src`, `alt`, `title`, `illustrative` y `position`. Para fotografías auténticas, usar `illustrative: false`. Evitar rostros sin autorización de publicación. Las imágenes actuales son ilustrativas generadas y no representan al grupo. Las tres vistas de la galería usan la misma imagen demostrativa con distintos encuadres CSS. Antes de publicar la galería real, actualizar también el aviso en `Gallery.tsx`. Hero y bienvenida se reemplazan en `App.tsx`; actualizar sus avisos y alt al usar fotografías auténticas.

Preferir WebP/AVIF con tamaño razonable y proporciones coherentes. Hero se carga prioritariamente y las imágenes de otras secciones usan carga diferida. Logo oficial en `public/images/branding/logo.png`, íntegro y sin modificar símbolos o textos; también se usa como favicon.

### Redes y mapa

Añadir redes confirmadas en `socials`. No se muestran enlaces vacíos. `mapsUrl` es una búsqueda basada en la ubicación proporcionada; no representa una verificación exacta. Reemplazarla por el enlace exacto una vez confirmado. `mapsEmbedUrl` admite el atributo `src` de un iframe oficial de Google Maps; si está vacío, se omite el iframe y se mantiene el enlace de búsqueda.

## SEO

Configurar `VITE_SITE_URL` con el dominio final HTTPS, sin barra final, y `socialImage` con una imagen local. `npm run build` genera title, description, canonical, Open Graph, Twitter Cards, Organization, robots.txt y sitemap.xml. No se añaden fechas, teléfonos ni redes sin configurar, ni marcado FAQ. Mantener un único H1. Tras cambiar el dominio, recompilar y verificar canonical y sitemap. Registrar el dominio en Google Search Console, verificar propiedad mediante DNS o archivo oficial y enviar `/sitemap.xml`. Las vistas privadas no son una publicación pública indexable; SEO se aprovecha al desplegar el dominio público.

## Vercel

Importar el repositorio o subirlo a un repositorio propio. Preset Vite, instalación `npm ci`, build `npm run build`, salida `dist`. Añadir variables de `.env.example` con valores confirmados. No hacen falta reglas SPA ya que esta landing usa una única ruta y anclas.

## Hostinger

Compilar localmente con `npm ci` y `npm run build`. Subir el contenido de `dist` a `public_html` del dominio usando el administrador de archivos. `index.html` debe quedar en la raíz. No subir `node_modules`, `.env`, ni `.prerender`. Para cambiar datos, recompilar y volver a subir el contenido. No se necesita proceso Node en el servidor para servir el sitio.

## Accesibilidad e interacciones

Menú móvil con Escape y devolución del foco al botón; navegación activa con IntersectionObserver; FAQ con elementos details/summary nativos; galería con dialog modal nativo, cierre Escape y flechas izquierda/derecha; foco visible, enlace para saltar al contenido, enlaces descriptivos y reduced motion. Diseño con breakpoints 600, 850 y 1150 px. El contenido prerenderizado y los enlaces básicos funcionan sin JavaScript; la galería ampliada y el menú móvil requieren JavaScript.

## Verificación y límites

Compilación TypeScript estricta y producción verificadas. Validación automatizada del HTML: un H1, secciones requeridas, metadatos, rutas locales, marcado Organization y ausencia de teléfono/fecha inventados. No se ejecutó Lighthouse ni revisión en navegador: no se afirman puntuaciones de rendimiento ni conformidad WCAG certificada. Revisar en dispositivos reales antes de publicar bajo el dominio final.

## Imagen ilustrativa

Generada con la herramienta integrada de imágenes. Prompt: fotografía documental cinematográfica de seis hombres latinos adultos orando alrededor de una mesa de desayuno, gesto de apoyo en el hombro, luz cálida matinal, sombras azul profundo, espacio oscuro a la izquierda, sin textos ni logos. Original optimizado a WebP en `public/images/hero/hermandad.webp`.

## Actualización: tipografía y peticiones de oración

Todo el sitio usa Roboto (Google Fonts), con Arial como alternativa local. La sección Oración permite escribir nombre opcional y motivo de oración. El botón Enviar por WhatsApp abre un mensaje preparado, que el visitante revisa y envía en WhatsApp; no confirma una recepción ficticia. El número usa la misma variable `VITE_WHATSAPP`; mientras esté vacío, el botón está deshabilitado con explicación visible y funciona Copiar petición. No se guarda ni se envía información a un backend. El texto inicial se configura con `prayerMessage` en `src/config/site.ts`.

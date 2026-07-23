# ON STRATEGY PRO — Sitio web

Landing bilingüe (ES/EN) para **ON STRATEGY PRO** — consultora de aterrizaje y
expansión comercial. *Expansión global con estrategia y ejecución* · LATAM · USA · EAU.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS** (paleta de marca: dorado `#F4C430`, tinta `#1B1B1B`, papel `#F3F3F1`)
- **Framer Motion** para todas las animaciones
- **Lucide React** para iconos
- Tipografías **Clash Display** + **Satoshi** (Fontshare)

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist
npm run preview  # sirve el build
```

## Idiomas

El sitio arranca en español (o inglés según el navegador) y se cambia con el botón
**ES/EN** del header. Todo el contenido vive en `src/i18n/content.ts`. La preferencia
se guarda en `localStorage`.

## Estructura

- `src/i18n/` — contenido bilingüe + contexto de idioma
- `src/components/ui/` — componentes reutilizables
  - `scroll-expand-showcase.tsx` — media que se expande al hacer scroll (tagline)
  - `3d-carousel.tsx` — carrusel 3D arrastrable de industrias
  - `primitives.tsx` — Reveal (scroll), EchoStack (texto en capas), SectionLabel
  - `Logo.tsx` — recreación del logotipo ON STRATEGY PRO
- `src/components/sections/` — Navbar, Hero, Marquee, Intro, Solutions,
  Intelligence, Approach, Clients, Plans, Team, Contact, Footer

## Contacto (configurable en `src/i18n/content.ts`)

- Email: `onstrategysalespro@gmail.com`
- WhatsApp / Tel: `+593 96 364 7848`
- Web: `www.onstrategypro.com`

## Deploy a GitHub Pages

```bash
npm run deploy   # build + publica /dist con gh-pages
```

> Nota: las imágenes de industrias usan stock de Pexels (agroindustria, automatización,
> retail, distribución, foodservice, skyline y Dubái). Reemplázalas por fotos reales de
> la clienta cuando estén disponibles (en `src/components/sections/Clients.tsx` y
> `src/App.tsx`). Los logotipos de clientes son texto; se pueden cambiar por imágenes
> de logo reales.

# Portfolio — Jhonier Garzón

Portfolio profesional estático: **React 19 + Vite 8 + TypeScript + Tailwind 4 + shadcn/ui + Motion**.

## Requisitos

- Node.js 20 o superior

## Levantar en local (desarrollo)

```bash
npm install
npm run dev
```

Abre http://localhost:5173 (Vite). Cambios en caliente.

## Build de producción

```bash
npm run build
```

Genera la carpeta `html/` (build estático listo para servir con cualquier servidor web o hosting estático).

## Estructura

```
app/
├── index.html          # HTML raíz (meta/OG, script de tema)
├── vite.config.ts      # build → ../html
└── src/
    ├── data/portfolio.ts   # ★ TODO el contenido: perfil, experiencia, skills, proyectos, contacto
    ├── components/site/    # Secciones de la página
    └── components/ui/      # shadcn/ui (button, badge)
```

**Regla de oro:** el contenido se edita en `src/data/portfolio.ts`. La carpeta `html/` NO se toca a mano (se regenera en cada build).

## Notas

- `deploy.sh` es específico del homelab del autor (sube el build a un LXC con nginx) — opcional, ignorarlo al desplegar en otro sitio.
- Sin dependencias de backend: sitio 100% estático, apto para GitHub Pages, Netlify, Cloudflare Pages, etc.

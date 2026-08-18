# Jhonier Garzón — Portfolio

> Técnico Superior en Administración de Sistemas y Redes · Toledo, España

Mi portfolio profesional: la web donde muestro quién soy, mi experiencia, los proyectos de infraestructura que mantengo en mi homelab y cómo contactar conmigo.

## 🌐 Ver en vivo

**https://jhoniergv.github.io/portfolio/**

---

## Sobre mí

Técnico informático especializado en administración de sistemas, virtualización y soporte técnico. Diseño, despliego y mantengo infraestructura autohospedada: Proxmox, Docker, redes y seguridad.

Apasionado por la infraestructura y el autohospedaje. Gestiono un homelab donde conviven virtualización Proxmox, servicios en contenedores, firewall pfSense y monitoreo de seguridad — todo aprendido y mantenido por mí, con foco en disponibilidad y buenas prácticas.

Busco un puesto como administrador o técnico de sistemas donde pueda aportar orden, automatización y seguridad a entornos reales.

## Qué encontrarás en la web

- **Hero con terminal interactiva**: 10 comandos para explorar el portfolio como si fuera un servidor
- **Servicios**: lo que hago y cómo puedo ayudar
- **Experiencia**: CYSIA (2025–2026), IES Universidad Laboral de Toledo (2024) y mi homelab autogestionado (2024 — actualidad)
- **Proyectos**: 9 proyectos con ficha detallada (problema, solución, arquitectura y lecciones aprendidas)
- **Arquitectura**: el homelab a vista de pájaro
- **Contacto**: email, LinkedIn y GitHub
- **Easter eggs**: un perrito ASCII incluido 🐶

## Proyectos destacados

| Proyecto | Stack |
|---|---|
| **Homelab Proxmox** — 18 servicios autohospedados en un solo nodo | Proxmox, LXC, Docker, PBS |
| **VPN Privada** — túnel WireGuard que sortea el CGNAT del ISP | WireGuard, Oracle Cloud, LXC |
| **Wazuh SIEM** — monitoreo de seguridad centralizado | Wazuh, SIEM, IDS, FIM |
| **Adblocker de red** — DNS que bloquea anuncios y trackers en toda la LAN | AdGuard Home, DNS |
| **Hermes Agent** — agente de IA autónomo con inferencia local | Hermes Agent, Ollama, Telegram |
| **Proxmox Backup Server** — backups deduplicados con restauración granular | PBS, deduplicación |
| **n8n · Automatización** — workflows que conectan servicios del homelab | n8n, webhooks, cron |
| **Gestor de contraseñas privado** — compatible con Bitwarden | Vaultwarden, Docker |
| **Nginx Proxy Manager** — proxy inverso con SSL automático | NPM, Let's Encrypt |

## Tecnologías de la web

React 19 · Vite 8 · TypeScript · Tailwind CSS 4 · shadcn/ui · Motion

## Stack que administro a diario

Virtualización (Proxmox VE, LXC, QEMU/KVM, VMware) · Redes (pfSense, MikroTik, WireGuard, Tailscale, HAProxy) · Proxy y SSL (Nginx Proxy Manager, Let's Encrypt) · Seguridad (Wazuh, Zabbix) · Sistemas (Linux, Windows Server, Bash, Python) · Cloud (Hetzner, Oracle Cloud, Azure) · BBDD (PostgreSQL, MySQL, SQL Server)

## Contacto

- 📧 jhoniergarzon68@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/JhonierGarzonIT)
- 🐙 [GitHub](https://github.com/JhonierGV)

---

## Notas del proyecto

- Sitio 100% estático, sin backend: apto para GitHub Pages, Netlify, Cloudflare Pages, etc.
- **Todo el contenido se edita en `app/src/data/portfolio.ts`** — la carpeta `html/` se regenera en cada build y no se toca a mano.
- Cada push a `main` publica automáticamente el sitio en GitHub Pages (workflow en `.github/workflows/deploy.yml`).

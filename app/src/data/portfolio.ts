export interface Project {
  title: string
  description: string
  tags: readonly string[]
  problem: string
  solution: string
  architecture: readonly string[]
  stack: readonly string[]
  lessons: readonly string[]
  repo?: string
  facts?: readonly string[]
  screenshot?: string
}

export interface Certification {
  title: string
  issuer: string
  year: string
}

export const portfolio = {
  name: 'Jhonier Garzón',
  initials: 'JG',
  role: 'Técnico Superior en Administración de Sistemas y Redes',
  tagline: 'Hola, soy',
  description:
    'Técnico informático especializado en administración de sistemas, virtualización y soporte técnico. Diseño, despliego y mantengo infraestructura autohospedada: Proxmox, Docker, redes y seguridad.',
  summary: [
    'Apasionado por la infraestructura y el autohospedaje. Gestiono un homelab donde conviven virtualización Proxmox, servicios en contenedores, firewall pfSense y monitoreo de seguridad — todo aprendido y mantenido por mí, con foco en disponibilidad y buenas prácticas.',
    'Busco el rol de administrador de sistemas donde pueda aportar orden, automatización y seguridad a entornos reales.',
  ],
  location: 'Toledo · Nambroca, España',
  email: 'jhoniergarzon68@gmail.com',
  phone: '+34 643 46 47 53',
  linkedin: 'https://www.linkedin.com/in/JhonierGarzonIT',
  github: 'https://github.com/jhonier2',
  cvUrl: 'assets/CV_JhonierGarzon.pdf',
  status: [
    { label: 'Nodo Proxmox operativo', dot: true },
    { label: 'Disponible para oportunidades', dot: true },
  ],
  stats: [
    { value: '14', label: 'Contenedores LXC' },
    { value: '4', label: 'Máquinas virtuales' },
    { value: '18', label: 'Servicios self-hosted' },
    { value: '1', label: 'Nodo Proxmox' },
  ],
  experience: [
    {
      company: 'CYSIA',
      role: 'Administrador de Sistemas (Inter)',
      period: '2026',
      points: [
        'Monitorización de infraestructura local y en nube con Zabbix.',
        'Despliegue y configuración de Wazuh para detección de vulnerabilidades y análisis de eventos.',
        'Administración de Proxmox, pfSense, y servidores físicos y virtualizados.',
        'Gestión de backups con verificación de integridad y pruebas de restauración documentadas.',
        'Resolución de incidencias de soporte técnico en entorno real de producción.',
        'Soporte a usuarios de manera presencial y remota, mediante sistema de tickets como ServiceDesk.',
      ],
    },
    {
      company: 'CYSIA',
      role: 'Técnico Informático (Inter)',
      period: '2025',
      points: [
        'Soporte y mantenimiento de servidores físicos.',
        'Resolución de incidencias y atención a usuarios.',
        'Configuración y actualización de equipos y sistemas.',
        'Gestión de copias de seguridad y medidas de seguridad en sistemas.',
        'Gestión de servidores virtualizados.',
      ],
    },
    {
      company: 'IES Universidad Laboral de Toledo',
      role: 'Técnico Informático (Inter)',
      period: '2024',
      points: [
        'Soporte técnico TI y resolución eficiente de incidencias.',
        'Mantenimiento preventivo de equipos informáticos.',
        'Gestión de backups y recuperación de datos.',
      ],
    },
    {
      company: 'Proyecto personal · Homelab',
      role: 'Servidor Proxmox autogestionado',
      period: '2024 — Actualidad',
      current: true,
      points: [
        'Diseño, implementación y administración de un servidor Proxmox desde cero.',
        'Instalación y configuración de servicios virtualizados (Adblock, VPN, seguridad, proxies, Docker).',
        'Resolución de incidencias y optimización de recursos.',
        'Automatización de tareas mediante scripting en Bash.',
      ],
    },
  ],
  education: [
    {
      degree: 'CFGS · Administración de Sistemas Informáticos en Red',
      school: 'IES Azarquiel Toledo',
      period: '2024 — 2026',
    },
    {
      degree: 'CFGM · Sistemas Microinformáticos y Redes',
      school: 'IES Universidad Laboral de Toledo',
      period: '2022 — 2024',
    },
    {
      degree: 'Educación Secundaria Obligatoria',
      school: 'IES Toledo',
      period: 'Completada',
    },
  ],
  skills: [
    {
      title: 'Virtualización',
      items: ['Proxmox VE', 'LXC', 'QEMU/KVM', 'Vagrant', 'VMware'],
    },
    {
      title: 'Redes',
      items: ['pfSense', 'MikroTik', 'WireGuard', 'Tailscale', 'HAProxy', 'DNS'],
    },
    {
      title: 'Proxy & SSL',
      items: ['Nginx Proxy Manager', "Let's Encrypt"],
    },
    {
      title: 'Seguridad',
      items: ['Wazuh SIEM', 'Zabbix'],
    },
    {
      title: 'Sistemas',
      items: ['Linux', 'Windows Server AD', 'Bash', 'Python', 'Git', 'Cron'],
    },
    {
      title: 'Cloud',
      items: ['Hetzner', 'Oracle Cloud', 'Azure'],
    },
    {
      title: 'BBDD',
      items: ['PostgreSQL', 'MySQL', 'SQL Server', 'SQLite'],
    },
  ],
  projects: [
    {
      title: 'Homelab Proxmox',
      description:
        'Plataforma de virtualización con 18 servicios autohospedados en un único nodo, backups y alta disponibilidad.',
      tags: ['Proxmox', 'Docker', 'LXC'],
      screenshot: 'assets/proyecto-homelab.png',
      problem:
        'Necesitaba un sitio donde poder experimentar con nuevas herramientas, sacarles utilidad para aprender por mi cuenta y que todo fuera en local.',
      solution:
        'Un único nodo físico Proxmox VE que virtualiza 14 contenedores LXC y 4 máquinas virtuales, con almacenamiento local y remoto mediante Proxmox Backup Server y red organizada por zonas.',
      architecture: [
        'Nodo físico único: 4 cores y 15,5 GiB de RAM.',
        '14 contenedores LXC para servicios ligeros (DNS, proxy, VPN, IA, búsqueda, automatización).',
        '4 máquinas virtuales para cargas con requisitos propios (backups, cloud, firewall, backup enterprise).',
        'Almacenamiento: pool local LVM-thin + pools PBS remotos con deduplicación.',
        'Red local segmentada con firewall en los puntos de entrada.',
      ],
      stack: ['Proxmox VE', 'LXC', 'QEMU/KVM', 'LVM-thin', 'Proxmox Backup Server'],
      lessons: [
        'Los LXC son mucho más ligeros que las VMs para servicios pequeños: mismo kernel, mucho menos overhead.',
        'Planificar el almacenamiento desde el día uno: el pool local se llena antes de lo que crees.',
        'La deduplicación de PBS hace viable respaldar 18 servicios sin explotar el disco.',
        'Documentar cada servicio (rol, recursos, función) evita el caos cuando la infraestructura crece.',
      ],
      facts: ['14 contenedores LXC', '4 máquinas virtuales', '18 servicios self-hosted', '1 nodo físico'],
    },
    {
      title: 'VPN WireGuard + CGNAT',
      description:
        'VPN totalmente privada: túnel WireGuard que sortea el CGNAT del ISP mediante un relay en Oracle Cloud, sin depender de servicios VPN de terceros.',
      tags: ['WireGuard', 'Redes', 'Oracle Cloud'],
      problem:
        'El ISP usa CGNAT: sin IP pública, ningún servicio del homelab era accesible desde Internet.',
      solution:
        'Túnel WireGuard desde un contenedor dedicado hacia una VM relay en Oracle Cloud (con IP pública) que actúa de hub y reenvía el tráfico hacia la red local. VPN totalmente privada: toda la infraestructura es tuya, sin depender de servicios externos.',
      architecture: [
        'Contenedor LXC dedicado y sin privilegios como gateway VPN (solo 512 MiB de RAM).',
        'Relay en Oracle Cloud con IP pública como hub WireGuard.',
        'Túnel permanente hacia el hub con rutas hacia la red local.',
        'Acceso remoto a todos los servicios del homelab desde cualquier lugar.',
      ],
      stack: ['WireGuard', 'Oracle Cloud', 'LXC', 'Enrutamiento', 'CGNAT'],
      lessons: [
        'Un gateway VPN separado del resto de servicios aísla fallos y simplifica la gestión.',
        'WireGuard es drásticamente más simple que OpenVPN/IPsec: una interfaz, un archivo de configuración.',
        'Un relay en la nube resuelve CGNAT sin pagar una IP fija.',
        'El gateway completo cabe en 512 MiB de RAM: eficiencia real.',
      ],
    },
    {
      title: 'Wazuh SIEM',
      description:
        'Monitoreo de seguridad centralizado sobre los agentes y servicios del homelab.',
      tags: ['Wazuh', 'Seguridad'],
      problem:
        'Sin visibilidad centralizada de los eventos de seguridad: logs dispersos, sin detección de intrusiones ni control de integridad de archivos.',
      solution:
        'Despliegue de Wazuh (SIEM/IDS) que centraliza logs, detecta intrusiones, monitoriza la integridad de archivos y alerta de anomalías en todos los servicios de la infraestructura.',
      architecture: [
        'Servidor Wazuh en un contenedor LXC dedicado.',
        'Agentes desplegados sobre los servicios de la infraestructura.',
        'Análisis de logs y correlación de eventos en tiempo real.',
        'Alertas configurables con reglas propias y personalizadas.',
      ],
      stack: ['Wazuh', 'SIEM', 'IDS', 'FIM', 'LXC'],
      lessons: [
        'Un SIEM en un homelab enseña más que cualquier curso: aprendes qué alertas importan de verdad.',
        'Wazuh necesita recursos: planifica RAM para indexado y correlación.',
        'Las reglas por defecto generan ruido; las reglas propias son las que aportan valor.',
      ],
    },
    {
      title: 'AdGuard Home',
      description:
        'DNS de red con filtrado de anuncios y trackers en toda la LAN.',
      tags: ['AdGuard', 'DNS'],
      problem:
        'Anuncios, trackers y dominios maliciosos llegaban a todos los dispositivos de la red: móviles, TV, IoT.',
      solution:
        'Servidor DNS de red con AdGuard Home: bloquea anuncios, trackers y malware en toda la LAN sin instalar nada en cada dispositivo.',
      architecture: [
        'Contenedor LXC ligero como servidor DNS local.',
        'Filtrado por listas de dominios (anuncios, trackers, malware).',
        'Caché DNS que además acelera la navegación.',
        'Protección automática para cualquier dispositivo conectado a la red.',
      ],
      stack: ['AdGuard Home', 'DNS', 'LXC', 'Filtrado por listas'],
      lessons: [
        'El filtrado DNS a nivel de red protege incluso a los dispositivos que no se pueden configurar (TV, IoT).',
        'El filtrado DNS es invisible para el usuario final: la mejor seguridad es la que no molesta.',
      ],
    },
    {
      title: 'Hermes Agent',
      description:
        'Agente de IA autónomo (Nous Research) en su propio LXC, con inferencia local vía Ollama y gateway de Telegram.',
      tags: ['IA', 'LXC', 'Ollama'],
      problem:
        'Quería un asistente de IA privado que ayudara a operar el homelab sin depender de servicios en la nube ni exponer datos.',
      solution:
        'Agente de IA autónomo (Hermes Agent, de Nous Research) en su propio LXC, con gateway de Telegram para operarlo desde el móvil e inferencia local vía Ollama.',
      architecture: [
        'LXC dedicado con el agente y su entorno de automatización.',
        'Gateway de Telegram para operarlo desde cualquier lugar.',
        'Inferencia local vía Ollama, con modelos corriendo en hardware propio.',
        'Automatizaciones programadas (cron) y workflows con n8n.',
      ],
      stack: ['Hermes Agent', 'Nous Research', 'Ollama', 'Telegram', 'LXC'],
      lessons: [
        'La inferencia local mantiene los datos privados y elimina costes por uso.',
        'Un agente con acceso a terminal y cron automatiza tareas repetitivas del día a día.',
        'Aislarlo en su propio contenedor lo convierte en un servicio más: gestionable y respaldable.',
      ],
    },
    {
      title: 'Proxmox Backup Server',
      description:
        'Backups nativos y deduplicados de toda la infraestructura con restauración granular.',
      tags: ['PBS', 'Backups'],
      problem:
        'Sin un sistema de backups fiable, cualquier fallo de disco suponía pérdida total de datos y configuración.',
      solution:
        'Proxmox Backup Server con deduplicación nativa: backups incrementales de VMs y LXCs, con restauración granular y verificación periódica.',
      architecture: [
        'Servidor PBS en una VM dedicada.',
        'Pools remotos con deduplicación y compresión.',
        'Backups programados de toda la infraestructura.',
        'Restauración granular: por archivo o contenedor completo.',
      ],
      stack: ['Proxmox Backup Server', 'Deduplicación', 'Backups incrementales', 'VM'],
      lessons: [
        'La deduplicación hace viables backups frecuentes sin explotar el almacenamiento.',
        'Un backup que no se prueba restaurar no es un backup.',
        'Separar el backup del sistema principal (otra máquina o pool) protege ante fallos del nodo.',
      ],
    },
    {
      title: 'n8n · Automatización',
      description:
        'Motor de automatización con workflows que conectan servicios del homelab, tareas programadas y avisos por Telegram.',
      tags: ['n8n', 'Automatización'],
      problem:
        'Tareas repetitivas del homelab (monitorización, ingesta de documentación, avisos) consumían tiempo a mano.',
      solution:
        'n8n como motor de automatización: workflows que conectan servicios, ejecutan tareas programadas y notifican por Telegram.',
      architecture: [
        'n8n en un contenedor LXC.',
        'Workflows con disparadores programados y webhooks.',
        'Integraciones con los servicios del homelab.',
        'Notificaciones y alertas a Telegram.',
      ],
      stack: ['n8n', 'Automatización', 'Webhooks', 'LXC'],
      lessons: [
        'La automatización con webhooks y cron elimina tareas de mantenimiento manuales.',
        'Documentar cada workflow evita que la automatización se convierta en una caja negra.',
      ],
    },
    {
      title: 'Vaultwarden',
      description:
        'Gestor de contraseñas self-hosted, compatible con Bitwarden, para centralizar los secretos del homelab.',
      tags: ['Vaultwarden', 'Bitwarden', 'Docker'],
      problem:
        'Contraseñas dispersas y dependencia de gestores en la nube de terceros.',
      solution:
        'Vaultwarden self-hosted, compatible con clientes Bitwarden: contraseñas y secretos centralizados, accesibles desde cualquier dispositivo y bajo control propio.',
      architecture: [
        'Contenedor LXC dedicado al gestor de contraseñas.',
        'Compatibilidad total con apps y extensiones Bitwarden.',
        'Sincronización entre dispositivos con copias de seguridad.',
        'Cifrado de extremo a extremo.',
      ],
      stack: ['Vaultwarden', 'Bitwarden', 'LXC', 'Docker'],
      lessons: [
        'Un gestor self-hosted elimina la dependencia de terceros y mantiene los secretos bajo tu control.',
        'La compatibilidad con Bitwarden hace que la migración de clientes sea inmediata.',
      ],
    },
    {
      title: 'Nginx Proxy Manager',
      description:
        'Proxy inverso con SSL automático (Let\'s Encrypt) para exponer los servicios del homelab por subdominio.',
      tags: ['NPM', 'Proxy', 'SSL'],
      problem:
        'Múltiples servicios HTTP sin un punto de entrada único ni HTTPS automatizado.',
      solution:
        'Nginx Proxy Manager como proxy inverso central: cada servicio con su subdominio y certificado SSL automático.',
      architecture: [
        'Contenedor LXC dedicado como punto de entrada único.',
        'Subdominios por servicio con certificados automáticos.',
        'Reglas de acceso y redirecciones centralizadas.',
        'Integración con los servicios del homelab.',
      ],
      stack: ['Nginx Proxy Manager', "Let's Encrypt", 'Proxy inverso', 'LXC'],
      lessons: [
        'Centralizar el tráfico en un proxy inverso con SSL automático simplifica exponer servicios de forma segura.',
        'Un único punto de entrada facilita el control de accesos y los certificados.',
      ],
    },
  ],
  certifications: [] as Certification[],
} as const

export type Portfolio = typeof portfolio

export const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#skills', label: 'Skills' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#arquitectura', label: 'Arquitectura' },
  { href: '#contacto', label: 'Contacto' },
] as const

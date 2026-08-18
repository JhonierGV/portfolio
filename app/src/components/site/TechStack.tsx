import { useState, type MouseEvent } from 'react'
import { motion, useMotionValue, useTransform } from 'motion/react'
import { FileCode2 } from 'lucide-react'
import { portfolio } from '@/data/portfolio'

interface Tech {
  name: string
  url?: string
  color: string
}

// Colores y enlaces de marca por tecnología (presentación, no contenido)
const STACK_META: Record<string, { color: string; url?: string }> = {
  'Proxmox VE': { color: '#E57000', url: 'https://www.proxmox.com' },
  LXC: { color: '#7FA1C3', url: 'https://linuxcontainers.org' },
  'QEMU/KVM': { color: '#FF6600', url: 'https://www.qemu.org' },
  Docker: { color: '#2496ED', url: 'https://www.docker.com' },
  'Docker Compose': { color: '#2496ED', url: 'https://docs.docker.com/compose' },
  pfSense: { color: '#F5C518', url: 'https://www.pfsense.org' },
  WireGuard: { color: '#4FC3F7', url: 'https://www.wireguard.com' },
  Tailscale: { color: '#8B5CF6', url: 'https://tailscale.com' },
  HAProxy: { color: '#9CA3AF', url: 'https://www.haproxy.org' },
  DNS: { color: '#10B981' },
  'Nginx Proxy Manager': { color: '#009639', url: 'https://nginxproxymanager.com' },
  "Let's Encrypt": { color: '#2A6FE8', url: 'https://letsencrypt.org' },
  'Wazuh SIEM': { color: '#1188CC', url: 'https://wazuh.com' },
  Zabbix: { color: '#DF1E0B', url: 'https://www.zabbix.com' },
  Monitoreo: { color: '#22C55E' },
  Linux: { color: '#FCC624', url: 'https://www.linux.org' },
  'Windows Server AD': { color: '#0078D6' },
  Bash: { color: '#4EAA25', url: 'https://www.gnu.org/software/bash' },
  Python: { color: '#3776AB', url: 'https://www.python.org' },
  Git: { color: '#F05032', url: 'https://git-scm.com' },
  Cron: { color: '#F9A825' },
  MikroTik: { color: '#293239', url: 'https://mikrotik.com' },
  Vagrant: { color: '#1563FF', url: 'https://www.vagrantup.com' },
  VMware: { color: '#607078', url: 'https://www.vmware.com' },
  Hetzner: { color: '#D50C2E', url: 'https://www.hetzner.com' },
  'Oracle Cloud': { color: '#F80000', url: 'https://www.oracle.com/cloud' },
  Azure: { color: '#0078D4', url: 'https://azure.microsoft.com' },
  PostgreSQL: { color: '#4169E1', url: 'https://www.postgresql.org' },
  MySQL: { color: '#00758F', url: 'https://www.mysql.com' },
  'SQL Server': { color: '#A91D22', url: 'https://www.microsoft.com/sql-server' },
  SQLite: { color: '#0F80CC', url: 'https://www.sqlite.org' },
}

const FALLBACK_COLOR = '#94A3B8'
const SPOTLIGHT_SIZE = 160

function buildStack(): Tech[] {
  const seen = new Set<string>()
  const stack: Tech[] = []
  for (const group of portfolio.skills) {
    for (const item of group.items) {
      if (seen.has(item)) continue
      seen.add(item)
      const meta = STACK_META[item] ?? { color: FALLBACK_COLOR }
      stack.push({ name: item, color: meta.color, url: meta.url })
    }
  }
  return stack
}

export function TechStack() {
  const [hovered, setHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const lightX = useTransform(x, (v) => v - SPOTLIGHT_SIZE / 2)
  const lightY = useTransform(y, (v) => v - SPOTLIGHT_SIZE / 2)
  const stack = buildStack()

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

  return (
    <div
      className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-card shadow-lg"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Fondo: glow radial + rejilla adaptativa al tema */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"
        aria-hidden
      />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden />

      {hovered && (
        <motion.div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: SPOTLIGHT_SIZE,
            height: SPOTLIGHT_SIZE,
            background: 'var(--primary)',
            opacity: 0.08,
            filter: 'blur(40px)',
            x: lightX,
            y: lightY,
          }}
        />
      )}

      <div className="relative z-10 flex flex-col p-6">
        {/* Barra de ventana estilo terminal/editor */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex gap-1.5" aria-hidden>
              <span className="size-2.5 rounded-full bg-[#FF5F57]" />
              <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="size-2.5 rounded-full bg-[#28C840]" />
            </span>
            <FileCode2 className="ml-2 size-4 text-primary" />
            <span className="font-mono text-xs">techstack</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => {
            const pill = (
              <>
                <span className="size-2 rounded-full" style={{ backgroundColor: tech.color }} aria-hidden />
                {tech.name}
              </>
            )
            const cls =
              'inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-accent'
            return tech.url ? (
              <a key={tech.name} href={tech.url} target="_blank" rel="noopener noreferrer" className={cls}>
                {pill}
              </a>
            ) : (
              <span key={tech.name} className={cls}>
                {pill}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const items = [
  'Proxmox VE',
  'LXC',
  'Docker',
  'Linux',
  'Windows Server',
  'WireGuard',
  'pfSense',
  'HAProxy',
  'Nginx Proxy Manager',
  'Wazuh',
  'Zabbix',
  'KVM',
  'Bash',
  'Python',
  'Ansible',
  'Oracle Cloud',
  'Hetzner',
  'Azure',
  'n8n',
  'PostgreSQL',
]

/**
 * Cinta infinita de tecnologías (estilo Resend): marquee con máscara de
 * degradado en los bordes. Se pausa al pasar el ratón.
 */
export function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-border/60 bg-card/30 py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-primary/70" aria-hidden />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

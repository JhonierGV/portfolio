import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

const node = {
  fill: 'var(--card)',
  stroke: 'var(--border)',
  title: 'var(--foreground)',
  muted: 'var(--muted-foreground)',
  line: 'var(--muted-foreground)',
}

export function ArchitectureDiagram() {
  return (
    <section id="arquitectura" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// arquitectura"
          title="Arquitectura del homelab"
          description="Un único nodo Proxmox con 18 servicios, acceso remoto vía WireGuard saltando el CGNAT del ISP y backups deduplicados."
        />

        <Reveal>
          <div className="overflow-x-auto rounded-xl border border-border bg-card p-4 sm:p-6">
            <svg
              viewBox="0 0 960 660"
              className="h-auto w-full min-w-[720px]"
              role="img"
              aria-label="Diagrama de arquitectura del homelab"
            >
              <defs>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--muted-foreground)" />
                </marker>
              </defs>

              {/* ===== Fila 1: Internet → Oracle Cloud ===== */}
              <g className="diagram-group">
                <rect x="70" y="24" width="150" height="56" rx="12" fill={node.fill} stroke="#f59e0b" strokeWidth="1.5" className="diagram-node" />
                <text x="145" y="48" textAnchor="middle" fontSize="13" fontWeight="600" fill={node.title}>
                  Internet
                </text>
                <text x="145" y="66" textAnchor="middle" fontSize="10" fill={node.muted}>
                  Red pública
                </text>

                <line x1="220" y1="52" x2="396" y2="52" stroke={node.line} strokeWidth="1.5" markerEnd="url(#arrow)" className="diagram-line" />

                <rect x="410" y="24" width="250" height="56" rx="12" fill={node.fill} stroke="#f59e0b" strokeWidth="1.5" className="diagram-node" />
                <text x="535" y="48" textAnchor="middle" fontSize="13" fontWeight="600" fill={node.title}>
                  Oracle Cloud
                </text>
                <text x="535" y="66" textAnchor="middle" fontSize="10" fill={node.muted}>
                  Hub WireGuard · IP pública
                </text>
              </g>

              {/* ===== Túnel WireGuard ===== */}
              <g className="diagram-group">
                <line x1="535" y1="80" x2="535" y2="138" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="6 4" markerEnd="url(#arrow)" className="diagram-line" />
                <text x="548" y="112" fontSize="10" fontFamily="monospace" fill="var(--primary)">
                  Túnel WireGuard (CGNAT)
                </text>

                <rect x="395" y="140" width="280" height="56" rx="12" fill={node.fill} stroke="var(--primary)" strokeWidth="1.5" className="diagram-node" />
                <text x="535" y="164" textAnchor="middle" fontSize="13" fontWeight="600" fill={node.title}>
                  Gateway VPN
                </text>
                <text x="535" y="182" textAnchor="middle" fontSize="10" fill={node.muted}>
                  LXC dedicado · sin privilegios
                </text>
              </g>

              <line x1="535" y1="196" x2="535" y2="236" stroke={node.line} strokeWidth="1.5" markerEnd="url(#arrow)" />

              {/* ===== Nodo Proxmox ===== */}
              <g className="diagram-group">
                <rect x="180" y="240" width="680" height="266" rx="16" fill={node.fill} stroke={node.stroke} strokeWidth="1.5" className="diagram-node" />
                <text x="520" y="268" textAnchor="middle" fontSize="15" fontWeight="700" fill={node.title}>
                  Nodo Proxmox VE
                </text>
                <text x="520" y="288" textAnchor="middle" fontSize="11" fill={node.muted}>
                  14 contenedores LXC · 4 máquinas virtuales · 18 servicios
                </text>

                {/* LXC */}
                <g className="diagram-group">
                  <rect x="210" y="304" width="300" height="184" rx="12" fill={node.fill} stroke={node.stroke} strokeDasharray="4 3" />
                  <text x="360" y="326" textAnchor="middle" fontSize="11" fontWeight="600" fontFamily="monospace" fill={node.muted}>
                    LXC · SERVICIOS
                  </text>
                  {(() => {
                    const chips = [
                      'DNS · AdGuard',
                      'Proxy · NPM',
                      'Vaultwarden',
                      'Hermes Agent',
                      'SearXNG',
                      'n8n',
                      'WireGuard',
                      'Docker',
                    ]
                    const rows = [340, 376, 412, 448]
                    return chips.map((chip, i) => {
                      const col = i % 2
                      const row = Math.floor(i / 2)
                      const x = col === 0 ? 220 : 365
                      const y = rows[row]
                      return (
                        <g key={chip} className="diagram-node">
                          <rect x={x} y={y} width="135" height="26" rx="6" fill="var(--muted)" stroke={node.stroke} />
                          <text x={x + 67} y={y + 17} textAnchor="middle" fontSize="11" fontFamily="monospace" fill={node.title}>
                            {chip}
                          </text>
                        </g>
                      )
                    })
                  })()}
                </g>

                {/* VMs */}
                <g className="diagram-group">
                  <rect x="525" y="304" width="170" height="118" rx="12" fill={node.fill} stroke={node.stroke} strokeDasharray="4 3" />
                  <text x="610" y="326" textAnchor="middle" fontSize="11" fontWeight="600" fontFamily="monospace" fill={node.muted}>
                    VMS
                  </text>
                  <g className="diagram-node">
                    <rect x="537" y="336" width="146" height="26" rx="6" fill="var(--muted)" stroke={node.stroke} />
                    <text x="610" y="353" textAnchor="middle" fontSize="11" fontFamily="monospace" fill={node.title}>
                      PBS · Backups
                    </text>
                  </g>
                  <g className="diagram-node">
                    <rect x="537" y="370" width="146" height="26" rx="6" fill="var(--muted)" stroke={node.stroke} />
                    <text x="610" y="387" textAnchor="middle" fontSize="11" fontFamily="monospace" fill={node.title}>
                      pfSense · Firewall
                    </text>
                  </g>
                  <text x="610" y="410" textAnchor="middle" fontSize="10" fill={node.muted}>
                    2 VMs más (cloud · backup)
                  </text>
                </g>

                {/* Almacenamiento */}
                <g className="diagram-group">
                  <rect x="525" y="434" width="300" height="54" rx="12" fill={node.fill} stroke="#22c55e" strokeWidth="1.2" />
                  <text x="675" y="456" textAnchor="middle" fontSize="11" fontWeight="600" fontFamily="monospace" fill={node.title}>
                    ALMACENAMIENTO
                  </text>
                  <text x="675" y="474" textAnchor="middle" fontSize="10" fill={node.muted}>
                    Local LVM-thin + PBS remoto con deduplicación
                  </text>
                </g>
              </g>

              <line x1="535" y1="506" x2="535" y2="544" stroke={node.line} strokeWidth="1.5" markerEnd="url(#arrow)" />

              {/* ===== LAN ===== */}
              <g className="diagram-group">
                <rect x="180" y="548" width="680" height="76" rx="12" fill={node.fill} stroke={node.stroke} strokeWidth="1.5" className="diagram-node" />
                <text x="520" y="574" textAnchor="middle" fontSize="13" fontWeight="600" fill={node.title}>
                  Red local (LAN)
                </text>
                <text x="520" y="594" textAnchor="middle" fontSize="11" fill={node.muted}>
                  Dispositivos · Servicios · DNS centralizado (AdGuard) · Proxy inverso (NPM)
                </text>
              </g>
            </svg>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-amber-500" aria-hidden /> Red pública
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-primary" aria-hidden /> VPN / túnel
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-500" aria-hidden /> Backups
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-muted-foreground" aria-hidden /> Infraestructura
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { Boxes, Server, ShieldCheck, Wrench } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

const services = [
  {
    icon: Server,
    title: 'Administración de sistemas',
    description: 'Mantenimiento, monitorización y resolución de incidencias en entornos Linux y Windows.',
  },
  {
    icon: Boxes,
    title: 'Virtualización',
    description: 'Proxmox, LXC y Docker: despliegue y gestión de infraestructura virtualizada.',
  },
  {
    icon: ShieldCheck,
    title: 'Redes y seguridad',
    description: 'Firewalls (pfSense), VPN, proxies inversos y monitorización de seguridad (Wazuh, Zabbix).',
  },
  {
    icon: Wrench,
    title: 'Soporte técnico',
    description: 'Atención a usuarios, mantenimiento de equipos y gestión de backups con verificación.',
  },
]

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 border-t border-border/60 bg-card/30 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// servicios"
          title="¿En qué puedo ayudarte?"
          description="Áreas en las que puedo aportar orden, automatización y seguridad."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={i * 70}>
                <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                  <Icon className="size-5 text-primary" />
                  <h3 className="text-base font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

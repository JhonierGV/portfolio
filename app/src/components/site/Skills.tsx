import { Boxes, Layers, Lock, Network, Server, ShieldCheck, type LucideIcon } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { SpotlightCard } from './SpotlightCard'
import { portfolio } from '@/data/portfolio'

const iconMap: Record<string, LucideIcon> = {
  Virtualización: Boxes,
  Contenedores: Layers,
  Redes: Network,
  'Proxy & SSL': ShieldCheck,
  Seguridad: Lock,
  Sistemas: Server,
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border/60 bg-card/30 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// stack"
          title="Stack técnico"
          description="Tecnologías y áreas en las que trabajo a diario en mi homelab y entorno profesional."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.skills.map((skill, i) => {
            const Icon = iconMap[skill.title] ?? Boxes
            return (
              <Reveal key={skill.title} delay={i * 60} className="h-full">
                <SpotlightCard className="h-full rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex h-full flex-col p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-muted text-primary">
                        <Icon className="size-4" />
                      </span>
                      <h3 className="text-base font-semibold text-foreground">{skill.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/30"
                        >
                          <span className="size-1 rounded-full bg-primary/70" aria-hidden />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

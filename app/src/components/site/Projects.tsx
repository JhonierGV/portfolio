import { useState } from 'react'
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { ProjectModal } from './ProjectModal'
import { SpotlightCard } from './SpotlightCard'
import { TiltCard } from './TiltCard'
import { portfolio, type Project } from '@/data/portfolio'

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="proyectos" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// proyectos"
          title="Proyectos"
          description="Selección de servicios y proyectos desplegados en mi homelab Proxmox. Haz clic en una tarjeta para ver el detalle."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(portfolio.projects as readonly Project[]).map((project, i) => (
            <Reveal key={project.title} delay={i * 60} className="h-full">
              <TiltCard>
                <SpotlightCard className="group h-full rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="flex h-full w-full flex-col text-left outline-none"
                  >
                    {project.screenshot ? (
                      <div className="aspect-video w-full overflow-hidden border-b border-border">
                        <img
                          src={project.screenshot}
                          alt={`Captura de ${project.title}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-video w-full items-center justify-center border-b border-border bg-muted/40">
                        <ImageIcon className="size-6 text-muted-foreground/40" aria-hidden />
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
                        <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      </div>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="font-mono text-[11px]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <span className="mt-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-primary">
                        Ver detalles →
                      </span>
                    </div>
                  </button>
                </SpotlightCard>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

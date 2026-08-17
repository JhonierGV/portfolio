import { Check } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { portfolio } from '@/data/portfolio'

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-20 border-t border-border/60 bg-card/30 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// experiencia"
          title="Experiencia"
          description="Trayectoria profesional y práctica, combinando entorno empresarial y proyectos personales de infraestructura."
        />

        <ol className="relative space-y-10 border-l border-border pl-8">
          {portfolio.experience.map((item, i) => (
            <Reveal as="li" key={item.company} delay={i * 80} className="relative">
              <span
                className="absolute -left-[37px] flex size-4 items-center justify-center rounded-full border border-border bg-card"
                aria-hidden
              >
                <span className="size-2 rounded-full bg-primary" />
              </span>

              <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    {'current' in item && item.current ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-500">
                        <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden />
                        Actualidad
                      </span>
                    ) : null}
                    <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                  </div>
                </div>
                <p className="mt-1 text-sm font-medium text-primary">{item.company}</p>

                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
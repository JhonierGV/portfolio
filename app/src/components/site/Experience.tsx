import { useRef } from 'react'
import { Check } from 'lucide-react'
import { motion, useScroll, useSpring } from 'motion/react'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { portfolio } from '@/data/portfolio'

export function Experience() {
  const trackRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 0.8', 'end 0.6'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 })

  return (
    <section id="experiencia" className="scroll-mt-20 border-t border-border/60 bg-card/30 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// experiencia"
          title="Experiencia"
          description="Trayectoria profesional y práctica, combinando entorno empresarial y proyectos personales de infraestructura."
        />

        <ol ref={trackRef} className="relative space-y-10 pl-8">
          {/* Riel base */}
          <div className="absolute top-0 bottom-0 left-0 w-px bg-border" aria-hidden />
          {/* Riel de progreso: se rellena a medida que se hace scroll por la sección */}
          <motion.div
            className="absolute top-0 left-0 w-px origin-top bg-primary"
            style={{ scaleY: progress, height: '100%' }}
            aria-hidden
          />

          {portfolio.experience.map((item, i) => (
            <Reveal as="li" key={`${item.company}-${item.role}-${item.period}`} delay={i * 80} className="relative">
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
                    <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                  </div>
                </div>
                <p className="mt-1 text-sm font-medium text-primary">{item.company}</p>

                <ul className="mt-4 space-y-2">
                  {item.points.map((point, pi) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.35, delay: pi * 0.08 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {point}
                    </motion.li>
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
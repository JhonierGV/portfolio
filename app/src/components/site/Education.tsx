import { GraduationCap } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { portfolio } from '@/data/portfolio'

export function Education() {
  return (
    <section id="formacion" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="// formacion" title="Formación" />

        <div className="grid gap-4 sm:grid-cols-3">
          {portfolio.education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 80}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <GraduationCap className="mb-4 size-6 text-primary" />
                <h3 className="text-base font-semibold text-foreground">{item.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                <p className="mt-auto pt-4 font-mono text-xs text-primary">{item.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
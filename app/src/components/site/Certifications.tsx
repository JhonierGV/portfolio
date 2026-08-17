import { Award } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { portfolio } from '@/data/portfolio'

export function Certifications() {
  if (portfolio.certifications.length === 0) return null

  return (
    <section id="certificaciones" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// certificaciones"
          title="Certificaciones"
          description="Formación oficial y certificaciones."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 60}>
              <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-card p-6">
                <Award className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

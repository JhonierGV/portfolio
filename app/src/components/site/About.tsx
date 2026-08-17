import { Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { portfolio } from '@/data/portfolio'

const facts = [
  { icon: MapPin, label: 'Ubicación', value: 'Toledo · Nambroca, España' },
  { icon: Mail, label: 'Email', value: portfolio.email },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'JhonierGarzonIT', href: portfolio.linkedin },
  { icon: GithubIcon, label: 'GitHub', value: 'jhonier2', href: portfolio.github },
]

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="// sobre-mi" title="Sobre mí" />

        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              {portfolio.summary.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-mono text-sm font-medium uppercase tracking-widest text-primary">
                Datos rápidos
              </h3>
              <ul className="space-y-4">
                {facts.map((fact) => {
                  const Icon = fact.icon
                  const content = (
                    <span className="flex items-center gap-3">
                      <Icon className="size-4 shrink-0 text-muted-foreground" />
                      <span className="text-sm">
                        <span className="block text-xs text-muted-foreground">{fact.label}</span>
                        <span className="font-medium text-foreground">{fact.value}</span>
                      </span>
                    </span>
                  )
                  return (
                    <li key={fact.label}>
                      {fact.href ? (
                        <a href={fact.href} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
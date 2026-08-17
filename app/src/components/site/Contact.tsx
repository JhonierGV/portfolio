import { Download, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { Button } from '@/components/ui/button'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { portfolio } from '@/data/portfolio'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: portfolio.email,
    href: `mailto:${portfolio.email}`,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'in/JhonierGarzonIT',
    href: portfolio.linkedin,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'jhonier2',
    href: portfolio.github,
  },
]

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 border-t border-border/60 bg-card/30 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// contacto"
          title="¿Hablamos?"
          description="Si buscas un administrador de sistemas que aporte orden, automatización y seguridad, escríbeme por cualquiera de estos canales."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, i) => {
            const Icon = channel.icon
            return (
              <Reveal key={channel.label} delay={i * 70}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <Icon className="size-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{channel.label}</p>
                    <p className="mt-1 break-all text-sm text-muted-foreground">{channel.value}</p>
                  </div>
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-10 flex justify-center" delay={120}>
          <Button asChild size="lg">
            <a href={portfolio.cvUrl} download>
              <Download data-icon="inline-start" />
              Descargar CV
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
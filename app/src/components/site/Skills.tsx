import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { TechStack } from './TechStack'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border/60 bg-card/30 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// stack"
          title="Stack técnico"
          description="Tecnologías y áreas en las que trabajo a diario en mi homelab y entorno profesional."
        />

        <Reveal>
          <TechStack />
        </Reveal>
      </div>
    </section>
  )
}

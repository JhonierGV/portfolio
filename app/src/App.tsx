import { Nav } from '@/components/site/Nav'
import { Hero } from '@/components/site/Hero'
import { InteractiveTerminal } from '@/components/site/InteractiveTerminal'
import { Stats } from '@/components/site/Stats'
import { About } from '@/components/site/About'
import { Experience } from '@/components/site/Experience'
import { Education } from '@/components/site/Education'
import { Skills } from '@/components/site/Skills'
import { Projects } from '@/components/site/Projects'
import { ArchitectureDiagram } from '@/components/site/ArchitectureDiagram'
import { Certifications } from '@/components/site/Certifications'
import { Contact } from '@/components/site/Contact'
import { Footer } from '@/components/site/Footer'
import { ScrollProgress } from '@/components/site/ScrollProgress'
import { GrainOverlay } from '@/components/site/GrainOverlay'

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <GrainOverlay />
      {/* Glow oceánico global: da vida al fondo en ambos temas */}
      <div aria-hidden className="page-glow pointer-events-none fixed inset-0 z-0" />

      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <InteractiveTerminal />
          <Stats />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <ArchitectureDiagram />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

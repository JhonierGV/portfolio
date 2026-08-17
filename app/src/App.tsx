import { Nav } from '@/components/site/Nav'
import { Hero } from '@/components/site/Hero'
import { Marquee } from '@/components/site/Marquee'
import { Stats } from '@/components/site/Stats'
import { About } from '@/components/site/About'
import { Experience } from '@/components/site/Experience'
import { Education } from '@/components/site/Education'
import { Skills } from '@/components/site/Skills'
import { Projects } from '@/components/site/Projects'
import { ArchitectureDiagram } from '@/components/site/ArchitectureDiagram'
import { AsciiSection } from '@/components/site/AsciiSection'
import { Certifications } from '@/components/site/Certifications'
import { Contact } from '@/components/site/Contact'
import { Footer } from '@/components/site/Footer'
import { ScrollProgress } from '@/components/site/ScrollProgress'
import { GrainOverlay } from '@/components/site/GrainOverlay'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <GrainOverlay />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <ArchitectureDiagram />
        <AsciiSection />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

import { motion, type Variants } from 'motion/react'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { portfolio } from '@/data/portfolio'
import { OceanicShimmer } from './OceanicShimmer'
import { ShaderBackground } from './ShaderBackground'
import { MagneticButton } from './MagneticButton'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0 z-[1]" aria-hidden />
      <OceanicShimmer />
      <ShaderBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-[2] mx-auto flex max-w-5xl flex-col items-center px-4 pb-24 pt-24 text-center sm:px-6 sm:pt-32"
      >
        <motion.p variants={item} className="font-mono text-sm font-medium uppercase tracking-widest text-primary">
          {portfolio.tagline}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          {portfolio.name}
        </motion.h1>

        <motion.p variants={item} className="mt-4 text-xl font-semibold text-foreground/90 sm:text-2xl">
          {portfolio.role}
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {portfolio.description}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {portfolio.status.map((status) => (
            <span
              key={status.label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
            >
              {status.dot ? (
                <span className="status-dot size-2 rounded-full bg-emerald-400" aria-hidden />
              ) : null}
              {status.label}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton>
            <Button asChild size="lg">
              <a href={portfolio.cvUrl} download>
                <Download data-icon="inline-start" />
                Descargar CV
              </a>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button asChild size="lg" variant="outline">
              <a href="#proyectos">
                Ver proyectos
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  )
}

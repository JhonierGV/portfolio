import { motion, useScroll, useSpring } from 'motion/react'

/** Barra fina de progreso de scroll fija arriba (estilo Linear). */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-primary/70 to-emerald-400/60"
      style={{ scaleX }}
    />
  )
}

import { type MouseEvent, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'

interface TiltCardProps {
  children: ReactNode
  className?: string
}

/**
 * Envoltorio con inclinación 3D sutil que sigue al ratón (perspective tilt).
 * En táctil no hay "mousemove" sostenido, así que simplemente no se activa.
 */
export function TiltCard({ children, className }: TiltCardProps) {
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), { stiffness: 250, damping: 22 })
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), { stiffness: 250, damping: 22 })
  const glareX = useTransform(px, (v) => `${v * 100}%`)
  const glareY = useTransform(py, (v) => `${v * 100}%`)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 900 }}
      className={cn('h-full', className)}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className="relative h-full">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(220px circle at ${glareX} ${glareY}, oklch(1 0 0 / 0.06), transparent 70%)`,
          }}
        />
        {children}
      </motion.div>
    </motion.div>
  )
}

import { useRef, type HTMLAttributes, type MouseEvent as ReactMouseEvent, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** Color del foco radial que sigue al ratón */
  spotColor?: string
}

/**
 * Tarjeta con spotlight estilo Linear/21st.dev:
 * un foco radial suave que sigue la posición del ratón.
 */
export function SpotlightCard({
  children,
  className,
  spotColor = 'oklch(0.585 0.233 277.117 / 0.14)',
  ...props
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn('group relative overflow-hidden', className)}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(380px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${spotColor}, transparent 65%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

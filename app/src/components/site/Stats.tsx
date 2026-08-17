import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import { Reveal } from './Reveal'
import { portfolio } from '@/data/portfolio'

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    const target = parseInt(value, 10) || 0
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setDisplay(String(Math.round(target * eased)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="font-mono text-4xl font-bold text-foreground">
      {display}
    </span>
  )
}

export function Stats() {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden px-4 py-10 sm:grid-cols-4 sm:px-6">
        {portfolio.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90} className="flex flex-col items-center gap-1 text-center">
            <CountUp value={stat.value} />
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

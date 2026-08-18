import { useEffect, useRef, useState } from 'react'

const FPS = 30
const MONO =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'

/**
 * Meme "this is fine" animado en ASCII. Los frames se cargan bajo demanda
 * (chunk separado) solo cuando se monta: ideal para un easter egg.
 */
export function ThisIsFineDog() {
  const [frames, setFrames] = useState<readonly string[] | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const preRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    let cancelled = false
    import('@/data/asciiDogFrames').then((mod) => {
      if (!cancelled) setFrames(mod.FRAMES)
    })
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!frames || frames.length === 0) return
    let raf = 0
    let last = 0
    let frame = 0
    const tick = (time: number) => {
      if (time - last >= 1000 / FPS) {
        last = time
        if (preRef.current) preRef.current.textContent = frames[frame]
        frame = (frame + 1) % frames.length
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [frames])

  useEffect(() => {
    const container = containerRef.current
    const pre = preRef.current
    if (!container || !pre) return

    const measure = () => {
      const available = container.clientWidth
      const naturalW = pre.scrollWidth
      const naturalH = pre.scrollHeight
      const scale = available > 0 && naturalW > available ? available / naturalW : 1
      pre.style.transform = `scale(${scale})`
      pre.style.transformOrigin = 'top left'
      container.style.height = `${Math.round(naturalH * scale)}px`
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(container)
    return () => ro.disconnect()
  }, [frames])

  return (
    <div
      ref={containerRef}
      className="overflow-hidden"
      style={{ width: '100%', position: 'relative', color: 'currentColor' }}
    >
      <pre
        ref={preRef}
        className="font-mono"
        style={{
          fontFamily: MONO,
          fontSize: 12,
          lineHeight: 1.15,
          margin: 0,
          whiteSpace: 'pre',
        }}
      >
        {frames ? frames[0] : 'cargando meme…'}
      </pre>
    </div>
  )
}
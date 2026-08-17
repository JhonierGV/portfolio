import { useEffect, useRef } from 'react'

const CHARS = '@%#*+=-:. '

/**
 * Convierte un vídeo real en arte ASCII en tiempo real:
 * muestrea cada frame en un canvas pequeño, mapea la luminancia a caracteres
 * y los dibuja en el canvas visible. Sin librerías externas.
 */
export function AsciiVideo({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let last = 0
    let off: HTMLCanvasElement | null = null
    let offCtx: CanvasRenderingContext2D | null = null
    const COLS = 104
    let ROWS = 36
    const cellW = 8
    const cellH = 14

    const setup = () => {
      const vw = video.videoWidth || 480
      const vh = video.videoHeight || 270
      ROWS = Math.max(20, Math.floor((COLS * vh) / vw / 2.15))
      canvas.width = COLS * cellW
      canvas.height = ROWS * cellH
      off = document.createElement('canvas')
      off.width = COLS
      off.height = ROWS
      offCtx = off.getContext('2d')
    }

    const draw = (t: number) => {
      if (t - last < 50) {
        raf = requestAnimationFrame(draw)
        return
      }
      last = t
      if (offCtx && ctx && video.readyState >= 2 && !video.ended) {
        offCtx.drawImage(video, 0, 0, COLS, ROWS)
        const data = offCtx.getImageData(0, 0, COLS, ROWS).data
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.font = `${cellH}px ui-monospace, SFMono-Regular, Menlo, monospace`
        for (let y = 0; y < ROWS; y++) {
          for (let x = 0; x < COLS; x++) {
            const i = (y * COLS + x) * 4
            const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
            const idx = Math.min(CHARS.length - 1, Math.floor((lum / 255) * CHARS.length))
            ctx.fillStyle = lum > 150 ? 'var(--foreground)' : 'var(--primary)'
            ctx.fillText(CHARS[idx], x * cellW, y * cellH + cellH - 3)
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay bloqueado por el navegador: reintentar con la primera
            // interacción del usuario para que el ASCII arranque igualmente.
            const retry = () => {
              video.play().catch(() => {})
              cleanup()
            }
            const cleanup = () => {
              document.removeEventListener('click', retry)
              document.removeEventListener('keydown', retry)
              document.removeEventListener('touchstart', retry)
            }
            document.addEventListener('click', retry, { once: true })
            document.addEventListener('keydown', retry, { once: true })
            document.addEventListener('touchstart', retry, { once: true })
          })
        } else {
          video.pause()
        }
      }
    })
    io.observe(canvas)

    video.addEventListener('loadedmetadata', () => {
      setup()
      video.play().catch(() => {})
    })

    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      video.pause()
    }
  }, [])

  return (
    <div className={className}>
      <video ref={videoRef} src={src} muted loop playsInline preload="auto" className="hidden" />
      <canvas ref={canvasRef} className="h-auto w-full" />
    </div>
  )
}

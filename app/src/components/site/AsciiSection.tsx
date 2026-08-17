import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { AsciiVideo } from './AsciiVideo'

/** Sección "terminal": un vídeo real renderizado como arte ASCII en tiempo real. */
export function AsciiSection() {
  return (
    <section id="en-vivo" className="scroll-mt-20 border-t border-border/60 bg-card/30 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// en vivo"
          title="El homelab en ASCII"
          description="Un vídeo renderizado como arte ASCII en tiempo real con canvas — sin librerías externas."
        />

        <Reveal>
          <div className="overflow-hidden rounded-xl border border-border bg-background/60 p-2">
            <div className="rounded-lg border border-border/60 bg-background p-3 font-mono text-[10px] leading-tight">
              <div className="mb-2 flex items-center gap-1.5 border-b border-border/60 pb-2 text-xs text-muted-foreground">
                <span className="size-2 rounded-full bg-red-400/70" aria-hidden />
                <span className="size-2 rounded-full bg-yellow-400/70" aria-hidden />
                <span className="size-2 rounded-full bg-emerald-400/70" aria-hidden />
                <span className="ml-2">homelab@proxmox: ~/ascii</span>
              </div>
              <AsciiVideo src="assets/ascii-homelab.mp4" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

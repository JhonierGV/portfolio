/**
 * Fondo aurora animado (estilo Resend): manchas de color difuminadas
 * que se desplazan lentamente. El movimiento vive en index.css.
 */
export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="aurora-blob aurora-1 -left-24 -top-24 h-[420px] w-[420px] bg-primary/40" />
      <div className="aurora-blob aurora-2 right-[-140px] top-8 h-[380px] w-[380px] bg-emerald-400/20" />
      <div className="aurora-blob aurora-3 bottom-[-180px] left-1/3 h-[440px] w-[440px] bg-sky-400/20" />
    </div>
  )
}

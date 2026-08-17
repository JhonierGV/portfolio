/**
 * Fondo gradiente "Oceanic Shimmer" (estilo 21st.dev Gradient Builder).
 * Paleta Layered Tide: #EAF7FB, #7FC6E6, #2E7CC0, #123A6B + film grain.
 * En modo oscuro usa una paleta oceánica profunda para mantener contraste.
 * Los keyframes de deriva viven en index.css (aurora-1/2/3).
 */
export function OceanicShimmer() {
  return (
    <div aria-hidden className="oceanic-shimmer pointer-events-none absolute inset-0 overflow-hidden">
      <div className="oceanic-layer oceanic-a" />
      <div className="oceanic-layer oceanic-b" />
      <div className="oceanic-layer oceanic-c" />
      <div className="oceanic-grain" />
    </div>
  )
}

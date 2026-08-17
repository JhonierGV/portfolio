import { Heart } from 'lucide-react'
import { portfolio } from '@/data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 text-center sm:px-6">
        <p className="text-sm text-muted-foreground">
          © 2026 {portfolio.name} · Hecho en mi homelab
        </p>
        <p className="flex items-center gap-1 font-mono text-xs text-muted-foreground/70">
          uptime: 100% <Heart className="size-3 fill-primary text-primary" aria-hidden /> con Proxmox
          + Docker
        </p>
      </div>
    </footer>
  )
}
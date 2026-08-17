import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navLinks, portfolio } from '@/data/portfolio'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './ThemeToggle'

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          {portfolio.initials}
          <span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors',
                'hover:bg-muted hover:text-foreground',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={portfolio.cvUrl} download>
              <Download data-icon="inline-start" />
              Descargar CV
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

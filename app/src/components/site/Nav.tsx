import { useEffect, useState } from 'react'
import { navLinks, portfolio } from '@/data/portfolio'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './ThemeToggle'

export function Nav() {
  const [active, setActive] = useState<string>(navLinks[0]?.href ?? '')

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        }
      },
      // Franja centrada en el tercio superior del viewport: la sección que
      // la cruza primero al bajar es la que se marca como activa.
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 },
    )

    for (const section of sections) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          {portfolio.initials}
          <span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'relative rounded-md px-3 py-2 text-sm transition-colors',
                  isActive ? 'text-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                )}
              >
                {link.label}
                {isActive ? (
                  <span
                    className="absolute inset-x-2 -bottom-px h-px bg-primary transition-all duration-300"
                    aria-hidden
                  />
                ) : null}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

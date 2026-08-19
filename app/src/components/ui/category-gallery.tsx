import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ArrowUpRight, Bot, Server, ShieldCheck, type LucideIcon } from 'lucide-react'

export interface CategoryItem {
  id: string
  title: string
  subtitle: string
}

interface CategoryGalleryProps {
  items: readonly CategoryItem[]
  onOpenCategory: (id: string) => void
}

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  sistemas: Server,
  'redes-seguridad': ShieldCheck,
  'auto-ia': Bot,
}

function CategoryGallery({ items, onOpenCategory }: CategoryGalleryProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')

  const handleClick = (id: string) => {
    if (id === activeId) {
      onOpenCategory(id)
    } else {
      setActiveId(id)
    }
  }

  return (
    <div className="mx-auto flex h-[360px] w-full max-w-5xl flex-col gap-2 px-4 sm:h-[440px] sm:flex-row sm:gap-4 sm:px-0">
      {items.map((item) => {
        const isActive = item.id === activeId
        const Icon = CATEGORY_ICONS[item.id] ?? Server

        return (
          <div
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            onClick={() => handleClick(item.id)}
            className={cn(
              'relative cursor-pointer overflow-hidden rounded-2xl border border-foreground/10 bg-card',
              'transition-[flex,filter] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]',
              isActive ? 'flex-[4]' : 'flex-[1]',
              isActive
                ? 'brightness-100'
                : 'brightness-50 hover:brightness-75'
            )}
          >
            {/* Abstract background */}
            <div className="absolute inset-0 h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-muted/70 via-card to-card" />
              <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,var(--foreground)_1px,transparent_0)] [background-size:22px_22px] opacity-[0.06]" />
              <div
                className={cn(
                  'absolute -right-10 -top-10 transition-transform duration-1000 ease-out sm:-right-14 sm:-top-14',
                  isActive ? 'scale-100' : 'scale-110'
                )}
              >
                <Icon
                  strokeWidth={1}
                  className={cn(
                    'size-32 text-foreground/15 transition-colors duration-500 sm:size-48',
                    isActive && 'text-primary/30'
                  )}
                />
              </div>
              {/* Gradient overlay for text readability */}
              <div
                className={cn(
                  'absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent transition-opacity duration-500',
                  isActive ? 'opacity-100' : 'opacity-0'
                )}
              />
            </div>

            {/* Content container */}
            <div className="absolute bottom-0 left-0 right-0 flex h-full flex-col justify-end p-4 sm:p-8">
              {/* Active content */}
              <div
                className={cn(
                  'flex flex-col gap-2 transition-all duration-500',
                  isActive
                    ? 'translate-y-0 opacity-100 delay-200'
                    : 'translate-y-12 opacity-0'
                )}
              >
                <h3 className="text-2xl font-black uppercase leading-none tracking-tight text-foreground sm:text-5xl">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                <div className="mt-2 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground sm:mt-4 sm:text-sm">
                  Ver proyectos <ArrowUpRight className="size-3 sm:size-4" />
                </div>
              </div>

              {/* Inactive content: vertical text (desktop) / id (mobile) */}
              <div
                className={cn(
                  'absolute transition-all duration-500',
                  'bottom-4 left-1/2 -translate-x-1/2 sm:bottom-8',
                  isActive
                    ? 'opacity-0 scale-50'
                    : 'opacity-100 delay-500'
                )}
              >
                <span className="hidden whitespace-nowrap text-xl font-bold uppercase tracking-widest text-foreground [writing-mode:vertical-rl] sm:block">
                  {item.title}
                </span>
                <span className="block text-xs font-bold text-foreground sm:hidden">
                  {item.id}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { CategoryGallery }

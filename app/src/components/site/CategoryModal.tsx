import { useEffect } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import type { Category, Project } from '@/data/portfolio'

interface CategoryModalProps {
  category: Category
  projects: readonly Project[]
  onSelectProject: (project: Project) => void
  onClose: () => void
}

export function CategoryModal({ category, projects, onSelectProject, onClose }: CategoryModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={category.title}
    >
      <div
        className="modal-panel relative my-auto w-full max-w-3xl rounded-2xl border border-border bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Cerrar"
        >
          <X className="size-5" />
        </button>

        <div className="modal-scroll max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
            // proyectos
          </p>
          <h3 className="mt-1 pr-10 text-2xl font-bold tracking-tight text-foreground">
            {category.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{category.subtitle}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {projects.map((project) => (
              <button
                key={project.title}
                type="button"
                onClick={() => onSelectProject(project)}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card text-left outline-none transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 focus-visible:border-primary/40 focus-visible:ring-3 focus-visible:ring-ring/30"
              >
                {project.screenshot ? (
                  <div className="aspect-video w-full overflow-hidden border-b border-border">
                    <img
                      src={project.screenshot}
                      alt={`Captura de ${project.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold text-foreground">{project.title}</h4>
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <span className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-primary">
                    Ver detalles →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
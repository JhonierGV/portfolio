import { useEffect, type ReactNode } from 'react'
import { ArrowUpRight, Lightbulb, Network, Sparkles, Wrench, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { Project } from '@/data/portfolio'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

function Detail({
  icon,
  title,
  children,
}: {
  icon: ReactNode
  title: string
  children: ReactNode
}) {
  return (
    <div className="mt-6">
      <h4 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
        {icon}
        {title}
      </h4>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="modal-panel relative my-auto w-full max-w-2xl rounded-2xl border border-border bg-background shadow-2xl"
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
          <h3 className="pr-10 text-2xl font-bold tracking-tight text-foreground">
            {project.title}
          </h3>

          {project.facts && project.facts.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.facts.map((fact) => (
                <span
                  key={fact}
                  className="rounded-md border border-border bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {fact}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono text-[11px]">
                {tag}
              </Badge>
            ))}
          </div>

          {project.screenshot ? (
            <div className="mt-4 overflow-hidden rounded-xl border border-border">
              <img
                src={project.screenshot}
                alt={`Captura de ${project.title}`}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          ) : null}

          <Detail icon={<Lightbulb className="size-3.5" />} title="Problema">
            <p>{project.problem}</p>
          </Detail>

          <Detail icon={<Wrench className="size-3.5" />} title="Solución">
            <p>{project.solution}</p>
          </Detail>

          <Detail icon={<Network className="size-3.5" />} title="Arquitectura">
            <ul className="space-y-2">
              {project.architecture.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono text-xs leading-relaxed text-primary/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </Detail>

          <Detail icon={<Sparkles className="size-3.5" />} title="Lecciones aprendidas">
            <ul className="space-y-2">
              {project.lessons.map((lesson, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-[9px] size-1 shrink-0 rounded-full bg-primary/60" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </Detail>

          <Detail icon={<Wrench className="size-3.5" />} title="Stack">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="outline" className="font-mono text-[11px]">
                  {tech}
                </Badge>
              ))}
            </div>
          </Detail>

          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Ver en GitHub
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { motion } from 'motion/react'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { portfolio } from '@/data/portfolio'

type Line = { type: 'input' | 'output'; content: ReactNode; key: string }

const COMMANDS = [
  'whoami',
  'skills',
  'exp',
  'proyectos',
  'educacion',
  'neofetch',
  'cv',
  'uptime',
  'clear',
  'help',
] as const

function buildHelp(): ReactNode {
  return (
    <div className="space-y-1">
      <p>Comandos disponibles:</p>
      <ul className="ml-4 list-disc space-y-0.5 text-muted-foreground">
        <li>
          <span className="text-primary">whoami</span> — quién soy
        </li>
        <li>
          <span className="text-primary">skills</span> — stack técnico
        </li>
        <li>
          <span className="text-primary">exp</span> — experiencia laboral
        </li>
        <li>
          <span className="text-primary">proyectos</span> — proyectos destacados
        </li>
        <li>
          <span className="text-primary">educacion</span> — formación académica
        </li>
        <li>
          <span className="text-primary">neofetch</span> — info del sistema
        </li>
        <li>
          <span className="text-primary">cv</span> — descargar mi CV
        </li>
        <li>
          <span className="text-primary">uptime</span> — estado del homelab
        </li>
        <li>
          <span className="text-primary">contacto</span> — cómo hablar conmigo
        </li>
        <li>
          <span className="text-primary">clear</span> — limpiar la terminal
        </li>
      </ul>
    </div>
  )
}

function runCommand(raw: string): ReactNode | null {
  const cmd = raw.trim().toLowerCase()

  if (cmd === 'help' || cmd === '') return buildHelp()

  if (cmd === 'whoami') {
    return (
      <div className="space-y-1">
        <p>
          <span className="text-primary">{portfolio.name}</span> — {portfolio.role}
        </p>
        <p className="text-muted-foreground">{portfolio.description}</p>
        <p className="text-muted-foreground">{portfolio.location}</p>
      </div>
    )
  }

  if (cmd === 'skills' || cmd === 'stack') {
    return (
      <div className="space-y-1">
        {portfolio.skills.map((s) => (
          <p key={s.title}>
            <span className="text-primary">{s.title}:</span> {s.items.join(', ')}
          </p>
        ))}
      </div>
    )
  }

  if (cmd === 'exp' || cmd === 'experiencia') {
    return (
      <div className="space-y-1.5">
        {portfolio.experience.map((e) => (
          <p key={`${e.company}-${e.role}`}>
            <span className="text-primary">{e.role}</span>{' '}
            <span className="text-muted-foreground">— {e.company} ({e.period})</span>
          </p>
        ))}
      </div>
    )
  }

  if (cmd === 'educacion' || cmd === 'edu') {
    return (
      <div className="space-y-1.5">
        {portfolio.education.map((e) => (
          <p key={e.degree}>
            <span className="text-primary">→ {e.degree}</span>{' '}
            <span className="text-muted-foreground">— {e.school} ({e.period})</span>
          </p>
        ))}
      </div>
    )
  }

  if (cmd === 'proyectos' || cmd === 'projects') {
    return (
      <div className="space-y-1">
        {portfolio.projects.slice(0, 6).map((p) => (
          <p key={p.title}>
            <span className="text-primary">→ {p.title}</span>{' '}
            <span className="text-muted-foreground">— {p.tags.join(', ')}</span>
          </p>
        ))}
        <p className="text-muted-foreground">Ver detalle completo en la sección "Proyectos" más abajo.</p>
      </div>
    )
  }

  if (cmd === 'contacto' || cmd === 'contact') {
    return (
      <div className="space-y-1">
        <p>
          <span className="text-primary">email:</span> {portfolio.email}
        </p>
        <p>
          <span className="text-primary">linkedin:</span> {portfolio.linkedin}
        </p>
        <p>
          <span className="text-primary">github:</span> {portfolio.github}
        </p>
      </div>
    )
  }

  if (cmd === 'neofetch') {
    return (
      <div className="space-y-1">
        <p>
          <span className="text-primary">{portfolio.initials.toLowerCase()}@portfolio</span>
        </p>
        <p>
          <span className="text-muted-foreground">OS:</span> Homelab OS (Debian/Proxmox)
        </p>
        <p>
          <span className="text-muted-foreground">Host:</span> Nodo Proxmox VE
        </p>
        <p>
          <span className="text-muted-foreground">Servicios:</span> 18 self-hosted
        </p>
        <p>
          <span className="text-muted-foreground">Uptime:</span> desde 2024
        </p>
        <p>
          <span className="text-muted-foreground">Shell:</span> bash 5.x
        </p>
        <p className="text-muted-foreground">Todo el homelab, documentado y en producción.</p>
      </div>
    )
  }

  if (cmd === 'cv') {
    return (
      <p>
        Descárgalo aquí:{' '}
        <a
          href={portfolio.cvUrl}
          download
          className="text-primary underline underline-offset-4 hover:opacity-80"
        >
          {portfolio.cvUrl}
        </a>
      </p>
    )
  }

  if (cmd === 'uptime') {
    return <p className="text-muted-foreground">Nodo operativo · 18 servicios self-hosted · backups verificados ✓</p>
  }

  if (cmd === 'pwd') {
    return <p className="text-muted-foreground">~/jhonier/portfolio</p>
  }

  if (cmd === 'sudo' || cmd.startsWith('sudo ')) {
    return <p className="text-destructive">Permission denied: el visitante no está en /etc/sudoers 😄</p>
  }

  if (cmd === 'ls') {
    return <p>about.md&nbsp;&nbsp;experience/&nbsp;&nbsp;projects/&nbsp;&nbsp;skills.json&nbsp;&nbsp;contact.txt</p>
  }

  return (
    <p className="text-destructive">
      bash: {cmd}: comando no encontrado — prueba <span className="text-primary">help</span>
    </p>
  )
}

export function InteractiveTerminal() {
  const [lines, setLines] = useState<Line[]>([{ type: 'output', content: buildHelp(), key: 'welcome' }])
  const [value, setValue] = useState('')
  const [historyIdx, setHistoryIdx] = useState<number | null>(null)
  const history = useRef<string[]>([])
  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'nearest' })
  }, [lines])

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const cmd = value
    if (!cmd.trim()) return

    if (cmd.trim().toLowerCase() === 'clear') {
      setLines([])
      setValue('')
      return
    }

    history.current.push(cmd)
    setHistoryIdx(null)

    const result = runCommand(cmd)
    setLines((prev) => [
      ...prev,
      { type: 'input', content: cmd, key: `in-${prev.length}` },
      { type: 'output', content: result, key: `out-${prev.length}` },
    ])
    setValue('')
  }

  return (
    <section className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// interactivo"
          title="Pregúntale a la terminal"
          description="Escribe un comando (o prueba con los sugeridos) para conocerme a mi estilo: por CLI."
        />

        <Reveal>
          <div
            className="overflow-hidden rounded-xl border border-border bg-background shadow-lg shadow-primary/5"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="flex items-center gap-1.5 border-b border-border/60 bg-card/60 px-4 py-2.5 text-xs text-muted-foreground">
              <span className="size-2.5 rounded-full bg-red-400/70" aria-hidden />
              <span className="size-2.5 rounded-full bg-yellow-400/70" aria-hidden />
              <span className="size-2.5 rounded-full bg-emerald-400/70" aria-hidden />
              <span className="ml-2 font-mono">jhonier@portfolio: ~</span>
            </div>

            <div className="max-h-80 overflow-y-auto p-4 font-mono text-sm leading-relaxed">
              {lines.map((line) => (
                <div key={line.key} className={line.type === 'input' ? 'text-foreground' : 'mb-3'}>
                  {line.type === 'input' ? (
                    <span>
                      <span className="text-primary">➜</span> <span className="text-muted-foreground">~$</span>{' '}
                      {line.content}
                    </span>
                  ) : (
                    line.content
                  )}
                </div>
              ))}

              <form onSubmit={submit} className="flex items-center gap-2">
                <span className="text-primary">➜</span>
                <span className="text-muted-foreground">~$</span>
                <input
                  ref={inputRef}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowUp') {
                      e.preventDefault()
                      if (history.current.length === 0) return
                      const nextIdx =
                        historyIdx === null ? history.current.length - 1 : Math.max(0, historyIdx - 1)
                      setHistoryIdx(nextIdx)
                      setValue(history.current[nextIdx] ?? '')
                    }
                  }}
                  autoComplete="off"
                  spellCheck={false}
                  aria-label="Comando de terminal"
                  className="flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground/60"
                  placeholder="escribe 'help' y pulsa enter"
                />
                <motion.span
                  aria-hidden
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="h-4 w-2 shrink-0 bg-primary"
                />
              </form>
              <div ref={endRef} />
            </div>

            <div className="flex flex-wrap gap-2 border-t border-border/60 bg-card/40 px-4 py-3">
              {COMMANDS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    setValue(c)
                    inputRef.current?.focus()
                  }}
                  className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

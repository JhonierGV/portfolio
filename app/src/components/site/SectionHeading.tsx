import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn('mb-12', className)}>
      <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-primary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  )
}
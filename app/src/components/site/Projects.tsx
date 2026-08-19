import { useState } from 'react'
import { SectionHeading } from './SectionHeading'
import { CategoryModal } from './CategoryModal'
import { ProjectModal } from './ProjectModal'
import { CategoryGallery } from '@/components/ui/category-gallery'
import { categories, portfolio, type Category, type Project } from '@/data/portfolio'

export function Projects() {
  const [openCategory, setOpenCategory] = useState<Category | null>(null)
  const [selected, setSelected] = useState<Project | null>(null)

  const categoryProjects = openCategory
    ? (portfolio.projects as readonly Project[]).filter((p) => p.category === openCategory.id)
    : []

  return (
    <section id="proyectos" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="// proyectos"
          title="Proyectos"
          description="Servicios y proyectos desplegados en mi homelab, organizados por área. Elige una categoría para ver."
        />

        <CategoryGallery
          items={categories}
          onOpenCategory={(id) => setOpenCategory(categories.find((c) => c.id === id) ?? null)}
        />
      </div>

      {openCategory && !selected ? (
        <CategoryModal
          category={openCategory}
          projects={categoryProjects}
          onSelectProject={setSelected}
          onClose={() => setOpenCategory(null)}
        />
      ) : null}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

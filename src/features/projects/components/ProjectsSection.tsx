import { useState } from 'react'
import { projectsList, type Project } from '../projects.data'
import ProjectDetailsModal from './ProjectDetailsModal'
import { getTechIcon } from '../tech-icons'
import { ArrowRight, FolderKanban } from 'lucide-react'

const INITIAL_COUNT = 3

/** Category badge color mapping */
const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  Fullstack: {
    bg: 'bg-blue-50 dark:bg-blue-950/40',
    border: 'border-blue-200 dark:border-blue-800',
    text: 'text-blue-700 dark:text-blue-300',
  },
  Backend: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/40',
    border: 'border-emerald-200 dark:border-emerald-800',
    text: 'text-emerald-700 dark:text-emerald-300',
  },
  Frontend: {
    bg: 'bg-pink-50 dark:bg-pink-950/40',
    border: 'border-pink-200 dark:border-pink-800',
    text: 'text-pink-700 dark:text-pink-300',
  },
  Legacy: {
    bg: 'bg-amber-50 dark:bg-amber-950/40',
    border: 'border-amber-200 dark:border-amber-800',
    text: 'text-amber-700 dark:text-amber-300',
  },
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? projectsList : projectsList.slice(0, INITIAL_COUNT)

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="island-shell rise-in rounded-2xl p-6 sm:p-10 md:p-12 mb-8 relative">
      {/* Section Header */}
      <div className="mb-8">
        <p className="island-kicker mb-2">Pekerjaan Saya</p>
        <h2 className="display-title text-3xl font-bold text-(--sea-ink) flex items-center gap-2.5">
          <FolderKanban className="text-(--lagoon-deep)" size={32} />
          Showcase Proyek
        </h2>
        <p className="text-sm text-(--sea-ink-soft) mt-1">
          Klik kartu proyek untuk membaca studi kasus detail (tantangan, solusi, peran, dan dampak).
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, idx) => {
          const colors = categoryColors[project.category] || categoryColors.Fullstack

          return (
            <article
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className="pj-card feature-card rounded-2xl flex flex-col justify-between cursor-pointer relative group overflow-hidden"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Project Image */}
              {project.image && (
                <div className="pj-img-wrap relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="pj-img"
                    loading="lazy"
                  />
                  {/* Category Badge — Absolute overlay top-left */}
                  <span
                    className={`absolute top-3 left-3 z-10 rounded-lg border border-(--line) px-2.5 py-0.5 text-2xs font-bold shadow-[1.5px_1.5px_0px_0px_var(--line)] ${colors.bg} ${colors.text}`}
                  >
                    {project.category}
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-(--sea-ink) mb-2 group-hover:text-(--lagoon-deep) transition">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-(--sea-ink-soft) line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Tech Tags — neobrutalism style like Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="pj-tech-badge"
                      >
                        {getTechIcon(t)}
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="pj-tech-badge pj-tech-badge--more">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View details prompt */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-(--lagoon-deep) pt-2 border-t border-(--line) mt-1 group-hover:translate-x-1 transition duration-200">
                    Baca Studi Kasus
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* View All / Show Less Button */}
      {projectsList.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="pj-view-all-btn inline-flex items-center gap-2 rounded-xl border border-(--line) bg-(--surface) px-6 py-3 text-sm font-bold text-(--sea-ink) shadow-[3px_3px_0px_0px_var(--line)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_var(--line)] hover:bg-(--foam) transition-all duration-180"
          >
            {showAll ? 'Tampilkan Lebih Sedikit' : 'Lihat Semua Proyek'}
            {!showAll && <ArrowRight size={16} />}
          </button>
        </div>
      )}

      {/* Case Study Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

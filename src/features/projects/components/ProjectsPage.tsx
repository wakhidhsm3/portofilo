import { useState, useMemo } from 'react'
import { projectsList, type Project } from '../projects.data'
import { getTechIcon } from '../tech-icons'
import ProjectDetailsModal from './ProjectDetailsModal'
import { ArrowLeft, ArrowRight, FolderKanban, Search, X } from 'lucide-react'
import { useLanguage } from '../../../context/LanguageContext'

const PROJECTS_PER_PAGE = 9

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

export default function ProjectsPage() {
  const { language } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState(1)

  // Translation helpers
  const text = useMemo(() => {
    return {
      title: language === 'id' ? 'Galeri Proyek' : 'Projects Gallery',
      desc: language === 'id' 
        ? 'Telusuri koleksi lengkap sistem web yang telah saya bangun.' 
        : 'Browse through the complete collection of web systems I have built.',
      searchPlaceholder: language === 'id' ? 'Cari proyek atau teknologi...' : 'Search projects or tech...',
      all: language === 'id' ? 'Semua' : 'All',
      prev: language === 'id' ? 'Sebelumnya' : 'Previous',
      next: language === 'id' ? 'Selanjutnya' : 'Next',
      noProjects: language === 'id' ? 'Tidak ada proyek ditemukan.' : 'No projects found.',
      readCase: language === 'id' ? 'Baca Studi Kasus' : 'Read Case Study',
    }
  }, [language])

  // Filter projects based on search query and category
  const filteredProjects = useMemo(() => {
    return projectsList.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
      
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch = 
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tech.some(t => t.toLowerCase().includes(query))
      
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  // Pagination calculations
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
    return filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE)
  }, [filteredProjects, currentPage])

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  const categories = ['All', 'Fullstack', 'Backend', 'Frontend', 'Legacy']

  return (
    <section id="projects-gallery" className="island-shell rise-in rounded-2xl p-6 sm:p-10 md:p-12 mb-8 relative space-y-8 overflow-visible">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
        <div>
          <p className="island-kicker mb-2">{language === 'id' ? 'Portofolio' : 'Portfolio'}</p>
          <h1 className="display-title text-3xl sm:text-4xl font-extrabold text-(--sea-ink) flex items-center gap-2.5">
            <FolderKanban className="text-(--lagoon-deep)" size={36} />
            {text.title}
          </h1>
          <p className="text-sm sm:text-base text-(--sea-ink-soft) mt-1.5 leading-relaxed max-w-xl">
            {text.desc}
          </p>
        </div>
      </div>

      {/* Filter and Search Bar — Sticky */}
      <div className="sticky top-22 sm:top-26 z-30 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 bg-(--surface)/95 dark:bg-zinc-950/90 backdrop-blur-md border border-(--line) rounded-2xl p-3 sm:p-4 shadow-[3px_3px_0px_0px_var(--line)]">
        
        {/* Category Filter Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none snap-x snap-mandatory shrink-0 -mx-1 px-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat
            const label = cat === 'All' ? text.all : cat
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`snap-start whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold border transition duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black border-zinc-950 dark:border-zinc-50 shadow-[2px_2px_0px_0px_var(--line)] -translate-x-px -translate-y-px'
                    : 'bg-white dark:bg-zinc-900 border-(--line) text-(--sea-ink-soft) hover:bg-(--link-bg-hover) hover:text-(--sea-ink) shadow-[1px_1px_0px_0px_var(--line)]'
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder={text.searchPlaceholder}
            className="w-full pl-10 pr-10 py-2 sm:py-2.5 bg-white dark:bg-zinc-900 border border-(--line) rounded-xl shadow-[2px_2px_0px_0px_var(--line)] text-xs sm:text-sm font-semibold text-(--sea-ink) placeholder-zinc-400 focus:outline-none focus:shadow-[3px_3px_0px_0px_var(--line)] transition-all"
          />
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 z-10 pointer-events-none" size={16} />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('')
                setCurrentPage(1)
              }}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-(--sea-ink) transition cursor-pointer z-10"
              aria-label="Clear search"
            >
              <X size={16} className="text-red-500 hover:text-red-600" />
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {currentProjects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project, idx) => {
            const colors = categoryColors[project.category] || categoryColors.Fullstack

            return (
              <article
                key={project.id}
                onClick={() => handleOpenModal(project)}
                className="pj-card feature-card rounded-2xl flex flex-col justify-between cursor-pointer relative group overflow-hidden"
                style={{ animationDelay: `${idx * 50}ms` }}
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
                    {/* Category Badge */}
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
                    <h3 className="text-base font-bold text-(--sea-ink) mb-2 group-hover:text-(--lagoon-deep) transition leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-(--sea-ink-soft) line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* Tech Tags */}
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
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-(--lagoon-deep) pt-2.5 border-t border-(--line)/10 mt-1 group-hover:translate-x-1 transition duration-200">
                      {text.readCase}
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed border-(--line) rounded-4xl bg-(--surface)/30">
          <p className="text-sm sm:text-base font-bold text-(--sea-ink-soft)">
            {text.noProjects}
          </p>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2.5 mt-10 pt-4">
          {/* Previous Page Button */}
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-(--line) bg-(--surface) text-(--sea-ink) disabled:opacity-40 disabled:cursor-not-allowed hover:bg-(--foam) shadow-[2px_2px_0px_0px_var(--line)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0px_0px_var(--line)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--line)] transition-all cursor-pointer font-bold text-xs"
          >
            <ArrowLeft size={14} />
            {text.prev}
          </button>

          {/* Page numbers */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const isCurrent = page === currentPage
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`size-9 rounded-xl border font-bold text-xs transition duration-150 cursor-pointer ${
                    isCurrent
                      ? 'bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black border-zinc-950 dark:border-zinc-50 shadow-[2px_2px_0px_0px_var(--line)] -translate-x-px -translate-y-px'
                      : 'bg-white dark:bg-zinc-900 border-(--line) text-(--sea-ink-soft) hover:bg-(--link-bg-hover) shadow-[1px_1px_0px_0px_var(--line)]'
                  }`}
                >
                  {page}
                </button>
              )
            })}
          </div>

          {/* Next Page Button */}
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-(--line) bg-(--surface) text-(--sea-ink) disabled:opacity-40 disabled:cursor-not-allowed hover:bg-(--foam) shadow-[2px_2px_0px_0px_var(--line)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0px_0px_var(--line)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--line)] transition-all cursor-pointer font-bold text-xs"
          >
            {text.next}
            <ArrowRight size={14} />
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

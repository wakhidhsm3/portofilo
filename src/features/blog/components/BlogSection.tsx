import { useState } from 'react'
import { articlesList, type Article } from '../blog.data'
import BlogDetailsModal from './BlogDetailsModal'
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react'

const INITIAL_COUNT = 3

const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  Tech: {
    bg: 'bg-sky-50 dark:bg-sky-950/40',
    border: 'border-sky-200 dark:border-sky-800',
    text: 'text-sky-700 dark:text-sky-300',
  },
  Tutorial: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/40',
    border: 'border-emerald-200 dark:border-emerald-800',
    text: 'text-emerald-700 dark:text-emerald-300',
  },
  Database: {
    bg: 'bg-purple-50 dark:bg-purple-950/40',
    border: 'border-purple-200 dark:border-purple-800',
    text: 'text-purple-700 dark:text-purple-300',
  },
  Productivity: {
    bg: 'bg-amber-50 dark:bg-amber-950/40',
    border: 'border-amber-200 dark:border-amber-800',
    text: 'text-amber-700 dark:text-amber-300',
  },
}

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)

  const visibleArticles = showAll ? articlesList : articlesList.slice(0, INITIAL_COUNT)

  const handleOpenModal = (article: Article) => {
    setSelectedArticle(article)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedArticle(null)
  }

  return (
    <section id="blog" className="island-shell rise-in rounded-2xl p-6 sm:p-10 md:p-12 mb-8 relative">
      {/* Section Header */}
      <div className="mb-8">
        <p className="island-kicker mb-2">Artikel & Catatan</p>
        <h2 className="display-title text-3xl font-bold text-(--sea-ink) flex items-center gap-2.5">
          <BookOpen className="text-(--lagoon-deep)" size={32} />
          Catatan & Blog
        </h2>
        <p className="text-sm text-(--sea-ink-soft) mt-1">
          Tulisan seputar tips optimasi database, arsitektur web modern, dan catatan teknis pengembangan aplikasi.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleArticles.map((article, idx) => {
          const colors = categoryColors[article.category] || categoryColors.Tech

          return (
            <article
              key={article.id}
              onClick={() => handleOpenModal(article)}
              className="pj-card feature-card rounded-2xl flex flex-col justify-between cursor-pointer relative group overflow-hidden"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Cover Image */}
              {article.image && (
                <div className="pj-img-wrap relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="pj-img"
                    loading="lazy"
                  />
                  {/* Category Badge — Absolute overlay top-left */}
                  <span
                    className={`absolute top-3 left-3 z-10 rounded-lg border border-(--line) px-2.5 py-0.5 text-2xs font-bold shadow-[1.5px_1.5px_0px_0px_var(--line)] ${colors.bg} ${colors.text}`}
                  >
                    {article.category}
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    {/* Publish Date */}
                    <span className="text-[11px] text-(--sea-ink-soft) font-mono flex items-center gap-1">
                      <Calendar size={12} />
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-(--sea-ink) mb-2 group-hover:text-(--lagoon-deep) transition leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-(--sea-ink-soft) line-clamp-3 leading-relaxed mb-4">
                    {article.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Metadata Row */}
                  <div className="flex items-center justify-between text-2xs font-mono text-(--sea-ink-soft) border-t border-(--line) pt-2 mt-1">
                    <span className="flex items-center gap-1 text-[11px] font-semibold">
                      <Clock size={12} />
                      {article.readTime}
                    </span>

                    {/* Arrow prompt */}
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-(--lagoon-deep) group-hover:translate-x-1 transition duration-200">
                      Baca Selengkapnya
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* Pagination Toggle Button */}
      {articlesList.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="pj-view-all-btn inline-flex items-center gap-2 rounded-xl border border-(--line) bg-(--surface) px-6 py-3 text-sm font-bold text-(--sea-ink) shadow-[3px_3px_0px_0px_var(--line)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_var(--line)] hover:bg-(--foam) transition-all duration-180"
          >
            {showAll ? 'Tampilkan Lebih Sedikit' : 'Lihat Semua Artikel'}
            {!showAll && <ArrowRight size={16} />}
          </button>
        </div>
      )}

      {/* Details Modal */}
      <BlogDetailsModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

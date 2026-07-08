import { useState, useMemo } from 'react'
import { articlesList } from '../blog.data'
import { Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock, Search, X } from 'lucide-react'
import { useLanguage } from '../../../context/LanguageContext'

const ARTICLES_PER_PAGE = 9

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

export default function BlogPage() {
  const { language } = useLanguage()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Translation helpers
  const text = useMemo(() => {
    return {
      title: language === 'id' ? 'Catatan & Blog' : 'Notes & Blog',
      desc: language === 'id' 
        ? 'Tulisan seputar tips optimasi database, arsitektur web modern, dan catatan teknis pengembangan aplikasi.' 
        : 'Articles about database optimization tips, modern web architecture, and technical application development notes.',
      searchPlaceholder: language === 'id' ? 'Cari artikel atau catatan...' : 'Search articles or notes...',
      all: language === 'id' ? 'Semua' : 'All',
      prev: language === 'id' ? 'Sebelumnya' : 'Previous',
      next: language === 'id' ? 'Selanjutnya' : 'Next',
      readMore: language === 'id' ? 'Baca Selengkapnya' : 'Read More',
      noArticles: language === 'id' ? 'Tidak ada artikel ditemukan.' : 'No articles found.',
    }
  }, [language])

  // Filter articles based on search query and category
  const filteredArticles = useMemo(() => {
    return articlesList.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
      
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch = 
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query)
      
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  // Pagination calculations
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE)
  const currentArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
    return filteredArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE)
  }, [filteredArticles, currentPage])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  const categories = ['All', 'Tech', 'Tutorial', 'Database', 'Productivity']

  return (
    <section id="blog-gallery" className="island-shell rise-in rounded-2xl p-6 sm:p-10 md:p-12 mb-8 relative space-y-8 overflow-visible">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
        <div>
          <p className="island-kicker mb-2">{language === 'id' ? 'Artikel & Catatan' : 'Articles & Notes'}</p>
          <h1 className="display-title text-3xl sm:text-4xl font-extrabold text-(--sea-ink) flex items-center gap-2.5">
            <BookOpen className="text-(--lagoon-deep)" size={32} />
            {text.title}
          </h1>
          <p className="text-sm sm:text-base text-(--sea-ink-soft) mt-1.5 max-w-xl leading-relaxed">
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

      {/* Blog Grid */}
      {currentArticles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentArticles.map((article, idx) => {
            const colors = categoryColors[article.category] || categoryColors.Tech

            return (
              <Link
                key={article.id}
                to="/blog/$articleId"
                params={{ articleId: article.id }}
                className="pj-card feature-card rounded-2xl flex flex-col justify-between cursor-pointer relative group overflow-hidden no-underline"
                style={{ animationDelay: `${idx * 50}ms` }}
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
                    {/* Category Badge */}
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
                    <div className="flex items-center justify-between text-2xs font-mono text-(--sea-ink-soft) border-t border-(--line)/10 pt-2.5 mt-1">
                      <span className="flex items-center gap-1 text-[11px] font-semibold">
                        <Clock size={12} />
                        {article.readTime}
                      </span>

                      {/* Arrow prompt */}
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-(--lagoon-deep) group-hover:translate-x-1 transition duration-200">
                        {text.readMore}
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed border-(--line) rounded-4xl bg-(--surface)/30">
          <p className="text-sm sm:text-base font-bold text-(--sea-ink-soft)">
            {text.noArticles}
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
    </section>
  )
}

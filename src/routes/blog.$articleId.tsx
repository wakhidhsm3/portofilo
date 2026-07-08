import { useState, useEffect } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { articlesList } from '../features/blog/blog.data'
import { Calendar, Clock, ArrowLeft, Share2, Copy, Check, BookOpen } from 'lucide-react'

export const Route = createFileRoute('/blog/$articleId')({
  component: BlogDetailRoute,
})

// Category badge colors
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

function BlogDetailRoute() {
  const { articleId } = Route.useParams()
  const article = articlesList.find((a) => a.id === articleId)

  const [shareUrl, setShareUrl] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href)
    }
  }, [articleId]) // Recalculate if route parameter changes

  if (!article) {
    return (
      <main className="page-wrap pb-16 pt-28">
        <div className="island-shell text-center py-16 border-2 border-dashed border-(--line) rounded-4xl bg-(--surface)/30">
          <h2 className="text-xl font-bold text-(--sea-ink) mb-4">Artikel Tidak Ditemukan</h2>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 rounded-xl border border-(--line) bg-(--surface) text-(--sea-ink) px-5 py-2.5 text-sm font-bold shadow-[2px_2px_0px_0px_var(--line)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0px_0px_var(--line)] transition-all no-underline"
          >
            <ArrowLeft size={16} />
            Kembali ke Blog
          </Link>
        </div>
      </main>
    )
  }

  const colors = categoryColors[article.category] || categoryColors.Tech

  // Filter related articles (same category, excluding current article) up to 3 items
  const relatedArticles = articlesList
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  const handleCopyLink = () => {
    if (shareUrl) {
      navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <main className="page-wrap pb-16 pt-24 sm:pt-28 space-y-12">
      {/* Back button */}
      <div>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-xl border border-(--line) bg-(--surface) text-(--sea-ink) px-4 py-2 text-xs sm:text-sm font-bold shadow-[2.5px_2.5px_0px_0px_var(--line)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3.5px_3.5px_0px_0px_var(--line)] transition-all no-underline cursor-pointer"
        >
          <ArrowLeft size={14} />
          Kembali ke Blog
        </Link>
      </div>

      {/* Main Article Container */}
      <article className="island-shell rise-in rounded-2xl p-6 sm:p-10 md:p-12 border border-(--line) bg-white dark:bg-zinc-950/40 shadow-[4px_4px_0px_0px_var(--line)] space-y-8">
        
        {/* Cover Image */}
        {article.image && (
          <div className="rounded-2xl border border-(--line) shadow-[3px_3px_0px_0px_var(--line)] overflow-hidden max-h-[300px] sm:max-h-[400px]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-(--sea-ink-soft) border-b border-(--line)/10 pb-6">
          <span className={`rounded-lg border px-2.5 py-0.5 text-2xs font-bold shadow-[1.5px_1.5px_0px_0px_var(--line)] ${colors.bg} ${colors.border} ${colors.text}`}>
            {article.category}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {article.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {article.readTime}
          </span>
        </div>

        {/* Article Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-(--sea-ink) leading-tight">
          {article.title}
        </h1>

        {/* Article Content Body */}
        <div className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed space-y-5 font-sans whitespace-pre-line">
          {article.content}
        </div>

        {/* Share Buttons Row */}
        <div className="border-t border-(--line)/10 pt-8 mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-sm font-bold text-(--sea-ink) flex items-center gap-1.5 select-none">
            <Share2 size={16} className="text-(--lagoon-deep)" />
            Bagikan Catatan Ini:
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            {/* Copy Link Button */}
            <button
              onClick={handleCopyLink}
              className="px-3 py-2 rounded-xl border border-(--line) bg-(--surface) text-(--sea-ink) shadow-[2px_2px_0px_0px_var(--line)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0px_0px_var(--line)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--line)] transition-all cursor-pointer font-bold text-xs flex items-center gap-1.5 select-none"
            >
              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              {copied ? 'Tautan Disalin!' : 'Salin Tautan'}
            </button>
            
            {/* Share on WhatsApp */}
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + ' - ' + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-(--line) bg-(--surface) hover:bg-emerald-50 dark:hover:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 shadow-[2px_2px_0px_0px_var(--line)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0px_0px_var(--line)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--line)] transition-all no-underline flex items-center justify-center cursor-pointer"
              title="Bagikan ke WhatsApp"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.387 1.968 13.914 1.94 12.01 1.94c-5.435 0-9.858 4.37-9.863 9.8-.001 1.76.476 3.479 1.38 4.996L2.518 21.6l5.129-1.332z" />
              </svg>
            </a>
            
            {/* Share on Telegram */}
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-(--line) bg-(--surface) hover:bg-sky-50 dark:hover:bg-sky-950/20 text-sky-600 dark:text-sky-400 shadow-[2px_2px_0px_0px_var(--line)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0px_0px_var(--line)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_var(--line)] transition-all no-underline flex items-center justify-center cursor-pointer"
              title="Bagikan ke Telegram"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M9.417 15.181l-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.441 1.374-.262 1.73l5.46 1.697 12.671-7.93c.596-.397 1.14-.183.695.215l-10.272 9.21z" />
              </svg>
            </a>
          </div>
        </div>

      </article>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-xl sm:text-2xl font-extrabold text-(--sea-ink) flex items-center gap-2.5 select-none">
            <BookOpen size={24} className="text-(--lagoon-deep)" />
            Artikel Terkait
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((rel, idx) => {
              const relColors = categoryColors[rel.category] || categoryColors.Tech

              return (
                <Link
                  key={rel.id}
                  to="/blog/$articleId"
                  params={{ articleId: rel.id }}
                  className="pj-card feature-card rounded-2xl flex flex-col justify-between cursor-pointer relative group overflow-hidden no-underline"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {/* Related Article Cover Image */}
                  {rel.image && (
                    <div className="pj-img-wrap relative">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="pj-img"
                        loading="lazy"
                      />
                      <span
                        className={`absolute top-3 left-3 z-10 rounded-lg border border-(--line) px-2.5 py-0.5 text-2xs font-bold shadow-[1.5px_1.5px_0px_0px_var(--line)] ${relColors.bg} ${relColors.border} ${relColors.text}`}
                      >
                        {rel.category}
                      </span>
                    </div>
                  )}

                  {/* Related Article Card Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                        <span className="text-[11px] text-(--sea-ink-soft) font-mono flex items-center gap-1">
                          <Calendar size={12} />
                          {rel.date}
                        </span>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-(--sea-ink) mb-2 group-hover:text-(--lagoon-deep) transition leading-snug line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-(--sea-ink-soft) line-clamp-2 leading-relaxed mb-3">
                        {rel.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-2xs font-mono text-(--sea-ink-soft) border-t border-(--line)/10 pt-2.5 mt-1">
                      <span className="flex items-center gap-1 text-[11px] font-semibold">
                        <Clock size={12} />
                        {rel.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </main>
  )
}

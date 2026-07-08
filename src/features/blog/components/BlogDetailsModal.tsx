import { X, Calendar, Clock } from 'lucide-react'
import type { Article } from '../blog.data'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

interface BlogDetailsModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

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

export default function BlogDetailsModal({ article, isOpen, onClose }: BlogDetailsModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen || !article) return null

  const colors = categoryColors[article.category] || categoryColors.Tech

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="pj-modal rise-in relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-(--surface) border border-(--line) shadow-[6px_6px_0px_0px_var(--line)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close article"
          className="absolute top-4 right-4 z-10 p-2 rounded-xl border border-(--line) bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 shadow-[2px_2px_0px_0px_var(--line)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0px_0px_var(--line)] text-white transition-all duration-180"
        >
          <X size={18} />
        </button>

        {/* Article Cover Image */}
        {article.image && (
          <div className="w-full aspect-video overflow-hidden border-b border-(--line) bg-(--surface-strong)">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content Area */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {/* Category Badge — Neobrutalism style */}
            <span
              className={`inline-block rounded-lg border border-(--line) px-3 py-1 text-xs font-bold shadow-[1.5px_1.5px_0px_0px_var(--line)] ${colors.bg} ${colors.text}`}
            >
              {article.category}
            </span>

            {/* Date metadata */}
            <div className="flex items-center gap-1.5 text-xs text-(--sea-ink-soft) font-mono">
              <Calendar size={13} />
              <span>{article.date}</span>
            </div>

            {/* Read Time metadata */}
            <div className="flex items-center gap-1.5 text-xs text-(--sea-ink-soft) font-mono">
              <Clock size={13} />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="display-title text-2xl sm:text-3xl font-extrabold text-(--sea-ink) pr-10 mb-6 leading-tight">
            {article.title}
          </h3>

          {/* Main Article Content */}
          <div className="prose dark:prose-invert max-w-none text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed whitespace-pre-wrap font-sans">
            {article.content}
          </div>

          {/* Bottom Actions */}
          <div className="flex justify-end mt-8 pt-6 border-t border-(--line)">
            <button
              onClick={onClose}
              className="rounded-xl border border-(--line) bg-red-500 dark:bg-red-600 px-6 py-2.5 text-sm font-bold text-white shadow-[2px_2px_0px_0px_var(--line)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0px_0px_var(--line)] hover:bg-red-600 dark:hover:bg-red-500 transition-all duration-180"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

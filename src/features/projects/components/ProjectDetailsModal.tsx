import { X, AlertTriangle, Lightbulb } from 'lucide-react'
import type { Project } from '../projects.data'
import { getTechIcon } from '../tech-icons'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

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

export default function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
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

  if (!isOpen || !project) return null

  const colors = categoryColors[project.category] || categoryColors.Fullstack

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="pj-modal rise-in relative w-full max-w-3xl max-h-dvh sm:max-h-[85vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-(--surface) border border-(--line) shadow-[0_-4px_16px_0px_rgba(0,0,0,0.1)] sm:shadow-[6px_6px_0px_0px_var(--line)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 rounded-xl border border-(--line) bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 shadow-[2px_2px_0px_0px_var(--line)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0px_0px_var(--line)] text-white transition-all duration-180"
        >
          <X size={18} />
        </button>

        {/* Project Image */}
        {project.image && (
          <div className="w-full aspect-video overflow-hidden border-b border-(--line) bg-(--surface-strong)">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Category Badge — Neobrutalism style */}
          <span
            className={`inline-block rounded-lg border border-(--line) px-3 py-1 text-xs font-bold mb-4 shadow-[1.5px_1.5px_0px_0px_var(--line)] ${colors.bg} ${colors.text}`}
          >
            {project.category}
          </span>

          {/* Title */}
          <h3 className="display-title text-2xl sm:text-3xl font-extrabold text-(--sea-ink) pr-10 mb-3">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Stack — neobrutalism badges with icons */}
          <div className="mb-8">
            <h4 className="text-xs font-bold text-(--kicker) uppercase tracking-wider mb-3 font-mono">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="pj-tech-badge"
                >
                  {getTechIcon(t)}
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution — side by side on desktop */}
          <div className="grid gap-5 md:grid-cols-2 border-t border-(--line) pt-6">
            {/* Tantangan / Masalah */}
            <div className="pj-detail-card">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800">
                  <AlertTriangle size={14} className="text-red-500" />
                </div>
                <h4 className="text-xs font-bold text-(--sea-ink) uppercase tracking-wider font-sans">
                  Tantangan / Masalah
                </h4>
              </div>
              <p className="text-sm text-(--sea-ink-soft) leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Solusi Teknis */}
            <div className="pj-detail-card">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                  <Lightbulb size={14} className="text-emerald-500" />
                </div>
                <h4 className="text-xs font-bold text-(--sea-ink) uppercase tracking-wider font-sans">
                  Solusi Teknis
                </h4>
              </div>
              <p className="text-sm text-(--sea-ink-soft) leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Close button at bottom */}
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

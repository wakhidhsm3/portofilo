import { useEffect, useState } from 'react'
import { ArrowRight, Download } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import TerminalAnim from './TerminalAnim'
import { useLanguage } from '../../../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  const roles = ['Fullstack Web Developer', 'Backend Developer']
  const [currentRole, setCurrentRole] = useState(roles[0])
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentRole((prev) => {
          const nextIdx = (roles.indexOf(prev) + 1) % roles.length
          return roles[nextIdx]
        })
        setFade(true)
      }, 300)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="pt-0 pb-6 mb-8">
      {/* Unified Single Card Container */}
      <div className="rise-in border border-(--line) rounded-2xl bg-white dark:bg-zinc-950/40 p-6 sm:p-10 md:p-12 shadow-[4px_4px_0px_0px_var(--line)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          {/* Left Column (Profile & Details) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-zinc-50 dark:bg-zinc-900 text-(--sea-ink) border border-(--line) shadow-[2px_2px_0px_0px_var(--line)] mb-6 w-fit select-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Freelance</span>
              </div>

              {/* Avatar & Name */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative shrink-0">
                  <img
                    src="/logo.png"
                    alt="Wakhid Hasim"
                    className="size-16 sm:size-20 rounded-xl border border-(--line) bg-zinc-50 dark:bg-zinc-900 object-cover shadow-[2px_2px_0px_0px_var(--line)]"
                  />
                  <span className="absolute -top-1.5 -left-1.5 text-xs bg-zinc-50 dark:bg-zinc-900 border border-(--line) px-1.5 py-0.5 rounded shadow-[1px_1px_0px_0px_var(--line)] select-none">🇮🇩</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-2xl sm:text-3xl font-bold text-(--sea-ink) leading-none">Wakhid Hasim</h2>
                    <span className="text-blue-500 flex shrink-0" title="Verified Professional">
                      <svg className="size-5 sm:size-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </span>
                  </div>
                  <p className={`font-mono text-[11px] sm:text-xs text-(--sea-ink-soft) mt-2 font-bold transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    ~/ {currentRole}
                  </p>
                </div>
              </div>

              {/* Grid details */}
              <div className="flex flex-col gap-3 sm:gap-3.5 text-[11px] sm:text-sm font-mono py-5 sm:py-6 border-y border-(--line)/10">
                <div className="flex items-center gap-2">
                  <span className="text-sm select-none">💻</span>
                  <span className="w-20 sm:w-24 inline-block text-(--sea-ink-soft) shrink-0">Experience</span>
                  <span className="text-(--sea-ink-soft)">:</span>
                  <span className="font-bold text-(--sea-ink)">2 Years</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm select-none">🎓</span>
                  <span className="w-20 sm:w-24 inline-block text-(--sea-ink-soft) shrink-0">Education</span>
                  <span className="text-(--sea-ink-soft)">:</span>
                  <span className="font-bold text-(--sea-ink)">S1 Sistem Informasi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm select-none">📍</span>
                  <span className="w-20 sm:w-24 inline-block text-(--sea-ink-soft) shrink-0">Location</span>
                  <span className="text-(--sea-ink-soft)">:</span>
                  <span className="font-bold text-(--sea-ink)">Yogyakarta, ID</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm select-none">📨</span>
                  <span className="w-20 sm:w-24 inline-block text-(--sea-ink-soft) shrink-0">Email</span>
                  <span className="text-(--sea-ink-soft)">:</span>
                  <a href="mailto:dev.wakhid@gmail.com" className="font-bold text-(--sea-ink) hover:underline truncate">
                    dev.wakhid@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-5 sm:mt-6">
              <a
                href="/Wakhid-Hasim-CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 text-(--sea-ink) px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold border border-(--line) shadow-[3px_3px_0px_0px_var(--line)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--line)] transition duration-200 select-none no-underline"
              >
                <span>{t('hero.cvBtn')}</span>
                <Download size={16} />
              </a>
              <Link
                to="/"
                hash="contact"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 text-(--sea-ink) px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold border border-(--line) shadow-[3px_3px_0px_0px_var(--line)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--line)] transition duration-200 select-none no-underline"
              >
                <span>Kontak Saya</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column (Terminal widget) */}
          <div className="lg:col-span-6 self-stretch flex items-stretch">
            <TerminalAnim className="h-full w-full flex-1" />
          </div>
        </div>
      </div>
    </section>
  )
}

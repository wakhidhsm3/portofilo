import { useState, useEffect } from 'react'
import { Link, useRouter } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'
import { useLanguage } from '../context/LanguageContext'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()

  // Close mobile menu on route change
  useEffect(() => {
    const unsub = router.subscribe('onBeforeNavigate', () => {
      setMobileOpen(false)
    })
    return unsub
  }, [router])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navLinks = [
    { to: '/' as const, label: t('nav.home'), exact: true },
    { to: '/about' as const, label: t('nav.about') },
    { to: '/projects' as const, label: t('nav.projects') },
    { to: '/blog' as const, label: t('nav.blog') },
  ]

  return (
    <>
      <header className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] sm:w-[calc(100%-2rem)] max-w-5xl flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-xl border border-(--line) bg-white dark:bg-zinc-950 shadow-[4px_4px_0px_0px_var(--line)]">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-85 transition-opacity no-underline shrink-0"
        >
          <img
            src="/logo.png"
            alt="haz.dev logo"
            className="h-6 w-auto dark:invert rounded"
          />
          <span className="font-mono text-sm font-bold text-(--sea-ink) flex items-center gap-1">
            ~/ haz.dev
          </span>
        </Link>

        {/* Desktop Navigation & Controls */}
        <div className="hidden sm:flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold">
          <nav className="flex items-center gap-3.5 sm:gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={link.exact ? { exact: true } : undefined}
                activeProps={{ className: 'text-(--sea-ink) font-extrabold' }}
                inactiveProps={{ className: 'text-(--sea-ink-soft)' }}
                className="hover:text-(--sea-ink) transition-colors no-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <span className="w-px h-4 bg-(--line) self-center" />

          {/* Language Switcher */}
          <div className="flex items-center select-none leading-none">
            {language === 'id' ? (
              <button
                onClick={() => setLanguage('en')}
                className="hover:scale-115 transition-transform cursor-pointer focus:outline-none text-base filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
                title="Switch to English"
                aria-label="Switch to English"
              >
                🇬🇧
              </button>
            ) : (
              <button
                onClick={() => setLanguage('id')}
                className="hover:scale-115 transition-transform cursor-pointer focus:outline-none text-base filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
                title="Ubah ke Bahasa Indonesia"
                aria-label="Ubah ke Bahasa Indonesia"
              >
                🇮🇩
              </button>
            )}
          </div>

          {/* Divider */}
          <span className="w-px h-4 bg-(--line) self-center" />

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Language Switcher (mobile) */}
          <div className="flex items-center select-none leading-none">
            {language === 'id' ? (
              <button
                onClick={() => setLanguage('en')}
                className="hover:scale-115 transition-transform cursor-pointer focus:outline-none text-base"
                title="Switch to English"
                aria-label="Switch to English"
              >
                🇬🇧
              </button>
            ) : (
              <button
                onClick={() => setLanguage('id')}
                className="hover:scale-115 transition-transform cursor-pointer focus:outline-none text-base"
                title="Ubah ke Bahasa Indonesia"
                aria-label="Ubah ke Bahasa Indonesia"
              >
                🇮🇩
              </button>
            )}
          </div>

          {/* Theme Toggle (mobile) */}
          <ThemeToggle />

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded-lg border border-(--line) bg-(--surface) shadow-[1.5px_1.5px_0px_0px_var(--line)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[2.5px_2.5px_0px_0px_var(--line)] transition-all cursor-pointer"
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Menu Panel */}
          <nav className="absolute top-20 left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] max-w-5xl bg-white dark:bg-zinc-950 border border-(--line) rounded-xl shadow-[4px_4px_0px_0px_var(--line)] p-4 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={link.exact ? { exact: true } : undefined}
                activeProps={{ className: 'bg-(--surface-strong) text-(--sea-ink) font-extrabold' }}
                inactiveProps={{ className: 'text-(--sea-ink-soft)' }}
                className="block px-4 py-3 rounded-lg text-sm font-semibold hover:bg-(--surface-strong) hover:text-(--sea-ink) transition-colors no-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}

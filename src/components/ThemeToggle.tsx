import { useEffect, useState } from 'react'
import { Laptop, Moon, Sun } from 'lucide-react'

type ThemeMode = 'light' | 'dark' | 'auto'

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'auto'
  }

  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark' || stored === 'auto') {
    return stored
  }

  return 'auto'
}

function applyThemeMode(mode: ThemeMode) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const resolved = mode === 'auto' ? (prefersDark ? 'dark' : 'light') : mode

  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(resolved)

  if (mode === 'auto') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', mode)
  }

  document.documentElement.style.colorScheme = resolved
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('auto')

  useEffect(() => {
    const initialMode = getInitialMode()
    setMode(initialMode)
    applyThemeMode(initialMode)
  }, [])

  useEffect(() => {
    if (mode !== 'auto') {
      return
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyThemeMode('auto')

    media.addEventListener('change', onChange)
    return () => {
      media.removeEventListener('change', onChange)
    }
  }, [mode])

  function toggleMode() {
    const nextMode: ThemeMode =
      mode === 'light' ? 'dark' : mode === 'dark' ? 'auto' : 'light'
    setMode(nextMode)
    applyThemeMode(nextMode)
    window.localStorage.setItem('theme', nextMode)
  }

  const label =
    mode === 'auto'
      ? 'Mode: Sistem (Otomatis). Klik untuk mode terang.'
      : mode === 'dark'
        ? 'Mode: Gelap. Klik untuk mode sistem.'
        : 'Mode: Terang. Klik untuk mode gelap.'

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={label}
      title={label}
      className="relative group flex items-center justify-center w-10 h-10 rounded-full text-(--sea-ink-soft) hover:text-(--sea-ink) hover:bg-(--link-bg-hover) transition-all duration-200"
    >
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-black text-[10px] font-semibold py-1 px-2.5 rounded-md shadow-md whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 border border-(--line)">
        {mode === 'auto' ? 'Tema: Sistem' : mode === 'dark' ? 'Tema: Gelap' : 'Tema: Terang'}
      </span>
      {mode === 'auto' && <Laptop size={18} />}
      {mode === 'light' && <Sun size={18} />}
      {mode === 'dark' && <Moon size={18} />}
    </button>
  )
}

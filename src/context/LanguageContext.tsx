import React, { createContext, useContext, useEffect, useState } from 'react'
import i18n from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'

// Define translations resource bundle
const resources = {
  id: {
    translation: {
      'nav.home': 'Beranda',
      'nav.about': 'Tentang',
      'nav.projects': 'Proyek',
      'nav.blog': 'Blog',
      'hero.title': 'Menghidupkan ide-ide Anda melalui software.',
      'hero.desc': 'Spesialis Node.js & React dengan 4+ tahun pengalaman membangun sistem web yang andal, berkinerja tinggi, dan mudah dipelihara — dari rancangan antarmuka hingga arsitektur backend.',
      'hero.aboutBtn': 'Tentang Saya',
      'hero.cvBtn': 'Unduh CV'
    }
  },
  en: {
    translation: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.blog': 'Blog',
      'hero.title': 'Bringing your ideas to life through software.',
      'hero.desc': 'Specializing in Node.js & React with 4+ years of experience building reliable, high-performance, and maintainable web systems — from user interface design to backend architecture.',
      'hero.aboutBtn': 'About Me',
      'hero.cvBtn': 'Download CV'
    }
  }
}

// Initialize i18next
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'id',
      fallbackLng: 'id',
      interpolation: {
        escapeValue: false
      }
    })
}

export type Language = 'id' | 'en'

interface LanguageContextProps {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { t, i18n: i18nInstance } = useTranslation()
  const [language, setLanguageState] = useState<Language>('id')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('lang') as Language
      if (stored === 'id' || stored === 'en') {
        setLanguageState(stored)
        i18nInstance.changeLanguage(stored)
      }
    }
  }, [i18nInstance])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    i18nInstance.changeLanguage(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

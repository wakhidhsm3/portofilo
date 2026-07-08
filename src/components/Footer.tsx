export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-(--line) px-4 py-8 text-(--sea-ink-soft) bg-transparent">
      <div className="page-wrap flex flex-col items-center justify-center gap-1">
        <p className="m-0 text-xs font-semibold text-(--sea-ink-soft) font-mono text-center">
          &copy; {year} Wakhid Hasim. All rights reserved.
        </p>
        <p className="m-0 text-xs text-(--sea-ink-soft) flex items-center justify-center gap-1 font-mono text-center">
          Dibuat dengan <span className="text-red-500 animate-pulse">❤️</span> dari Yogyakarta
        </p>
      </div>
    </footer>
  )
}

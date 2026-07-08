import { ArrowUpRight } from 'lucide-react'

export default function SocialLinks() {
  return (
    <section id="socials" className="rise-in grid grid-cols-1 sm:grid-cols-2 border border-(--line) rounded-2xl bg-white dark:bg-zinc-950/40 overflow-hidden shadow-[4px_4px_0px_0px_var(--line)]">
      {/* LinkedIn Cell */}
      <a
        href="https://www.linkedin.com/in/wakhidhsm3/?skipRedirect=true"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors border-b sm:border-b-0 sm:border-r border-(--line) no-underline"
      >
        <div className="flex items-center gap-4">
          <div className="size-10 shrink-0 flex items-center justify-center rounded-lg bg-[#0077b5] text-white shadow-sm border border-[#0077b5]/10">
            <svg className="size-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-base text-(--sea-ink)">LinkedIn</h3>
            <p className="font-mono text-xs text-(--sea-ink-soft) mt-0.5">@wakhidhsm3</p>
          </div>
        </div>
        <ArrowUpRight size={20} className="text-(--sea-ink-soft) group-hover:text-(--sea-ink) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>

      {/* GitHub Cell */}
      <a
        href="https://github.com/wakhidhsm3"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors no-underline"
      >
        <div className="flex items-center gap-4">
          <div className="size-10 shrink-0 flex items-center justify-center rounded-lg bg-[#24292e] dark:bg-[#1f2328] text-white shadow-sm border border-[#24292e]/10">
            <svg className="size-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-base text-(--sea-ink)">GitHub</h3>
            <p className="font-mono text-xs text-(--sea-ink-soft) mt-0.5">@wakhidhsm3</p>
          </div>
        </div>
        <ArrowUpRight size={20} className="text-(--sea-ink-soft) group-hover:text-(--sea-ink) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </section>
  )
}

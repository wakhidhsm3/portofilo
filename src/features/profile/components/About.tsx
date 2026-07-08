
export default function About() {
  return (
    <section id="about" className="island-shell rise-in rounded-2xl p-6 sm:p-10 md:p-12 mb-8 relative">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        
        {/* Bio Narrative Section */}
        <div className="flex-1 space-y-6">
          <div>
            <p className="island-kicker mb-2">Tentang Saya</p>
            <h2 className="display-title text-3xl sm:text-4xl font-extrabold text-(--sea-ink) leading-tight">
              Membangun Solusi Digital End-to-End.
            </h2>
          </div>
          
          <div className="text-(--sea-ink-soft) space-y-4 text-base sm:text-lg leading-relaxed font-sans">
            <p>
              Saya adalah **Fullstack Web Developer** berbasis di Yogyakarta. Berfokus pada pembuatan aplikasi web yang cepat, bersih, dan mudah dipelihara menggunakan ekosistem **React** dan **Node.js**.
            </p>
            <p>
              Saya terbiasa menangani siklus pengembangan secara penuh: mulai dari mengubah desain menjadi antarmuka yang responsif hingga membangun arsitektur API backend dan optimasi database.
            </p>
          </div>
        </div>

        {/* Terminal Visual Column */}
        <div className="w-full lg:w-auto lg:min-w-[360px] flex flex-col justify-center">
          <div className="w-full rounded-xl border border-(--line) bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 shadow-[3px_3px_0px_0px_var(--line)] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-(--line) bg-zinc-200 dark:bg-zinc-900 select-none shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/90 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/90 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/90 inline-block" />
              </div>
              <div className="text-[10px] font-mono font-bold text-zinc-500">
                profile.json — zsh
              </div>
              <div className="w-10" />
            </div>

            {/* Content */}
            <div className="p-5 font-mono text-xs space-y-1.5 select-text leading-relaxed">
              <div>
                <span className="text-purple-600 dark:text-pink-400 font-semibold">const</span>{' '}
                <span className="text-blue-600 dark:text-emerald-400">dev</span>{' '}
                <span className="text-zinc-800 dark:text-zinc-300">=</span>{' '}
                <span className="text-zinc-800 dark:text-zinc-300">{'{'}</span>
              </div>
              <div className="pl-4">
                <span className="text-sky-600 dark:text-sky-400">nama</span>:{' '}
                <span className="text-amber-600 dark:text-amber-300">"Wakhid Hasim"</span>,
              </div>
              <div className="pl-4">
                <span className="text-sky-600 dark:text-sky-400">peran</span>:{' '}
                <span className="text-amber-600 dark:text-amber-300">"Fullstack"</span>,
              </div>
              <div className="pl-4">
                <span className="text-sky-600 dark:text-sky-400">edukasi</span>:{' '}
                <span className="text-amber-600 dark:text-amber-300">"S1 Sistem Informasi"</span>,
              </div>
              <div className="pl-4">
                <span className="text-sky-600 dark:text-sky-400">fokus</span>:{' '}
                <span className="text-zinc-800 dark:text-zinc-300">[</span>
                <span className="text-amber-600 dark:text-amber-300">"Node.js"</span>,{' '}
                <span className="text-amber-600 dark:text-amber-300">"React"</span>
                <span className="text-zinc-800 dark:text-zinc-300">]</span>
              </div>
              <div>
                <span className="text-zinc-800 dark:text-zinc-300">{'}'}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

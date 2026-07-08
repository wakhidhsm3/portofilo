import { useState } from 'react'
import { Check, Copy, ArrowRight, MapPin, Briefcase } from 'lucide-react'

// Real vector SVGs for brand logos
const WhatsAppIcon = ({ className = 'size-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const TelegramIcon = ({ className = 'size-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.938-1.362 7.081-.169.905-.502 1.208-.824 1.238-.7.064-1.231-.462-1.908-.906-1.06-.694-1.658-1.127-2.688-1.805-1.19-.785-.314-1.216.26-1.812.15-.156 2.751-2.522 2.801-2.735.006-.027.012-.128-.048-.181-.06-.053-.148-.035-.212-.021-.09.02-1.528.97-4.316 2.85-.409.281-.78.419-1.112.412-.366-.008-1.071-.207-1.595-.377-.644-.209-1.157-.32-1.112-.676.024-.185.277-.376.76-.572 2.97-1.293 4.95-2.146 5.94-2.559 2.812-1.171 3.395-1.374 3.776-1.38.084-.002.273.019.394.117.102.083.13.195.14.275.011.082.025.267.014.394z"/>
  </svg>
)

const LinkedInIcon = ({ className = 'size-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

const GitHubIcon = ({ className = 'size-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const GmailIcon = ({ className = 'size-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-1.29 1.454-2.032 2.514-1.237L12 11.215l9.486-7.116C22.548 3.307 24 4.05 24 5.457z"/>
  </svg>
)

export default function ContactForm() {
  const [copied, setCopied] = useState(false)
  const emailAddress = 'dev.wakhid@gmail.com'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Gagal menyalin email:', err)
    }
  }

  return (
    <section id="contact" className="island-shell rise-in rounded-2xl p-6 sm:p-10 md:p-12 mb-8 relative">
      <div className="flex flex-col lg:flex-row gap-10 items-stretch">
        
        {/* Info Column */}
        <div className="flex-1 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <p className="island-kicker mb-2">Hubungi Saya</p>
            <h2 className="display-title text-3xl sm:text-4xl font-extrabold text-(--sea-ink) leading-tight">
              Mari Berkolaborasi & Terhubung! 🚀
            </h2>
            <p className="text-sm sm:text-base text-(--sea-ink-soft) leading-relaxed">
              Punya ide proyek menarik, peluang kerja, atau hanya ingin menyapa dan berdiskusi teknis? Saya sangat terbuka untuk mengobrol. Pilih platform favorit Anda!
            </p>
          </div>

          <div className="space-y-4 border-t border-(--line) pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400">
                <Briefcase size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-(--sea-ink-soft) uppercase tracking-wider font-mono">Status Ketersediaan</p>
                <p className="text-sm font-bold text-(--sea-ink)">🟢 Tersedia untuk Pekerjaan & Kolaborasi</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-(--sea-ink-soft) uppercase tracking-wider font-mono">Lokasi</p>
                <p className="text-sm font-bold text-(--sea-ink)">Yogyakarta, Indonesia (Bisa Kerja Remote / WFA)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Grid Column */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Email Card (Double width) */}
          <div
            className="sm:col-span-2 flex flex-col justify-between p-5 rounded-2xl border border-(--line) bg-(--surface-strong) shadow-[3px_3px_0px_0px_var(--line)]"
          >
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-xl bg-red-100 dark:bg-red-950/50 border border-red-300 dark:border-red-800 text-red-600 dark:text-red-400">
                <GmailIcon className="size-5" />
              </div>
              
              {/* Send email button */}
              <a
                href={`mailto:${emailAddress}`}
                className="group/btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-(--line) bg-(--surface) hover:bg-red-500 hover:text-white dark:hover:bg-red-600 shadow-[1.5px_1.5px_0px_0px_var(--line)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[2.5px_2.5px_0px_0px_var(--line)] text-xs font-bold text-(--sea-ink) transition-all duration-180 whitespace-nowrap"
              >
                Kirim Email
                <ArrowRight size={12} className="-rotate-45" />
              </a>
            </div>
            
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-base text-(--sea-ink)">Alamat Email</h3>
                <p className="text-sm font-mono text-(--sea-ink-soft) mt-1">{emailAddress}</p>
              </div>
              
              {/* Copy action button inside Email card */}
              <button
                onClick={handleCopy}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-(--line) text-xs font-bold font-mono transition-all duration-180 cursor-pointer ${
                  copied 
                    ? 'bg-emerald-500 text-white border-emerald-600 shadow-none' 
                    : 'bg-(--surface) text-(--sea-ink) hover:bg-(--surface-strong) hover:-translate-x-px hover:-translate-y-px hover:shadow-[1.5px_1.5px_0px_0px_var(--line)]'
                }`}
              >
                {copied ? (
                  <>
                    <Check size={14} />
                    <span>Email Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Salin Alamat</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-5 rounded-2xl border border-(--line) bg-(--surface) shadow-[3px_3px_0px_0px_var(--line)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_var(--line)] transition-all duration-180 no-underline"
          >
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-[#25D366]">
                <WhatsAppIcon className="size-5" />
              </div>
              <ArrowRight size={18} className="text-(--sea-ink-soft) group-hover:text-(--sea-ink) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div className="mt-8">
              <h3 className="font-bold text-base text-(--sea-ink) group-hover:text-[#25D366] transition-colors">WhatsApp</h3>
              <p className="text-xs font-mono text-(--sea-ink-soft) mt-1">+62 812-3456-7890 (Dummy)</p>
            </div>
          </a>

          {/* Telegram Card */}
          <a
            href="https://t.me/username_dummy"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-5 rounded-2xl border border-(--line) bg-(--surface-strong) shadow-[3px_3px_0px_0px_var(--line)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_var(--line)] transition-all duration-180 no-underline"
          >
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-950/50 border border-sky-300 dark:border-sky-800 text-[#26A5E4]">
                <TelegramIcon className="size-5" />
              </div>
              <ArrowRight size={18} className="text-(--sea-ink-soft) group-hover:text-(--sea-ink) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div className="mt-8">
              <h3 className="font-bold text-base text-(--sea-ink) group-hover:text-[#26A5E4] transition-colors">Telegram</h3>
              <p className="text-xs font-mono text-(--sea-ink-soft) mt-1">@username_dummy</p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/wakhidhsm3"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-5 rounded-2xl border border-(--line) bg-(--surface) shadow-[3px_3px_0px_0px_var(--line)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_var(--line)] transition-all duration-180 no-underline"
          >
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950/50 border border-blue-300 dark:border-blue-800 text-[#0077b5]">
                <LinkedInIcon className="size-5" />
              </div>
              <ArrowRight size={18} className="text-(--sea-ink-soft) group-hover:text-(--sea-ink) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div className="mt-8">
              <h3 className="font-bold text-base text-(--sea-ink) group-hover:text-[#0077b5] transition-colors">LinkedIn</h3>
              <p className="text-xs font-mono text-(--sea-ink-soft) mt-1">@wakhidhsm3</p>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/wakhidhsm3"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-5 rounded-2xl border border-(--line) bg-(--surface-strong) shadow-[3px_3px_0px_0px_var(--line)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_var(--line)] transition-all duration-180 no-underline"
          >
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-(--line) text-zinc-950 dark:text-white">
                <GitHubIcon className="size-5" />
              </div>
              <ArrowRight size={18} className="text-(--sea-ink-soft) group-hover:text-(--sea-ink) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div className="mt-8">
              <h3 className="font-bold text-base text-(--sea-ink) group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">GitHub</h3>
              <p className="text-xs font-mono text-(--sea-ink-soft) mt-1">@wakhidhsm3</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}

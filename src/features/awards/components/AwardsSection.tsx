import { Award, Trophy, Check } from 'lucide-react'

interface AwardItem {
  title: string;
  organizer: string;
  year: string;
  category: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

const awardsList: AwardItem[] = [
  {
    title: 'Juara 1 Gemasi',
    organizer: 'Gemasi 2023',
    year: '2023',
    category: 'Aplikasi Sistem Informasi',
  },
]

const certificationsList: CertificationItem[] = [
  {
    name: 'Belajar Membuat Aplikasi Back-End dengan Node.js',
    issuer: 'Dicoding Indonesia',
    date: '2024',
  },
  {
    name: 'Menjadi React Web Developer Terbaik',
    issuer: 'Dicoding Indonesia',
    date: '2024',
  },
  {
    name: 'JavaScript (Intermediate) Certificate',
    issuer: 'HackerRank',
    date: '2023',
  },
  {
    name: 'Relational Database Certification',
    issuer: 'freeCodeCamp',
    date: '2023',
  },
]

// Issuer Logos SVG
const DicodingLogo = ({ className = 'size-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="20" fill="#0c4a6e" stroke="#18181b" strokeWidth="3" />
    <path d="M25 50 C25 35 35 25 50 25 C65 25 75 35 75 50 C75 65 65 75 50 75 Z" fill="none" stroke="#ffffff" strokeWidth="8" />
    <path d="M50 25 V75" stroke="#fbbf24" strokeWidth="8" />
  </svg>
)

const HackerRankLogo = ({ className = 'size-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="20" fill="#2ec866" stroke="#18181b" strokeWidth="3" />
    <path d="M35 30 V70 M65 30 V70 M35 50 H65" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
  </svg>
)

const FreeCodeCampLogo = ({ className = 'size-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="20" fill="#0a0a23" stroke="#18181b" strokeWidth="3" />
    <path d="M50 80 C65 80 75 70 75 55 C75 42 63 35 55 20 C53 35 45 42 41 48 C35 55 30 62 30 68 C30 75 39 80 50 80 Z" fill="#22c55e" />
  </svg>
)

const getIssuerLogo = (issuer: string) => {
  let logo = <Award size={22} />
  let bgClass = 'bg-zinc-100 dark:bg-zinc-800'
  
  if (issuer.includes('Dicoding')) {
    logo = <DicodingLogo className="size-9" />
  } else if (issuer.includes('HackerRank')) {
    logo = <HackerRankLogo className="size-9" />
  } else if (issuer.includes('freeCodeCamp')) {
    logo = <FreeCodeCampLogo className="size-9" />
  }

  return (
    <div className={`size-14 shrink-0 flex items-center justify-center rounded-2xl border border-(--line) ${bgClass} shadow-[3px_3px_0px_0px_var(--line)]`}>
      {logo}
    </div>
  )
}

export default function AwardsSection() {
  return (
    <section id="awards" className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
      
      {/* Awards Section - Left Column (lg:col-span-5) */}
      <div className="lg:col-span-5 island-shell rise-in rounded-2xl p-6 sm:p-10 flex flex-col">
        <div>
          <div className="mb-6">
            <p className="island-kicker mb-2">Pencapaian Terbaik</p>
            <h2 className="display-title text-3xl font-bold text-(--sea-ink) flex items-center gap-2">
              <Trophy className="text-[#d97706]" size={28} />
              Penghargaan
            </h2>
          </div>

          <div className="space-y-4">
            {awardsList.map((award, idx) => (
              <div
                key={idx}
                className="feature-card rounded-2xl p-5 border border-(--line) bg-(--surface) dark:bg-zinc-950/30 shadow-[3px_3px_0px_0px_var(--line)] flex items-start gap-4 transition hover:-translate-y-0.5"
              >
                <div className="size-12 shrink-0 flex items-center justify-center rounded-xl border border-(--line) bg-amber-100 dark:bg-amber-950/40 text-[#d97706] shadow-[2px_2px_0px_0px_var(--line)]">
                  <Trophy size={20} />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-(--sea-ink) leading-tight">
                      {award.title}
                    </h3>
                    <span className="text-2xs font-bold font-mono px-2 py-0.5 rounded-lg border border-(--line) bg-(--surface-strong) text-(--sea-ink-soft) shadow-[1px_1px_0px_0px_var(--line)]">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-(--sea-ink-soft)">
                    Penyelenggara: {award.organizer}
                  </p>
                  <p className="text-2xs text-(--sea-ink-soft) font-mono">
                    Kategori: {award.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Section - Right Column (lg:col-span-7) */}
      <div className="lg:col-span-7 island-shell rise-in rounded-2xl p-6 sm:p-10 flex flex-col">
        <div>
          <div className="mb-6">
            <p className="island-kicker mb-2">Kredensial Profesional</p>
            <h2 className="display-title text-3xl font-bold text-(--sea-ink) flex items-center gap-2">
              <Award className="text-(--lagoon-deep)" size={28} />
              Sertifikasi
            </h2>
          </div>

          {/* Certifications Vertical List */}
          <div className="space-y-4">
            {certificationsList.map((cert, idx) => (
              <div
              key={idx}
              className="feature-card rounded-2xl p-4 sm:p-5 border border-(--line) bg-(--surface) dark:bg-zinc-950/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 shadow-[3px_3px_0px_0px_var(--line)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[4.5px_4.5px_0px_0px_var(--line)] transition-all duration-180"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  {getIssuerLogo(cert.issuer)}
                  <div className="space-y-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-(--sea-ink) leading-snug line-clamp-2">
                      {cert.name}
                    </h3>
                    <p className="text-xs font-semibold text-(--sea-ink-soft)">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex items-center sm:flex-col sm:items-end shrink-0 gap-2 sm:gap-1.5 sm:text-right pl-11 sm:pl-0">
                  <span className="text-2xs font-bold text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-0.5">
                    <Check size={12} />
                    Verified
                  </span>
                  <span className="text-2xs font-mono text-(--sea-ink-soft)">
                    {cert.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  )
}

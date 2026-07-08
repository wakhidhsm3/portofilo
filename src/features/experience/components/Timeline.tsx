import { workExperiencesList, educationList } from '../experience.data'
import { getTechIcon } from '../../projects/tech-icons'
import { Briefcase, Calendar, GraduationCap } from 'lucide-react'

// Real vector SVGs for company logos
const AmikomLogo = ({ className = 'size-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    {/* Shield base */}
    <path d="M50 5 L85 25 V65 C85 80 50 95 50 95 C50 95 15 80 15 65 V25 Z" fill="#581c87" stroke="#18181b" strokeWidth="3" />
    {/* Gold crown-like wing graphic */}
    <path d="M50 20 L65 45 H35 Z" fill="#fbbf24" />
    <path d="M50 35 L75 55 H25 Z" fill="#f59e0b" />
    <path d="M50 50 L80 70 H20 Z" fill="#d97706" />
    {/* Inner letter 'A' */}
    <text x="50" y="80" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="bold" fontFamily="sans-serif">A</text>
  </svg>
)

const KemenagLogo = ({ className = 'size-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="#15803d" stroke="#18181b" strokeWidth="3" />
    {/* Scales of justice */}
    <path d="M50 20 V75 M30 35 H70 M30 35 L40 55 H20 Z M70 35 L80 55 H60 Z" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
    {/* Star on top */}
    <polygon points="50,12 53,18 60,18 55,22 57,28 50,24 43,28 45,22 40,18 47,18" fill="#fbbf24" />
    {/* Base shield */}
    <path d="M35 70 Q50 82 65 70" stroke="#fbbf24" strokeWidth="4" fill="none" />
  </svg>
)

const AspeksindoLogo = ({ className = 'size-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="#1e40af" stroke="#18181b" strokeWidth="3" />
    {/* Wave lines */}
    <path d="M15 65 Q32.5 55 50 65 T85 65" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M15 75 Q32.5 68 50 75 T85 75" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" fill="none" />
    {/* Anchor shape */}
    <path d="M50 15 V55 M35 40 H65 M30 45 Q50 65 70 45" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" fill="none" />
    <circle cx="50" cy="15" r="4" fill="#ffffff" />
  </svg>
)

const CloudfoamLogo = ({ className = 'size-8' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="#38bdf8" stroke="#18181b" strokeWidth="3" />
    {/* Cloud shape */}
    <path d="M30 65 Q20 65 20 55 Q20 45 32 45 Q35 30 50 30 Q65 30 68 45 Q80 45 80 55 Q80 65 70 65 Z" fill="#ffffff" stroke="#18181b" strokeWidth="3" />
  </svg>
)

// Company logo mapping styled in Neobrutalism
const getCompanyLogo = (company: string) => {
  let logo = <Briefcase size={22} />
  let bgClass = 'bg-zinc-100 dark:bg-zinc-800'
  
  if (company.includes('Amikom') || company.includes('DPK')) {
    logo = <AmikomLogo className="size-9" />
  } else if (company.includes('Cloudfoam')) {
    logo = <CloudfoamLogo className="size-9" />
  } else if (company.includes('Kantor Urusan Agama') || company.includes('KUA')) {
    logo = <KemenagLogo className="size-9" />
  } else if (company.includes('Aspeksindo')) {
    logo = <AspeksindoLogo className="size-9" />
  } else if (company.includes('Kementerian Agama') || company.includes('KEMENAG')) {
    logo = <KemenagLogo className="size-9" />
  }

  return (
    <div className={`size-14 shrink-0 flex items-center justify-center rounded-2xl border border-(--line) ${bgClass} shadow-[3px_3px_0px_0px_var(--line)]`}>
      {logo}
    </div>
  )
}

// Badge color mapping for job types
const typeColors: Record<string, string> = {
  'Full-time': 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  'Part-time': 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
  'Freelance': 'bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800',
  'Magang': 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
}

interface GroupedExperience {
  company: string;
  roles: typeof workExperiencesList;
}

export default function Timeline() {
  // Group experiences by company to show a LinkedIn-style timeline
  const groupedExperiences: GroupedExperience[] = []
  workExperiencesList.forEach((exp) => {
    const existing = groupedExperiences.find((g) => g.company === exp.company)
    if (existing) {
      existing.roles.push(exp)
    } else {
      groupedExperiences.push({
        company: exp.company,
        roles: [exp]
      })
    }
  })

  return (
    <div className="space-y-12">
      {/* Experience Section */}
      <section id="experience" className="island-shell rise-in rounded-4xl p-6 sm:p-10 md:p-12 mb-8 relative">
        <div className="mb-8">
          <p className="island-kicker mb-2">Riwayat Pekerjaan</p>
          <h2 className="display-title text-3xl font-bold text-(--sea-ink) flex items-center gap-2.5">
            <Briefcase className="text-(--lagoon-deep)" size={32} />
            Pengalaman Kerja
          </h2>
          <p className="text-sm text-(--sea-ink-soft) mt-1">
            Jejak karir profesional saya dalam pengembangan perangkat lunak (dikelompokkan per perusahaan).
          </p>
        </div>

        {/* Grouped Experience Cards Grid */}
        <div className="space-y-6">
          {groupedExperiences.map((group, gIdx) => {
            const hasMultipleRoles = group.roles.length > 1

            return (
              <div
                key={gIdx}
                className="feature-card rounded-2xl p-6 border border-(--line) bg-(--surface) dark:bg-zinc-950/30 shadow-[3px_3px_0px_0px_var(--line)] transition-all duration-180"
              >
                {/* Company Header */}
                <div className="flex items-center gap-4 mb-6">
                  {getCompanyLogo(group.company)}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-(--sea-ink) leading-tight">
                      {group.company}
                    </h3>
                    {!hasMultipleRoles && (
                      <div className="flex flex-wrap items-center gap-2 mt-1.5 text-2xs sm:text-xs">
                        <span className="font-semibold text-(--sea-ink) font-mono">
                          {group.roles[0].role}
                        </span>
                        <span className="text-(--sea-ink-soft) opacity-40 select-none">&bull;</span>
                        <span className={`rounded-lg border px-2.5 py-0.5 text-2xs font-bold shadow-[1.5px_1.5px_0px_0px_var(--line)] border-(--line) ${typeColors[group.roles[0].type] || typeColors.Freelance}`}>
                          {group.roles[0].type}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Roles Listing */}
                {hasMultipleRoles ? (
                  /* LinkedIn Style sub-timeline */
                  <div className="relative pl-6 sm:pl-8 border-l-2 border-(--line) ml-6 space-y-8 py-1">
                    {group.roles.map((role, rIdx) => (
                      <div key={rIdx} className="relative">
                        {/* Bullet dot indicator on the vertical line */}
                        <span className="absolute left-[-31px] sm:left-[-39px] top-1.5 flex h-3 w-3 sm:h-3.5 sm:w-3.5 items-center justify-center rounded-full bg-(--foam) border-2 border-(--line) shadow-sm" />

                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-(--sea-ink) leading-tight">
                              {role.role}
                            </h4>
                            <div className="flex flex-wrap items-center gap-2.5 mt-2">
                              {/* Neobrutalist period badge */}
                              <span className="inline-flex items-center gap-1 rounded-lg border border-(--line) bg-(--surface) text-(--sea-ink) px-2.5 py-0.5 text-2xs font-bold shadow-[1.5px_1.5px_0px_0px_var(--line)] font-mono">
                                <Calendar size={12} />
                                {role.period}
                              </span>
                              
                              {/* Neobrutalist type badge */}
                              <span className={`rounded-lg border px-2.5 py-0.5 text-2xs font-bold shadow-[1.5px_1.5px_0px_0px_var(--line)] border-(--line) ${typeColors[role.type] || typeColors.Freelance}`}>
                                {role.type}
                              </span>
                            </div>
                          </div>

                          <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-(--sea-ink-soft) leading-relaxed">
                            {role.description.map((desc, dIdx) => (
                              <li key={dIdx}>{desc}</li>
                            ))}
                          </ul>

                          {/* Tech stack tags styled like the homepage showcase */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {role.techStack.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="pj-tech-badge"
                              >
                                {getTechIcon(tech)}
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Single Role details */
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      {/* Neobrutalist period badge */}
                      <span className="inline-flex items-center gap-1 rounded-lg border border-(--line) bg-(--surface) text-(--sea-ink) px-2.5 py-0.5 text-2xs font-bold shadow-[1.5px_1.5px_0px_0px_var(--line)] font-mono">
                        <Calendar size={12} />
                        {group.roles[0].period}
                      </span>
                    </div>

                    <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-(--sea-ink-soft) leading-relaxed">
                      {group.roles[0].description.map((desc, dIdx) => (
                        <li key={dIdx}>{desc}</li>
                      ))}
                    </ul>

                    {/* Tech stack tags styled like the homepage showcase */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {group.roles[0].techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="pj-tech-badge"
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="island-shell rise-in rounded-4xl p-6 sm:p-10 md:p-12 mb-8 relative">
        <div className="mb-8">
          <p className="island-kicker mb-2">Riwayat Akademis</p>
          <h2 className="display-title text-3xl font-bold text-(--sea-ink) flex items-center gap-2.5">
            <GraduationCap className="text-(--palm)" size={32} />
            Pendidikan
          </h2>
          <p className="text-sm text-(--sea-ink-soft) mt-1">
            Latar belakang akademis dan pendidikan formal saya.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="feature-card rounded-2xl p-6 border border-(--line) bg-(--surface) dark:bg-zinc-950/30 shadow-[3px_3px_0px_0px_var(--line)] transition-all duration-180 flex flex-col justify-between"
            >
              <div>
                {/* Header with Logo */}
                <div className="flex items-center gap-4 mb-4">
                  {getCompanyLogo(edu.institution)}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-(--sea-ink) leading-tight">
                      {edu.major}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-(--sea-ink-soft) mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Badges footer inside card */}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-(--line)/10">
                <span className="inline-flex items-center gap-1 rounded-lg border border-(--line) bg-(--surface) text-(--sea-ink) px-2.5 py-0.5 text-2xs font-bold shadow-[1.5px_1.5px_0px_0px_var(--line)] font-mono">
                  <Calendar size={12} />
                  {edu.period}
                </span>

                <span className="inline-flex items-center rounded-lg border border-(--line) bg-(--chip-bg) px-3 py-1 text-xs font-bold text-(--sea-ink) shadow-[1.5px_1.5px_0px_0px_var(--line)]">
                  IPK: {edu.gpa}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

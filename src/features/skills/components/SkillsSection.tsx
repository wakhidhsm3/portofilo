import { skillCategories } from '../skills.data'
import { Code2, Layout, Terminal, Database } from 'lucide-react'

const skillSlugs: Record<string, string> = {
  'HTML': 'html5',
  'CSS': 'css',
  'SASS': 'sass',
  'Javascript': 'javascript',
  'Typescript': 'typescript',
  'PHP': 'php',
  'Golang': 'go',
  'React JS': 'react',
  'Next Js': 'nextdotjs',
  'Tailwind CSS': 'tailwindcss',
  'Chakra UI': 'chakraui',
  'Node JS': 'nodedotjs',
  'Express Js': 'express',
  'Nest Js': 'nestjs',
  'Laravel': 'laravel',
  'PostgreSQL': 'postgresql',
  'MySQL': 'mysql',
  'Mongo DB': 'mongodb',
}

const brandColors: Record<string, string> = {
  'HTML': '#E34F26',
  'CSS': '#1572B6',
  'SASS': '#CC6699',
  'Javascript': '#F7DF1E',
  'Typescript': '#3178C6',
  'PHP': '#777BB4',
  'Golang': '#00ADD8',
  'React JS': '#61DAFB',
  'Next Js': '#000000',
  'Tailwind CSS': '#06B6D4',
  'Chakra UI': '#319795',
  'Node JS': '#339933',
  'Express Js': '#000000',
  'Nest Js': '#E0234E',
  'Laravel': '#FF2D20',
  'PostgreSQL': '#4169E1',
  'MySQL': '#4479A1',
  'Mongo DB': '#47A248',
}

function getSkillLogo(name: string) {
  const slug = skillSlugs[name] || name.toLowerCase().replace(/\s+/g, '')
  const isInvertible = slug === 'nextdotjs' || slug === 'express'

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={name}
      className={isInvertible ? 'dark:invert' : ''}
      loading="lazy"
    />
  )
}

function getCategoryIcon(title: string) {
  const iconClass = 'size-4'
  const lower = title.toLowerCase()
  if (lower.includes('lang')) return <Code2 className={`${iconClass} text-sky-500`} />
  if (lower.includes('front')) return <Layout className={`${iconClass} text-pink-500`} />
  if (lower.includes('back')) return <Terminal className={`${iconClass} text-emerald-500`} />
  return <Database className={`${iconClass} text-amber-500`} />
}

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-8 mb-8">
      <div className="island-shell rise-in rounded-2xl p-6 sm:p-10">
        {/* Section Header — compact inline */}
        <div className="mb-10">
          <p className="island-kicker mb-3">Teknologi & Tools</p>
          <h2 className="display-title text-3xl font-bold text-(--sea-ink)">
            Tech Stack
          </h2>
          <p className="mt-3 text-sm text-(--sea-ink-soft) max-w-lg leading-relaxed">
            Teknologi dan tools yang saya gunakan untuk membangun aplikasi web modern, dari frontend hingga backend.
          </p>
        </div>

        {/* Category Grid */}
        <div className="ts-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className={`ts-card-v2 stagger-${idx}`}>
              {/* Category Header — inline icon, no ring */}
              <div className="ts-cat-header">
                <div className="ts-cat-icon">
                  {getCategoryIcon(cat.title)}
                </div>
                <h3>{cat.title}</h3>
                <span className="ts-cat-count">
                  {cat.skills.length}
                </span>
              </div>

              {/* Skill Badges — horizontal pill wrap */}
              <div className="ts-badge-wrap">
                {cat.skills.map((skill, sIdx) => {
                  const rawColor = brandColors[skill.name] || '#71717a'
                  const resolvedColor = rawColor === '#000000' ? 'var(--sea-ink)' : rawColor

                  return (
                    <div
                      key={sIdx}
                      className="ts-skill-badge"
                      style={{
                        ['--brand-color' as string]: resolvedColor,
                      }}
                    >
                      {getSkillLogo(skill.name)}
                      <span>{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

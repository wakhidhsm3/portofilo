/**
 * Shared tech icon utility for mapping tech names to SimpleIcons slugs.
 * Used by both ProjectsSection (card badges) and ProjectDetailsModal (modal badges).
 */

const techSlugs: Record<string, string> = {
  'React (TypeScript)': 'react',
  'React JS': 'react',
  'Tailwind CSS': 'tailwindcss',
  'Node.js (Express)': 'nodedotjs',
  'Node.js': 'nodedotjs',
  'PostgreSQL': 'postgresql',
  'Express': 'express',
  'CodeIgniter 3': 'codeigniter',
  'CodeIgniter 3 (REST API)': 'codeigniter',
  'Bootstrap': 'bootstrap',
  'MySQL': 'mysql',
  'JavaScript': 'javascript',
  'SCSS': 'sass',
  'Figma': 'figma',
  'Postman': 'postman',
  'jQuery': 'jquery',
}

/** Names that need dark:invert for visibility in dark mode */
const invertibleSlugs = new Set(['express', 'nextdotjs'])

export function getTechSlug(name: string): string {
  return techSlugs[name] || name.toLowerCase().replace(/[\s.()]+/g, '')
}

export function getTechIcon(name: string) {
  const slug = getTechSlug(name)
  const isInvertible = invertibleSlugs.has(slug)

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={name}
      className={`size-3.5 shrink-0 object-contain select-none ${isInvertible ? 'dark:invert' : ''}`}
      loading="lazy"
    />
  )
}

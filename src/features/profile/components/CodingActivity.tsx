import { Clock, Code, Laptop, Terminal, LayoutGrid } from 'lucide-react'

interface ActivityItem {
  name: string
  percentage: number
  color: string
}

const languages: ActivityItem[] = [
  { name: 'Java', percentage: 28.63, color: '#b07219' },
  { name: 'TypeScript', percentage: 14.66, color: '#3178c6' },
  { name: 'YAML', percentage: 14.02, color: '#cb171e' },
  { name: 'CSS', percentage: 10.26, color: '#563d7c' },
  { name: 'SQL', percentage: 8.8, color: '#e38c00' },
  { name: 'Image (svg)', percentage: 8.43, color: '#ff5a9c' },
  { name: 'Vue', percentage: 5.27, color: '#41b883' },
  { name: 'Astro', percentage: 3.53, color: '#ff5d01' },
  { name: 'Bash', percentage: 3.02, color: '#89e051' },
  { name: 'TOML', percentage: 1.65, color: '#9c8afe' },
  { name: 'Gitignore file', percentage: 0.87, color: '#a2a2a2' },
  { name: 'Markdown', percentage: 0.55, color: '#8f9eac' },
  { name: 'JSON', percentage: 0.23, color: '#ccc' },
]

const tools: ActivityItem[] = [
  { name: 'cmux', percentage: 35.16, color: '#00b4d8' },
  { name: 'Claude Code', percentage: 14.25, color: '#7a79f3' },
  { name: 'IntelliJ IDEA', percentage: 10.83, color: '#fe7a15' },
  { name: 'SparkDesktop', percentage: 9.86, color: '#3a6cf4' },
  { name: 'GitHub', percentage: 5.73, color: '#2eb872' },
  { name: 'ClickUp', percentage: 5.43, color: '#ff577f' },
  { name: 'Slack', percentage: 3.52, color: '#4a154b' },
  { name: 'ChatGPT', percentage: 2.37, color: '#f8d153' },
  { name: 'iTerm2', percentage: 2.03, color: '#5ac8fa' },
  { name: 'DataGrip', percentage: 1.92, color: '#af52de' },
  { name: 'Fork', percentage: 1.7, color: '#34c759' },
  { name: 'Excel', percentage: 1.4, color: '#ff3b30' },
  { name: 'VS Code', percentage: 1.12, color: '#007acc' },
  { name: 'Figma', percentage: 0.85, color: '#a7e34b' },
  { name: 'WebStorm', percentage: 0.55, color: '#5856d6' },
  { name: 'Notion', percentage: 0.47, color: '#ff9500' },
  { name: 'Warp', percentage: 0.44, color: '#5856d6' },
  { name: 'Antigravity IDE', percentage: 0.31, color: '#10b981' },
  { name: 'Postman', percentage: 0.02, color: '#ec4899' },
]

// Generate a 53-week contribution grid of levels (0 to 4)
const contributionGrid = (() => {
  const grid: number[][] = []
  for (let w = 0; w < 53; w++) {
    const week: number[] = []
    for (let d = 0; d < 7; d++) {
      const rand = Math.random()
      let level = 0
      if (rand > 0.88) level = 4
      else if (rand > 0.72) level = 3
      else if (rand > 0.52) level = 2
      else if (rand > 0.28) level = 1
      week.push(level)
    }
    grid.push(week)
  }
  return grid
})()

const bgClasses = [
  'bg-zinc-100 dark:bg-zinc-900/60', // Level 0
  'bg-[#d1e8ff] dark:bg-[#1a4473]', // Level 1
  'bg-[#90c9ff] dark:bg-[#2e6ea9]', // Level 2
  'bg-[#40a0ff] dark:bg-[#4a97db]', // Level 3
  'bg-[#007fff] dark:bg-[#007fff]', // Level 4
]

export default function CodingActivity() {
  return (
    <section
      id="coding-activity"
      className="rise-in border border-(--line) rounded-2xl bg-white dark:bg-zinc-950/40 p-6 sm:p-8 shadow-[4px_4px_0px_0px_var(--line)] mb-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2 border-b border-(--line)/10 pb-4 mb-6">
        <h2 className="text-base sm:text-lg font-bold text-(--sea-ink) flex items-center gap-2 font-sans">
          <Clock size={18} className="text-sky-500" />
          Coding activity
        </h2>
        <span className="font-mono text-xs text-(--sea-ink-soft) font-bold">
          6h 12m &middot; last 7 days
        </span>
      </div>

      {/* GitHub Contributions Section */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-(--sea-ink-soft) flex items-center gap-1.5 font-mono">
            <LayoutGrid size={14} />
            GitHub contributions
          </h3>
          <span className="font-mono text-xs text-(--sea-ink-soft) font-bold">
            3,573 &middot; past year
          </span>
        </div>

        {/* Contribution Map Full Width Wrapper */}
        <div className="w-full space-y-1.5 select-none">
          {/* Months row */}
          <div className="hidden sm:flex justify-between text-[9px] font-mono text-(--sea-ink-soft) pl-[28px] pr-[2px]">
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>

          {/* Grid of days (7 rows x 53 columns) */}
          <div className="flex gap-[4px] w-full items-stretch">
            {/* Days label column (Mon, Wed, Fri) */}
            <div className="hidden sm:flex flex-col justify-between text-[8px] font-mono text-(--sea-ink-soft) w-[24px] pr-1 leading-none py-[3px]">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* The 53 columns */}
            <div className="flex gap-[2px] sm:gap-[3px] flex-1 justify-between">
              {contributionGrid.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[2px] sm:gap-[3px] flex-1">
                  {week.map((level, dIdx) => (
                    <div
                      key={dIdx}
                      className={`aspect-square w-full rounded-[1px] sm:rounded-[1.5px] border border-black/5 dark:border-white/5 transition-colors ${bgClasses[level]}`}
                      title={`Contributions level: ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Less/More Legend */}
        <div className="flex items-center justify-end gap-1.5 text-[9px] font-mono text-(--sea-ink-soft) pr-1 select-none">
          <span>Less</span>
          <span className="size-2.5 rounded-[1.5px] bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5" />
          <span className="size-2.5 rounded-[1.5px] bg-[#d1e8ff] dark:bg-[#1a4473] border border-black/5 dark:border-white/5" />
          <span className="size-2.5 rounded-[1.5px] bg-[#90c9ff] dark:bg-[#2e6ea9] border border-black/5 dark:border-white/5" />
          <span className="size-2.5 rounded-[1.5px] bg-[#40a0ff] dark:bg-[#4a97db] border border-black/5 dark:border-white/5" />
          <span className="size-2.5 rounded-[1.5px] bg-[#007fff] dark:bg-[#007fff] border border-black/5 dark:border-white/5" />
          <span>More</span>
        </div>

        {/* Progress Stack Bar for Commits, Reviews, PRs, Issues */}
        <div className="space-y-2.5 pt-2 border-t border-(--line)/5">
          <div className="h-3 w-full rounded-full overflow-hidden flex border border-(--line) bg-zinc-100 dark:bg-zinc-900 select-none">
            <div className="h-full bg-blue-500" style={{ width: '84%' }} title="Commits: 84%" />
            <div className="h-full bg-purple-500" style={{ width: '10.3%' }} title="Reviews: 10.3%" />
            <div className="h-full bg-pink-500" style={{ width: '5.4%' }} title="Pull requests: 5.4%" />
            <div className="h-full bg-amber-500" style={{ width: '0.3%' }} title="Issues: 0.3%" />
          </div>

          {/* Legend items */}
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[10px] text-(--sea-ink)">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-blue-500" />
              <span>Commits 84%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-purple-500" />
              <span>Reviews 10.3%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-pink-500" />
              <span>Pull requests 5.4%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-amber-500" />
              <span>Issues 0.3%</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-(--line)/10 my-6" />

      {/* Languages Section */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-(--sea-ink-soft) flex items-center gap-1.5 font-mono">
          <Code size={14} />
          Languages
        </h3>

        {/* Progress Stack Bar */}
        <div className="h-3 w-full rounded-full overflow-hidden flex border border-(--line) bg-zinc-100 dark:bg-zinc-900 select-none">
          {languages.map((item, index) => (
            <div
              key={index}
              style={{
                width: `${item.percentage}%`,
                backgroundColor: item.color,
              }}
              title={`${item.name}: ${item.percentage}%`}
              className="h-full shrink-0"
            />
          ))}
        </div>

        {/* Languages Legend Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-2 gap-x-4 pt-2 font-mono text-[11px] text-(--sea-ink)">
          {languages.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-1">
              <div className="flex items-center gap-1.5 truncate">
                <span
                  className="size-2 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="truncate">{item.name}</span>
              </div>
              <span className="text-(--sea-ink-soft) font-semibold shrink-0">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Editors & Tools Section */}
      <div className="space-y-3 mt-8">
        <h3 className="text-xs font-bold text-(--sea-ink-soft) flex items-center gap-1.5 font-mono">
          <Terminal size={14} />
          Editors &amp; Tools
        </h3>

        {/* Progress Stack Bar */}
        <div className="h-3 w-full rounded-full overflow-hidden flex border border-(--line) bg-zinc-100 dark:bg-zinc-900 select-none">
          {tools.map((item, index) => (
            <div
              key={index}
              style={{
                width: `${item.percentage}%`,
                backgroundColor: item.color,
              }}
              title={`${item.name}: ${item.percentage}%`}
              className="h-full shrink-0"
            />
          ))}
        </div>

        {/* Tools Legend Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-2 gap-x-4 pt-2 font-mono text-[11px] text-(--sea-ink)">
          {tools.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-1">
              <div className="flex items-center gap-1.5 truncate">
                <span
                  className="size-2 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="truncate">{item.name}</span>
              </div>
              <span className="text-(--sea-ink-soft) font-semibold shrink-0">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Operating Systems Section */}
      <div className="space-y-3 mt-8">
        <h3 className="text-xs font-bold text-(--sea-ink-soft) flex items-center gap-1.5 font-mono">
          <Laptop size={14} />
          Operating systems
        </h3>

        {/* Progress Stack Bar */}
        <div className="h-3 w-full rounded-full overflow-hidden flex border border-(--line) bg-[#89e051] select-none" />

        {/* OS Legend Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-2 gap-x-4 pt-2 font-mono text-[11px] text-(--sea-ink)">
          <div className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-1.5 truncate">
              <span className="size-2 rounded-full bg-[#89e051] shrink-0" />
              <span className="truncate">Mac</span>
            </div>
            <span className="text-(--sea-ink-soft) font-semibold shrink-0">
              100%
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

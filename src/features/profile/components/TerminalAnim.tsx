import { useEffect, useState } from 'react'

interface HistoryItem {
  type: 'command' | 'output'
  text: string
}

export default function TerminalAnim({ className = '' }: { className?: string }) {
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [typedText, setTypedText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      command: 'whoami',
      output: [
        'Wakhid Hasim — Fullstack Web Developer',
      ]
    },
    {
      command: 'cat ~/current_role.txt',
      output: [
        'Backend Developer at PT. Tries Digital Indonesia',
      ]
    },
    {
      command: 'cat ~/skills.json',
      output: [
        '{',
        '  "frontend": ["React", "TypeScript"],',
        '  "backend": ["Node.js", "Laravel"],',
        '  "database": ["PostgreSQL", "MySQL"]',
        '}'
      ]
    },
  ]


  useEffect(() => {
    let currentStep = 0
    let charIndex = 0
    let isTyping = true
    let timeoutId: NodeJS.Timeout

    const run = () => {
      const step = steps[currentStep]
      if (!step) {
        // Reset and loop
        timeoutId = setTimeout(() => {
          setHistory([])
          currentStep = 0
          charIndex = 0
          isTyping = true
          run()
        }, 10000)
        return
      }

      if (isTyping) {
        if (charIndex <= step.command.length) {
          setTypedText(step.command.slice(0, charIndex))
          charIndex++
          timeoutId = setTimeout(run, 60 + Math.random() * 40)
        } else {
          // Finished typing command
          isTyping = false
          timeoutId = setTimeout(() => {
            // Append command to history
            setHistory((prev) => [...prev, { type: 'command', text: step.command }])
            setTypedText('')
            // Append outputs to history
            step.output.forEach((line) => {
              setHistory((prev) => [...prev, { type: 'output', text: line }])
            })
            // Go to next command typing after delay
            timeoutId = setTimeout(() => {
              currentStep++
              charIndex = 0
              isTyping = true
              run()
            }, 1200)
          }, 350)
        }
      }
    }

    run()
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className={`w-full rounded-xl border border-(--line) bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 shadow-[3px_3px_0px_0px_var(--line)] overflow-hidden flex flex-col ${className}`}>
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-(--line) bg-zinc-200 dark:bg-zinc-900 select-none shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/90 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/90 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/90 inline-block" />
        </div>
        <div className="text-[10px] font-mono font-bold text-zinc-500">
          haz.dev — zsh
        </div>
        <div className="w-10" /> {/* spacer */}
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 space-y-2.5 flex-1 h-[250px] lg:h-auto overflow-y-auto font-mono text-xs leading-relaxed select-text">
        {history.map((item, index) => (
          <div key={index}>
            {item.type === 'command' ? (
              <div className="flex items-center text-zinc-800 dark:text-zinc-100">
                <span className="mr-2 select-none">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">haz.dev</span>
                  <span className="text-zinc-500 dark:text-zinc-400">:~$</span>
                </span>
                <span className="font-semibold">{item.text}</span>
              </div>
            ) : (
              <div className="text-zinc-600 dark:text-zinc-300 pl-4 whitespace-pre-wrap">{item.text}</div>
            )}
          </div>
        ))}
        {/* Current prompt typing */}
        <div className="flex items-center text-zinc-800 dark:text-zinc-100">
          <span className="mr-2 select-none">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">haz.dev</span>
            <span className="text-zinc-500 dark:text-zinc-400">:~$</span>
          </span>
          <span className="font-semibold">{typedText}</span>
          <span className={`inline-block bg-zinc-800 dark:bg-zinc-200 w-1.5 h-3.5 ml-0.5 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'

const LINES = [
  " a UI/UX Designer",
  " a Frontend Web Developer",
  " an Interaction Designer",
  " a designer for digital products and experiences",
  " a Product Designer",
  " a UX Researcher",
  " an Interface Designer",
  " majoring in Interactive Arts & Technology (BSc) at SFU",
  " minoring in Computing Science at SFU",
  " constantly thinking about Human Computer Interaction",
];

const TYPE_MS = 55
const DELETE_MS = 35
const HOLD_MS = 3000

export default function TypingHeadline({ className = '' }) {
  const [lineIndex, setLineIndex] = useState(0)
  const [charCount, setCharCount] = useState(LINES[0].length)
  const [mode, setMode] = useState('hold')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const line = LINES[lineIndex]

    if (mode === 'hold') {
      const timeout = window.setTimeout(() => setMode('delete'), HOLD_MS)
      return () => window.clearTimeout(timeout)
    }

    if (mode === 'delete') {
      if (charCount === 0) {
        setLineIndex((index) => (index + 1) % LINES.length)
        setMode('type')
        return
      }

      const timeout = window.setTimeout(() => setCharCount((count) => count - 1), DELETE_MS)
      return () => window.clearTimeout(timeout)
    }

    if (charCount === line.length) {
      setMode('hold')
      return
    }

    const timeout = window.setTimeout(() => setCharCount((count) => count + 1), TYPE_MS)
    return () => window.clearTimeout(timeout)
  }, [mode, charCount, lineIndex])

  return (
    <p className={className} aria-label={`I'm${LINES[lineIndex]}`}>
      I&rsquo;m{LINES[lineIndex].slice(0, charCount)}
      <span className={mode === 'hold' ? 'animate-caret' : undefined} aria-hidden="true">
        |
      </span>
    </p>
  )
}

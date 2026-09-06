import { useEffect, useState } from 'react'
import SidebarLink from './SidebarLink'

/**
 * items: { id: string, label: string }[]
 * Highlights whichever section (by matching DOM id) is currently in view.
 */
export default function Sidebar({ items, className = '' }) {
  const [activeId, setActiveId] = useState(items[0]?.id)

  useEffect(() => {
    const elements = items.map((item) => document.getElementById(item.id)).filter(Boolean)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (mostVisible) setActiveId(mostVisible.target.id)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [items])

  const handleClick = (event, id) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`flex flex-col gap-5 ${className}`}>
      {items.map((item) => (
        <SidebarLink
          key={item.id}
          href={`#${item.id}`}
          isActive={item.id === activeId}
          onClick={(event) => handleClick(event, item.id)}
        >
          {item.label}
        </SidebarLink>
      ))}
    </nav>
  )
}
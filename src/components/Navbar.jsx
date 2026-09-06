import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.svg'
import NavLink from './NavLink'

const LINKS = [
  { href: '/about', label: 'ABOUT ME' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/contact', label: 'CONTACT ME' },
  { href: '/resume', label: 'RESUME' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative flex w-full items-center justify-between">
      <Link to="/" aria-label="Home" onClick={() => setIsOpen(false)}>
        <img src={logo} alt="Cas Sugihwo" className="h-[28px] w-auto md:h-[36px] lg:h-[46px]" />
      </Link>

      <div className="hidden items-center gap-25 whitespace-nowrap xl:flex xl:gap-100 2xl:gap-180">
        {LINKS.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="flex flex-col gap-[6px] p-[8px] xl:hidden"
      >
        <span className={`h-[2px] w-[28px] bg-white0 transition-transform ${isOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
        <span className={`h-[2px] w-[28px] bg-white0 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`h-[2px] w-[28px] bg-white0 transition-transform ${isOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 left-0 z-10 mt-25 flex flex-col items-start gap-25 rounded-2xl border border-white0/20 bg-black0 p-25 xl:hidden">
          {LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
import { Link, useLocation } from 'react-router-dom'

export default function NavLink({ href, children, onClick, className = '' }) {
  const { pathname } = useLocation()
  const isActive = pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link
      to={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={`font-jakarta text-body tracking-normal font-bold text-white0 text-center transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white0 ${
        isActive ? 'opacity-100' : 'opacity-60'
      } ${className}`}
    >
      {children}
    </Link>
  )
}
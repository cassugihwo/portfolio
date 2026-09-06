import { Link } from 'react-router-dom'

export default function ButtonBig({ to, children, className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full border-[1.5px] border-white0 px-25 py-[15px] transition-colors hover:bg-white0/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white0 md:px-24 md:py-25 ${className}`}
    >
      <span className="font-jakarta text-button font-semibold text-white0">
        {children} →
      </span>
    </Link>
  )
}
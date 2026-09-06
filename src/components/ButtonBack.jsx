import { Link } from 'react-router-dom'

export default function ButtonBack({ to = '/', className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-[30px] border-[1.5px] border-white0 px-[30px] py-[15px] transition-colors hover:bg-white0/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white0 ${className}`}
    >
      <span className="font-jakarta text-[0.8rem] leading-[1.2] font-semibold text-white0">
        ← BACK
      </span>
    </Link>
  )
}
export default function SidebarLink({ href, children, isActive = false, className = '', onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'true' : undefined}
      className={`font-grotesque leading-none my-1.5 text-white0 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white0 ${
        isActive
          ? 'text-[2rem] tracking-[-1.4px] opacity-80'
          : 'text-[1.25rem] tracking-[-1px] opacity-50 hover:opacity-70'
      } ${className}`}
    >
      {children}
    </a>
  )
}
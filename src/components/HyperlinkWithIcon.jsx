import { useState } from 'react'
import arrowExternal from '../assets/icons/arrow-external.svg'
import IconForHyperlinks from './icons/IconForHyperlinks'

export default function HyperlinkWithIcon({
  icon = 'mail',
  href,
  external = false,
  download = false,
  children,
  className = '',
  tooltip_on = false,
  tooltipText = '',
  tooltipTextOnClick = '',
  onClick,
}) {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleEnter = () => setHovered(true)
  const handleLeave = () => {
    setHovered(false)
    setClicked(false)
  }

  const handleClick = (event) => {
    onClick?.(event)
    if (tooltipTextOnClick) setClicked(true)
  }

  const tooltipLabel = clicked && tooltipTextOnClick ? tooltipTextOnClick : tooltipText
  const showTooltip = tooltip_on && hovered && Boolean(tooltipLabel)

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      download={download || undefined}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      onClick={handleClick}
      className={`group relative inline-flex w-fit items-center gap-10 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white0 ${className}`}
    >
      {tooltip_on && (
        <span
          className={`pointer-events-none absolute bottom-full left-1/2 mb-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-purple0 px-15 py-10 font-jakarta text-xs font-semibold text-white0 transition-opacity duration-100 ${
            showTooltip ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {tooltipLabel}
        </span>
      )}
      <IconForHyperlinks
        variant={icon}
        className="size-[18px] shrink-0 transition-opacity group-hover:opacity-70 md:size-[24px] lg:size-[30px]"
      />
      <span className="inline-flex items-center">
        <span className="font-jakarta text-[1.125rem] font-medium leading-[0.8] tracking-[-0.8px] text-white0 underline decoration-from-font [text-underline-position:from-font] transition-opacity group-hover:no-underline group-hover:opacity-70">
          {children}
        </span>
        {external && (
          <img
            src={arrowExternal}
            alt=""
            className="size-[18px] transition-opacity group-hover:opacity-70 md:size-[22px] lg:size-[27px]"
          />
        )}
      </span>
    </a>
  )
}

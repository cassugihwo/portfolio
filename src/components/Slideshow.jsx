import { useEffect, useRef, useState } from 'react'
import chevronLeft from '../assets/icons/chevron-left.svg'
import chevronRight from '../assets/icons/chevron-right.svg'

/**
 * A horizontally sliding image stack. Advances only via the buttons/dots or a
 * manual swipe/scroll — nothing here auto-advances. Built on native scroll
 * snap so touch scrolling on mobile "just works" without custom gesture code.
 */
export default function Slideshow({ images }) {
  const slides = images.filter((image) => image.src)
  const containerRef = useRef(null)
  const slideRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (mostVisible) {
          const index = slideRefs.current.indexOf(mostVisible.target)
          if (index !== -1) setActiveIndex(index)
        }
      },
      { root: container, threshold: 0.6 },
    )

    slideRefs.current.forEach((slide) => slide && observer.observe(slide))
    return () => observer.disconnect()
  }, [slides])

  const goToSlide = (index) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, index))
    slideRefs.current[clamped]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  if (slides.length === 0) return null

  return (
    <div className="flex flex-col gap-15">
      <div className="relative">
        <div
          ref={containerRef}
          className="flex aspect-video w-full snap-x snap-mandatory flex-row overflow-x-auto rounded-img [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, i) => (
            <img
              key={i}
              ref={(el) => (slideRefs.current[i] = el)}
              src={slide.src}
              alt={slide.imgAlt ?? ''}
              className="h-full w-full shrink-0 snap-start object-cover"
            />
          ))}
        </div>

        {slides.length > 1 && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-10">
            <button
              type="button"
              onClick={() => goToSlide(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous slide"
              className="pointer-events-auto flex size-[32px] items-center justify-center rounded-full bg-black0/60 text-white0 transition-opacity disabled:opacity-30"
            >
              <img src={chevronLeft} alt="" className="size-[16px]" />
            </button>
            <button
              type="button"
              onClick={() => goToSlide(activeIndex + 1)}
              disabled={activeIndex === slides.length - 1}
              aria-label="Next slide"
              className="pointer-events-auto flex size-[32px] items-center justify-center rounded-full bg-black0/60 text-white0 transition-opacity disabled:opacity-30"
            >
              <img src={chevronRight} alt="" className="size-[16px]" />
            </button>
          </div>
        )}
      </div>

      {slides.length > 1 && (
        <div className="flex justify-center gap-10">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === activeIndex}
              className={`size-[8px] rounded-full bg-white0 transition-opacity ${
                i === activeIndex ? 'opacity-100' : 'opacity-40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

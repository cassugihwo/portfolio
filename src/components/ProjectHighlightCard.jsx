import { Link } from 'react-router-dom'
import TagList from './TagList'

export default function ProjectHighlightCard({ title, tags, description, image, imageAlt = '', to }) {
  return (
    <Link
      to={to}
      className="group relative flex flex-col items-center gap-50 overflow-hidden rounded-card border-y-[3px] border-white0/45 p-25 md:p-50 lg:flex-row lg:gap-25 lg:p-0"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {image ? (
        <img
          src={image}
          alt={imageAlt}
          className="aspect-[1200/1080] w-full shrink-0 rounded-card object-cover lg:w-[55%]"
        />
      ) : (
        <div className="aspect-[1200/1080] w-full shrink-0 rounded-card bg-[#d4d4d4] lg:w-[55%]" />
      )}
      <div className="flex w-full min-w-0 flex-col items-start gap-50 m-[15px] lg:h-full lg:flex-1 lg:justify-center lg:gap-100 lg:py-[80px]">
        <div className="flex min-w-0 w-full flex-col items-start gap-5">
          <h3 className="font-grotesque text-display font-semibold break-words text-white0">{title}</h3>
          <TagList
            tags={tags}
            className="font-grotesque text-tag font-medium break-words text-white0 opacity-60"
          />
        </div>
        <p className="font-jakarta text-body font-medium break-words text-white0/56 lg:max-h-[160px]">
          {description}
        </p>
      </div>
    </Link>
  )
}
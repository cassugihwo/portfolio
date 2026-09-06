import { Link } from 'react-router-dom'
import TagList from './TagList'

export default function ProjectListCard({ title, tags, image, imageAlt = '', to, disabled = false }) {
  const content = (
    <>
      {!disabled && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.3),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
      {image ? (
        <img
          src={image}
          alt={imageAlt}
          className="aspect-square w-full shrink-0 rounded-img object-cover"
        />
      ) : (
        <div className="aspect-square w-full shrink-0 rounded-img bg-[#d4d4d4]" />
      )}
      <div className="flex w-full flex-col items-start mx-[10px] gap-25">
        <h3 className="font-grotesque text-display-sm font-semibold text-white0">
          {title}
        </h3>
        <TagList
          tags={tags}
          className="font-grotesque text-label font-medium text-white0 opacity-60"
        />
      </div>
    </>
  )

  if (disabled) {
    return (
      <div
        aria-disabled="true"
        className="group relative flex w-full cursor-default flex-col items-start gap-25 md:gap-25"
      >
        {content}
      </div>
    )
  }

  return (
    <Link
      to={to}
      className="group relative flex w-full flex-col items-start gap-25 md:gap-25"
    >
      {content}
    </Link>
  );
}

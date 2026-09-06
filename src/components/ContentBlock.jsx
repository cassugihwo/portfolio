import RichText from './RichText'

/**
 * Renders a single block within a ContentInnerSection. `block.type` selects the
 * treatment; add a new case here to support a new kind of block content.
 */
export default function ContentBlock({ block }) {
  switch (block.type) {
    case 'text':
      return (
        <div>
          {block.header && (
            <h3 className="mb-2 font-jakarta text-[2rem] font-semibold text-white0">{block.header}</h3>
          )}
          <RichText text={block.body} className="font-jakarta text-body text-white0/90" />
        </div>
      )
    case 'text-hero':
      return (
        <RichText
          text={block.body}
          className="text-center font-jakarta text-display font-semibold text-white0"
        />
      )
    case 'img':
      if (!block.src) return null
      return (
        <img
          src={block.src}
          alt={block.imgAlt ?? ''}
          className="h-auto w-full rounded-img object-cover"
        />
      )
    default:
      return null
  }
}

import RichText from './RichText'

export default function ContentSectionTop({ header, label, sectionDesc, img = [] }) {
  const image = img[0]

  return (
    <div>
      <div className="mb-7">
        <h2 className="font-jakarta text-[2.5rem] font-bold leading-none text-white0">{header}</h2>
        {label && (
          <p className="font-jakarta text-label font-medium leading-none text-white0/60">{label}</p>
        )}
      </div>
      {sectionDesc && (
        <RichText text={sectionDesc} className="font-jakarta text-body text-white0/90" />
      )}
      {image?.src && (
        <img
          src={image.src}
          alt={image.alt ?? ''}
          className="mt-25 h-auto w-full rounded-img object-cover"
        />
      )}
    </div>
  )
}

export default function TagList({ tags, className = '' }) {
  return (
    <ul className={`flex flex-wrap ${className}`}>
      {tags.map((tag, index) => (
        <li key={tag} className="inline">
          {tag}
          {index < tags.length - 1 && <span aria-hidden="true" className="px-1.5">/</span>}
        </li>
      ))}
    </ul>
  )
}

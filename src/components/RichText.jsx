const TOKEN_REGEX = /\*\*(.+?)\*\*|\*(.+?)\*|p--(.+?)--p|b--(.+?)--b|--(.+?)--|;;(.+?);;/g

function Highlight({ colorClass, children }) {
  return <span className={`rounded-sm px-5 ${colorClass}`}>{children}</span>
}

// Parses one paragraph's inline markup: **bold**, *italic*, the three
// highlighter variants, and ;;dimmed;; text. Add a new alternative to
// TOKEN_REGEX (with its own capture group + branch here) to support more styling.
function renderInline(text) {
  const nodes = []
  let lastIndex = 0
  let key = 0
  let match

  const regex = new RegExp(TOKEN_REGEX)
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    if (match[1] !== undefined) {
      nodes.push(
        <strong key={key++} className="font-bold">
          {match[1]}
        </strong>,
      )
    } else if (match[2] !== undefined) {
      nodes.push(
        <em key={key++} className="italic">
          {match[2]}
        </em>,
      )
    } else if (match[3] !== undefined) {
      nodes.push(
        <Highlight key={key++} colorClass="bg-pink0/80">
          {match[3]}
        </Highlight>,
      )
    } else if (match[4] !== undefined) {
      nodes.push(
        <Highlight key={key++} colorClass="bg-blue0/80">
          {match[4]}
        </Highlight>,
      )
    } else if (match[5] !== undefined) {
      nodes.push(
        <Highlight key={key++} colorClass="bg-purple0/80">
          {match[5]}
        </Highlight>,
      )
    } else {
      nodes.push(
        <span key={key++} className="opacity-60">
          {match[6]}
        </span>,
      )
    }

    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

// Renders prose stored in projects.js as real <p> elements — one per "\n" in
// the source string — with spacing between them, instead of relying on <br />
// (a line break isn't semantically a new paragraph). Pass `className` for the
// styling each paragraph should carry; don't wrap the result in your own <p>.
export default function RichText({ text, className = '' }) {
  if (!text) return null

  const paragraphs = text.split('\n').filter((paragraph) => paragraph.length > 0)

  return (
    <div className="space-y-15">
      {paragraphs.map((paragraph, i) => (
        <p key={i} className={className}>
          {renderInline(paragraph)}
        </p>
      ))}
    </div>
  )
}

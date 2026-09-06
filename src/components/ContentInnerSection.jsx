import ContentBlock from './ContentBlock'
import Slideshow from './Slideshow'

const byType = (blocks, type) => blocks.filter((block) => block.type === type)


const ARRANGEMENTS = {
  '1col-text1col': ({ blocks }) => (
    <div className="grid grid-cols-1 gap-25">
      {blocks.map((block, i) => (
        <ContentBlock key={i} block={block} />
      ))}
    </div>
  ),

  '1col-text2col': ({ blocks }) => {
    const textBlocks = byType(blocks, 'text')
    const imgBlocks = byType(blocks, 'img')
    return (
      <div className="grid grid-cols-1 gap-25">
        <div className="grid grid-cols-1 gap-25 sm:grid-cols-2">
          {textBlocks.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </div>
        {imgBlocks.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}
      </div>
    )
  },

  '2col-text+img': ({ blocks }) => {
    const textBlocks = byType(blocks, 'text')
    const imgBlocks = byType(blocks, 'img')
    return (
      <div className="grid grid-cols-1 items-center gap-25 lg:grid-cols-2">
        <div className="flex flex-col gap-16">
          {textBlocks.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </div>
        <div className="flex w-full flex-col items-center gap-2">
          {imgBlocks.map((block, i) => (
            <div key={i} className="w-3/4">
              <ContentBlock block={block} />
            </div>
          ))}
        </div>
      </div>
    )
  },

  '1col-slideshow-text1col': ({ blocks }) => {
    const textBlocks = byType(blocks, 'text')
    const imgBlocks = byType(blocks, 'img')
    return (
      <div className="grid grid-cols-1 gap-25">
        <div className="grid grid-cols-1 gap-25">
          {textBlocks.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </div>
        <Slideshow images={imgBlocks} />
      </div>
    )
  },

  '1col-slideshow-text2col': ({ blocks }) => {
    const textBlocks = byType(blocks, 'text')
    const imgBlocks = byType(blocks, 'img')
    return (
      <div className="grid grid-cols-1 gap-25">
        <div className="grid grid-cols-1 gap-25 sm:grid-cols-2">
          {textBlocks.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </div>
        <Slideshow images={imgBlocks} />
      </div>
    )
  },
}

export default function ContentInnerSection({ type, blocks }) {
  const arrangement = ARRANGEMENTS[type]
  if (!arrangement) return null
  return arrangement({ blocks })
}

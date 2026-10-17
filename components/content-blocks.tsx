// Shared text blocks for the extra copy sections on service pages.
// Uses the same typography, colours and bullet style as the existing pages.

export type ContentBlock = {
  heading: string
  paragraphs?: string[]
  listIntro?: string
  list?: string[]
  outro?: string[]
}

export function ContentBlocks({ blocks, className = "bg-white" }: { blocks: ContentBlock[]; className?: string }) {
  return (
    <section className={`pb-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-x-16 gap-y-16">
          {blocks.map((block) => (
            <div key={block.heading}>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{block.heading}</h2>
              {block.paragraphs?.map((p, i) => (
                <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                  {p}
                </p>
              ))}
              {block.listIntro && <p className="text-gray-700 mb-4 leading-relaxed font-semibold">{block.listIntro}</p>}
              {block.list && (
                <ul className="grid md:grid-cols-2 gap-3 mb-4">
                  {block.list.map((item) => (
                    <li key={item} className="flex items-center">
                      <div className="w-2 h-2 bg-sound360 rounded-full mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {block.outro?.map((p, i) => (
                <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

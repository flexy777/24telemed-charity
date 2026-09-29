import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

type Props = {
  photos: string[]
  index: number
  title: string
  onClose: () => void
  onIndex: (i: number) => void
}

export default function Lightbox({ photos, index, title, onClose, onIndex }: Props) {
  const count = photos.length
  const prev = () => onIndex((index - 1 + count) % count)
  const next = () => onIndex((index + 1) % count)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onIndex((index - 1 + count) % count)
      if (e.key === 'ArrowRight') onIndex((index + 1) % count)
    }
    document.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [index, count, onClose, onIndex])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close">
        <X />
      </button>

      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={photos[index]} alt={`${title} — photo ${index + 1} of ${count}`} />
        <figcaption>
          <span>{title}</span>
          {count > 1 && (
            <span>
              {index + 1} / {count}
            </span>
          )}
        </figcaption>
      </figure>

      {count > 1 && (
        <>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft />
          </button>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next photo"
          >
            <ChevronRight />
          </button>
        </>
      )}
    </div>
  )
}

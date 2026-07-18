import { useEffect } from 'react'

function ImageLightbox({ images, activeIndex, onClose, onNavigate }) {
  const item = images[activeIndex]

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNavigate((activeIndex + 1) % images.length)
      if (event.key === 'ArrowLeft') onNavigate((activeIndex - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeIndex, images.length, onClose, onNavigate])

  if (!item) return null

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="lightbox anim-modal" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="modal-card__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <img src={item.image} alt={item.altText} />
        <p className="lightbox__caption">{item.caption}</p>
        <div className="lightbox__nav">
          <button type="button" onClick={() => onNavigate((activeIndex - 1 + images.length) % images.length)}>
            ← Previous
          </button>
          <button type="button" onClick={() => onNavigate((activeIndex + 1) % images.length)}>
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLightbox

import { useState } from 'react'
import ImageLightbox from './ImageLightbox.jsx'
import './GalleryGrid.css'

function GalleryGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <>
      <div className="grid grid--gallery">
        {images.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className="gallery-thumb card-hover"
            onClick={() => setActiveIndex(index)}
            aria-label={item.altText}
          >
            {item.type === 'video' ? (
              <>
                <video
                  className="gallery-thumb__media"
                  src={item.thumbnail}
                  muted
                  playsInline
                  preload="metadata"
                />
                <span className="gallery-thumb__play" aria-hidden="true">▶</span>
              </>
            ) : (
              <img className="gallery-thumb__media" src={item.thumbnail} alt={item.altText} />
            )}
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <ImageLightbox
          images={images}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  )
}

export default GalleryGrid

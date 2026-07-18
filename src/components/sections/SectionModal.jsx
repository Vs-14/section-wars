import { useEffect } from 'react'

function SectionModal({ section, onClose }) {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!section) return null

  const style = {
    '--card-primary': section.primaryColor,
    '--card-secondary': section.secondaryColor,
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div
        className="modal-card anim-modal"
        style={style}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-card__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <span className="section-card__code">{section.sectionCode}</span>
        <img className="modal-card__image" src={section.image} alt={section.themedName} />
        <h3>{section.themedName}</h3>
        <p className="modal-card__tagline">{section.tagline}</p>
        <p>{section.description}</p>
      </div>
    </div>
  )
}

export default SectionModal

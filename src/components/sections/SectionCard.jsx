import './SectionCard.css'

function SectionCard({ section, onSelect }) {
  const style = {
    '--card-primary': section.primaryColor,
    '--card-secondary': section.secondaryColor,
  }

  return (
    <button type="button" className="section-card card-hover" style={style} onClick={() => onSelect?.(section)}>
      <span className="section-card__code">{section.sectionCode}</span>
      <img className="section-card__image" src={section.image} alt={section.themedName} />
      <h3 className="section-card__name">{section.themedName}</h3>
      <p className="section-card__tagline">{section.tagline}</p>
    </button>
  )
}

export default SectionCard

function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow && <span className="badge">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p className="text-muted">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle

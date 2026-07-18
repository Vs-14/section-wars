function Timeline({ editions }) {
  return (
    <ol className="timeline">
      {editions.map((edition, index) => (
        <li key={`${edition.year ?? 'unknown'}-${index}`} className="timeline__item">
          <span className="timeline__year">{edition.year ?? '—'}</span>
          <div>
            <p className="timeline__theme">{edition.theme || 'Not publicly documented'}</p>
            {edition.tagline && <p className="text-muted">{edition.tagline}</p>}
          </div>
        </li>
      ))}
    </ol>
  )
}

export default Timeline

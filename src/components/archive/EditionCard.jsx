import './EditionCard.css'

function EditionCard({ edition }) {
  const { year, theme, tagline, dates, venue, description, poster, sourceLink } = edition

  return (
    <article className="edition-card">
      {poster && <img className="edition-card__poster" src={poster} alt={theme || 'Section Wars edition poster'} />}
      <div className="edition-card__body">
        <h3>{year ?? 'Year not documented'}</h3>
        <p className="edition-card__theme">{theme || 'Not publicly documented'}</p>
        {tagline && <p className="text-muted">{tagline}</p>}
        <p className="edition-card__meta text-muted">
          {dates || 'Dates not documented'} · {venue || 'Venue not documented'}
        </p>
        <p>{description}</p>
        {sourceLink && (
          <a className="edition-card__source" href={sourceLink} target="_blank" rel="noreferrer">
            Source
          </a>
        )}
      </div>
    </article>
  )
}

export default EditionCard

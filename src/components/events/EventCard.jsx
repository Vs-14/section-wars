import './EventCard.css'

function EventCard({ event }) {
  return (
    <article className="event-card card-hover">
      <img className="event-card__image" src={event.image} alt={event.title} />
      <div className="event-card__body">
        <span className="badge badge--muted">{event.category}</span>
        <h3>{event.title}</h3>
        <p>{event.shortDescription}</p>
        {!event.confirmed && (
          <p className="event-card__note text-muted">Example activity — not a confirmed schedule item.</p>
        )}
      </div>
    </article>
  )
}

export default EventCard

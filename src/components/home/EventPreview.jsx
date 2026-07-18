import EventCard from '../events/EventCard.jsx'
import SectionTitle from '../common/SectionTitle.jsx'
import Button from '../common/Button.jsx'

function EventPreview({ events }) {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Types of Events"
          title="Physical. Creative. Marketing."
          subtitle="A sample of the formats Section Wars has traditionally run."
        />
        <div className="grid grid--events">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
          <Button to="/events" variant="primary">
            See All Events
          </Button>
        </div>
      </div>
    </section>
  )
}

export default EventPreview

import PageHeader from '../components/layout/PageHeader.jsx'
import EventGrid from '../components/events/EventGrid.jsx'
import { events, eventCategories } from '../data/events.js'

function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Types of Events"
        subtitle="Traditional Section Wars formats, spanning physical, creative and marketing challenges."
      />
      <section className="section">
        <div className="container">
          <p className="text-muted" style={{ marginBottom: 'var(--space-lg)' }}>
            These are illustrative examples of formats Section Wars has run before — not a
            confirmed schedule for the current edition.
          </p>
          <EventGrid events={events} categories={eventCategories} />
        </div>
      </section>
    </>
  )
}

export default EventsPage

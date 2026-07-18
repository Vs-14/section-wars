import { useState } from 'react'
import EventCard from './EventCard.jsx'
import EventCategoryFilter from './EventCategoryFilter.jsx'

function EventGrid({ events, categories, showFilter = true }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleEvents =
    activeCategory === 'All' ? events : events.filter((event) => event.category === activeCategory)

  return (
    <div>
      {showFilter && (
        <EventCategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
      )}
      <div className="grid grid--events">
        {visibleEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default EventGrid

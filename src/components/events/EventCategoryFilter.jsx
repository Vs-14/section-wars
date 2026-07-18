function EventCategoryFilter({ categories, activeCategory, onChange }) {
  return (
    <div className="filter-bar">
      <button
        type="button"
        className={`filter-bar__pill ${activeCategory === 'All' ? 'filter-bar__pill--active' : ''}`}
        onClick={() => onChange('All')}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`filter-bar__pill ${activeCategory === category ? 'filter-bar__pill--active' : ''}`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default EventCategoryFilter

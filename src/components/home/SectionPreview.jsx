import SectionGrid from '../sections/SectionGrid.jsx'
import SectionTitle from '../common/SectionTitle.jsx'
import Button from '../common/Button.jsx'

function SectionPreview({ sections }) {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionTitle
          eyebrow="Seven Sections"
          title="Every Section, Its Own Party"
          subtitle="Tap a card for the full campaign identity."
        />
        <SectionGrid sections={sections} />
        <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
          <Button to="/sections" variant="primary">
            View All Sections
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SectionPreview

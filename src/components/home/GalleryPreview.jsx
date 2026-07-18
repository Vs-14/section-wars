import GalleryGrid from '../gallery/GalleryGrid.jsx'
import SectionTitle from '../common/SectionTitle.jsx'
import Button from '../common/Button.jsx'

function GalleryPreview({ images }) {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionTitle eyebrow="Gallery" title="From the Ground" subtitle="A first look — full gallery coming soon." />
        <GalleryGrid images={images} />
        <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
          <Button to="/gallery" variant="primary">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}

export default GalleryPreview

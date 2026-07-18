import PageHeader from '../components/layout/PageHeader.jsx'
import GalleryGrid from '../components/gallery/GalleryGrid.jsx'
import { gallery } from '../data/gallery.js'

function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="Gallery" title="Moments from Section Wars" subtitle="Photos and clips from the celebrations." />
      <section className="section">
        <div className="container">
          <p className="text-muted" style={{ marginBottom: 'var(--space-lg)' }}>
            Tap any photo or clip to view it full-size.
          </p>
          <GalleryGrid images={gallery} />
        </div>
      </section>
    </>
  )
}

export default GalleryPage

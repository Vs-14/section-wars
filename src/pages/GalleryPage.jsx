import PageHeader from '../components/layout/PageHeader.jsx'
import GalleryGrid from '../components/gallery/GalleryGrid.jsx'
import { gallery } from '../data/gallery.js'

function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="Gallery" title="Event Photography" subtitle="Moments from Section Wars." />
      <section className="section">
        <div className="container">
          <p className="text-muted" style={{ marginBottom: 'var(--space-lg)' }}>
            Placeholder images — real event photography will replace these once MAXI shares it.
          </p>
          <GalleryGrid images={gallery} />
        </div>
      </section>
    </>
  )
}

export default GalleryPage

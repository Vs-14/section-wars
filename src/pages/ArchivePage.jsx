import PageHeader from '../components/layout/PageHeader.jsx'
import Timeline from '../components/archive/Timeline.jsx'
import EditionCard from '../components/archive/EditionCard.jsx'
import { archive } from '../data/archive.js'

function ArchivePage() {
  return (
    <>
      <PageHeader
        eyebrow="Archive"
        title="Previous Editions"
        subtitle="A running record of Section Wars themes and editions, as MAXI documents them."
      />
      <section className="section">
        <div className="container">
          <Timeline editions={archive} />
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <div className="grid grid--archive">
            {archive.map((edition, index) => (
              <EditionCard key={`${edition.year ?? 'unknown'}-${index}`} edition={edition} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ArchivePage

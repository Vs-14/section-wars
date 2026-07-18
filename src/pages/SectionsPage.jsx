import PageHeader from '../components/layout/PageHeader.jsx'
import SectionGrid from '../components/sections/SectionGrid.jsx'
import { sections } from '../data/sections.js'

function SectionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sections"
        title="Seven Sections, Seven Campaigns"
        subtitle="Tap any card to see the full campaign identity — slogan, colours and story."
      />
      <section className="section">
        <div className="container">
          <SectionGrid sections={sections} />
        </div>
      </section>
    </>
  )
}

export default SectionsPage

import PageHeader from '../components/layout/PageHeader.jsx'
import SectionTitle from '../components/common/SectionTitle.jsx'

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="What Is Section Wars?"
        subtitle="MAXI's flagship inter-section festival at XLRI Jamshedpur."
      />

      <section className="section">
        <div className="container container--narrow">
          <SectionTitle title="The Idea" />
          <p>
            Every incoming batch at XLRI Jamshedpur is split into sections — four in Business
            Management (BM-A to BM-D) and three in Human Resource Management (HRM-A to HRM-C).
            Section Wars turns that everyday grouping into a season-long rivalry: each section
            builds its own identity, campaigns for attention, and competes across a mix of
            physical, creative and marketing events.
          </p>
          <p>
            The format changes every year around a fresh theme, but the core stays the same —
            sections compete, campus shows up, and MAXI runs the show from open to close.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container container--narrow">
          <SectionTitle title="MAXI's Role" />
          <p>
            MAXI, the Marketing Association of XLRI, conceives the annual theme, coordinates
            events across sections, and manages the on-ground and online presence of Section
            Wars — from campaign kits to the final scoreboard reveal.
          </p>
          <p className="text-muted">
            This page describes the general format of Section Wars. Specific rules, judging
            criteria and this year's full schedule are communicated separately by MAXI.
          </p>
        </div>
      </section>
    </>
  )
}

export default AboutPage

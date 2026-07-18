import HeroSection from '../components/home/HeroSection.jsx'
import AboutPreview from '../components/home/AboutPreview.jsx'
import ThemeBanner from '../components/home/ThemeBanner.jsx'
import SectionPreview from '../components/home/SectionPreview.jsx'
import EventPreview from '../components/home/EventPreview.jsx'
import GalleryPreview from '../components/home/GalleryPreview.jsx'
import Button from '../components/common/Button.jsx'
import { currentEdition } from '../data/currentEdition.js'
import { sections } from '../data/sections.js'
import { events } from '../data/events.js'
import { gallery } from '../data/gallery.js'

function HomePage() {
  return (
    <>
      <HeroSection edition={currentEdition} />
      <AboutPreview
        eyebrow="What is Section Wars?"
        title="Sections Compete. MAXI Runs the Show."
        body="Section Wars is MAXI's inter-section festival at XLRI Jamshedpur, where every batch section builds a campaign identity and competes across sport, creativity and marketing for the season's bragging rights."
        ctaTo="/about"
        ctaLabel="Learn More"
      />
      <ThemeBanner edition={currentEdition} />
      <SectionPreview sections={sections} />
      <EventPreview events={events.slice(0, 4)} />
      <GalleryPreview images={gallery.slice(0, 4)} />
      <section className="section container--narrow container" style={{ textAlign: 'center' }}>
        <h2>Curious about past editions?</h2>
        <p className="text-muted">Explore themes and stories from previous years of Section Wars.</p>
        <Button to="/archive" variant="outline">
          Visit the Archive
        </Button>
      </section>
    </>
  )
}

export default HomePage

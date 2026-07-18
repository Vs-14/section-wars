import Button from '../common/Button.jsx'
import './HeroSection.css'

function HeroSection({ edition }) {
  const { theme, tagline, dates, venue, heroImage, year } = edition

  return (
    <section className="hero anim-hero">
      <img className="hero__image" src={heroImage} alt={`${theme} — Section Wars ${year}`} />
      <div className="hero__scrim" />
      <div className="container hero__content">
        <span className="badge">Section Wars {year}</span>
        <h1>{theme}</h1>
        <p className="hero__tagline">{tagline}</p>
        <p className="hero__meta">
          {dates} · {venue}
        </p>
        <div className="hero__actions">
          <Button to="/sections" variant="primary">
            Meet the Sections
          </Button>
          <Button to="/events" variant="outline">
            See the Events
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

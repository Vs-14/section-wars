import Button from '../common/Button.jsx'
import SectionTitle from '../common/SectionTitle.jsx'

function AboutPreview({ eyebrow, title, body, ctaTo, ctaLabel }) {
  return (
    <section className="section">
      <div className="container container--narrow section-title--center">
        <SectionTitle eyebrow={eyebrow} title={title} align="center" />
        <p>{body}</p>
        {ctaTo && (
          <Button to={ctaTo} variant="outline">
            {ctaLabel}
          </Button>
        )}
      </div>
    </section>
  )
}

export default AboutPreview
